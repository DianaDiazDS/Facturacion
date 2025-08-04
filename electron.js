const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { spawn } = require('child_process');

let backendProcess;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

// const startUrl = isDev
//     ? 'http://localhost:3000'
//     // : `file://${path.resolve(__dirname, 'client', 'dist', 'index.html')}`;
//     : mainWindow.loadFile(path.join(__dirname, 'client', 'dist', 'index.html'));

//     console.log('Loading from:', startUrl);


//   mainWindow.loadURL(startUrl);
//   mainWindow.webContents.openDevTools();
//   // Puedes abrir las DevTools si quieres depurar:
//   // mainWindow.webContents.openDevTools();

//   mainWindow.on('closed', () => {
//     mainWindow = null;
//   });
// }


// if (isDev) {
//     const devUrl = 'http://localhost:3000';
//     console.log('Loading from:', devUrl);
//     mainWindow.loadURL(devUrl);
//   } else {
//     const prodPath = path.join(__dirname, 'client', 'dist', 'index.html');
//     console.log('Loading from file:', prodPath);
//     mainWindow.loadFile(prodPath);
//   }

const startUrl = isDev
  ? 'http://localhost:3000'
  : `file://${path.resolve(__dirname, 'client', 'dist', 'index.html')}`;
mainWindow.loadURL(startUrl);


  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// app.on('ready', createWindow);
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });
// app.on('activate', () => {
//   if (mainWindow === null) createWindow();
// });
// Arrancar el servidor Express automáticamente en modo producción
// Arrancar el backend Express automáticamente en producción
function startBackend() {
  const backendPath = path.join(__dirname, 'server', 'index.js');
  backendProcess = spawn('node', [backendPath], {
    stdio: 'inherit',
    shell: true,
  });
}

// Inicialización de la app
app.whenReady().then(() => {
  if (!isDev) startBackend();
  createWindow();
});

app.on('window-all-closed', () => {
  if (backendProcess) backendProcess.kill(); // Detener backend al cerrar
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});