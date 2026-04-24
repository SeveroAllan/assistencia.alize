---
name: Ambient Orbit
colors:
  surface: '#f8fafb'
  surface-dim: '#d8dadb'
  surface-bright: '#f8fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f5'
  surface-container: '#eceeef'
  surface-container-high: '#e6e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#414754'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#eff1f2'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005bc0'
  primary: '#005bbf'
  on-primary: '#ffffff'
  primary-container: '#1a73e8'
  on-primary-container: '#ffffff'
  inverse-primary: '#adc7ff'
  secondary: '#b51b15'
  on-secondary: '#ffffff'
  secondary-container: '#d9372b'
  on-secondary-container: '#fffbff'
  tertiary: '#795900'
  on-tertiary: '#ffffff'
  tertiary-container: '#987000'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410001'
  on-secondary-fixed-variant: '#930004'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#fbbc05'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#f8fafb'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Work Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  h2:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-xs:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 16px
  element-gap: 12px
  sidebar-width: 320px
  avatar-size-sm: 32px
  avatar-size-lg: 48px
---

## Brand & Style

The brand personality of this design system is professional, helpful, and unobtrusive. It is designed specifically for a Google Chrome sidebar environment, where it must coexist harmoniously with browser content without causing visual fatigue. The target audience includes power users and professionals who require high-density information with low cognitive load.

The design style follows a **Corporate / Modern** aesthetic, blending Material Design 3 principles with a more refined, airy utility. It focuses on functional minimalism—using whitespace and subtle tonal shifts rather than heavy decorative elements to guide the user’s eye. The emotional response is one of reliability and efficiency.

## Colors

The palette is anchored in a pristine white and "Google Gray" foundation to ensure the interface feels native to the Chrome ecosystem. 

- **Primary (Blue):** Used for primary actions, active states, and focus indicators.
- **Accents (Red, Yellow, Green):** Reserved for semantic meaning—notifications, status indicators, or specific categorical branding within the sidebar.
- **Neutrals:** Soft grays (#f8f9fa to #dadce0) are used for backgrounds, borders, and secondary text to maintain a low-contrast, comfortable reading environment.

## Typography

This design system utilizes **Work Sans** for its exceptional legibility and neutral, professional tone. The type scale is intentionally compact to accommodate the restricted horizontal width of a browser sidebar (typically 320px-400px).

- **Headlines:** Use semi-bold weights with tight tracking to establish clear hierarchy.
- **Body:** Standardized at 14px for primary content to mirror standard web readability.
- **Labels:** Used for metadata, timestamps, and button text, often utilizing a medium weight to distinguish from body copy at smaller sizes.

## Layout & Spacing

The layout philosophy follows a **Fixed Width / Fluid Height** model. Because the sidebar is constrained horizontally, the design relies on a strict vertical rhythm based on a 4px grid.

- **Margins:** A consistent 16px safe area is maintained on the left and right edges.
- **Structure:** Content is organized in a single-column stack. Components use flexible flexbox layouts to adapt if the user manually resizes the sidebar width.
- **Guttering:** Elements within a group are separated by 8px, while distinct sections are separated by 24px.

## Elevation & Depth

To maintain a clean, modern look, this design system avoids heavy shadows. Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**.

- **Level 0 (Background):** The base sidebar color is #ffffff.
- **Level 1 (Cards/Containers):** Subtle background fills of #f1f3f4 or 1px solid borders in #e8eaed are used to define zones.
- **Level 2 (Popovers/Switchers):** Only the quick-switch mechanism and dropdowns use an ambient shadow (0px 4px 12px rgba(0,0,0,0.08)) to indicate they are floating above the main interface.

## Shapes

The shape language is **Soft**. A base radius of 4px (0.25rem) is applied to buttons and input fields to maintain a professional, structured feel. 

- **Avatars:** Strictly circular (pill-shaped) to provide a organic contrast against the geometric grid.
- **Active States:** Selection indicators (like the active profile in the switcher) use a 4px radius on the background highlight.

## Components

### Vertical Sidebar & Profile Switcher
The core component is the **Profile Rail**. It features circular avatars (32px) stacked vertically. The "Quick-Switch" mechanism is triggered by clicking the active avatar, revealing a popover with a list of accounts. Each account row includes the avatar, primary name (h2), and sub-label (label-md).

### Buttons & Chips
- **Primary Buttons:** Solid #1a73e8 with white text. 4px border radius.
- **Ghost Buttons:** No fill, #5f6368 text, appearing only on hover with a #f1f3f4 background.
- **Chips:** Used for filtering; 12px font size, 24px height, with a light gray stroke and #202124 text.

### Inputs & Lists
- **Input Fields:** 1px border (#dadce0), 8px internal padding. On focus, the border thickens to 2px and changes to the primary blue.
- **Lists:** Clean rows with 12px vertical padding. Active list items are denoted by a subtle left-aligned 3px blue vertical bar (accent).

### Navigation
A bottom-pinned icon bar provides quick access to settings and help, using 20px monochrome icons with high-contrast active states.