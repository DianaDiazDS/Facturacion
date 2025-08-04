const path = require('path');
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // si tienes uno
    },
  });

  //  Producción: Carga el archivo HTML del cliente construido
  win.loadFile(path.join(__dirname, 'client', 'dist', 'index.html'));
}

app.whenReady().then(createWindow);
