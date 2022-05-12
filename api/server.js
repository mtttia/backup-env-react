const { ipcRenderer } = require('electron')

ipcRenderer.on('hello-server', (event, arg) => {  
  ipcRenderer.send('hello-client-from-server', 'Hello from server'); 
})
ipcRenderer.send('server-ready', 'Hello from server');