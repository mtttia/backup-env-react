const { ipcRenderer } = require('electron')
const backup = require('./backup')
var cron = require('node-cron');


ipcRenderer.on('hello-server', (event, arg) => {  
  ipcRenderer.send('hello-client-from-server', 'Hello from server'); 
})
ipcRenderer.send('server-ready', 'Hello from server');

ipcRenderer.on('backup', (event, arg) => {
  const { src, dist } = arg
  backup(src, dist).then(report => {
    ipcRenderer.send('backup-done', report)
  })
})

ipcRenderer.on('setting', (event, arg) => {
  console.log('setting', arg)
})