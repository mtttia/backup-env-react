import EventEmitter from 'events'
const { ipcRenderer } = window.require('electron')

let eManager = new EventEmitter();

eManager.on('hello-world', (args) => {
  ipcRenderer.send('hello-world');
})

eManager.on('backup', (args) => {
  ipcRenderer.send('backup', args);
})

eManager.on('setting', (args) => {
  ipcRenderer.send('setting', args);
})

export default eManager