const { app, BrowserWindow, session, ipcMain, dialog } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

// Configurações do auto-updater
autoUpdater.autoDownload = true;
autoUpdater.allowPrerelease = false;

// Variável para evitar o garbage collection da janela principal
let mainWindow;

// Desativar logs em produção
if (app.isPackaged) {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
}

function checkUpdates() {
  // Apenas roda em produção (app buildado)
  if (app.isPackaged) {
    autoUpdater.checkForUpdatesAndNotify();

    autoUpdater.on('update-available', () => {
      console.log('Atualização disponível.');
    });

    autoUpdater.on('update-downloaded', (info) => {
      dialog.showMessageBox({
        type: 'info',
        title: 'Atualização Pronta',
        message: `Uma nova versão (${info.version}) foi baixada. Deseja reiniciar para atualizar agora?`,
        buttons: ['Reiniciar Agora', 'Depois']
      }).then((result) => {
        if (result.response === 0) {
          autoUpdater.quitAndInstall();
        }
      });
    });

    autoUpdater.on('error', (err) => {
      console.error('Erro no auto-updater:', err);
    });
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
    titleBarOverlay: process.platform === 'win32' ? {
      color: '#eceeef', // Mesma cor do --surface-container-high
      symbolColor: '#444444',
      height: 38
    } : false,
    icon: path.join(__dirname, process.platform === 'win32' ? '../public/app-icon.ico' : '../public/app-icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true // Fundamental para renderizar webviews dentro do React
    },
  });

  // Não precisamos mais do setMenu(null) pois o titleBarStyle hidden já esconde.
  // Mas pode ser mantido por segurança.
  mainWindow.setMenu(null);

  // Em desenvolvimento, o Vite serve a aplicação em localhost:5173
  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
  if (isDev) {
    mainWindow.loadURL('http://localhost:5199');
    // mainWindow.webContents.openDevTools(); // Comentado para não poluir
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // Necessário para que o ícone apareça corretamente na barra de tarefas do Windows
  if (process.platform === 'win32') {
    app.setAppUserModelId('com.assistencialize.multizap');
  }
  
  createWindow();
  checkUpdates(); // Inicia a busca por atualizações

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// IPC handler para limpar cache de uma sessão específica
ipcMain.handle('clear-session-cache', async (event, partitionId) => {
  try {
    const sess = session.fromPartition(partitionId);
    await sess.clearStorageData();
    return { success: true };
  } catch (error) {
    console.error('Error clearing session data:', error);
    return { success: false, error: error.message };
  }
});
