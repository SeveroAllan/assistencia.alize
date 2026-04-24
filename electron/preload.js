const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  clearSessionCache: (partitionId) => ipcRenderer.invoke('clear-session-cache', partitionId)
});
