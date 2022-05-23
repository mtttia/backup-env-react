const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()

let win = null, server = null;

ipcMain.on('server-ready', (event, arg) => {
  server.webContents.send('hello-server', 'Hello server');
})

ipcMain.on('hello-client-from-server', (event, arg) => {
  console.log("HELLO FROM SERVER")
  // server.webContents.send('backup', { src: 'C:\\Users\\matti\\Documents\\Progetti\\ELECTRON\\backup-env-react\\example\\src', dest:'C:\\Users\\matti\\Documents\\Progetti\\ELECTRON\\backup-env-react\\example\\dist'});
})

ipcMain.on('backup-done', (event, arg) => {
  //if win exoist and is not destroyed then send message
  if (win && !win.isDestroyed()) {
    win.webContents.send('backup-done', arg);
  }
})

ipcMain.on('backup', (event, arg) => {
  console.log('here',arg);
  server.webContents.send('backup', arg);
})

ipcMain.on('client-ready', (event, arg) => { 
  console.log('CLIENT READY');
  win.webContents.send('hello-client', 'Hello from client');
})

ipcMain.on('hello-client-from-client', (event, arg) => { 
  console.log('HELLO FROM CLIENT');
})

ipcMain.on('hello-world', (event, arg) => {
  console.log('hello world');
  event.reply('hello-world')
})

function createWindow() { 
  createClient();
  createServer();  
}

function createClient() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    }
  })

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
}

function createServer() {
  server = new BrowserWindow({
    show: false,  
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }

  })

  server.webContents.openDevTools();

  server.loadFile(path.join(__dirname, '../api/index.html'));
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
