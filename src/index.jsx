import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@mui/material/styles';

import store from './app/store'
import { Provider } from 'react-redux'
import themeLoader from './theme/themeLoader';
import EventEmitter from 'events'

const { ipcRenderer } = window.require('electron')

ipcRenderer.send('client-ready')
ipcRenderer.on('hello-client', (event, arg) => {   
  ipcRenderer.send('hello-client-from-client', 'Hello from client')
})

const eManager = new EventEmitter();

eManager.on('hello-world', (args) => {
  ipcRenderer.send('hello-world');
})

ipcRenderer.on('hello-world', (e, args) => {
  alert('Hello world')
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyApp />
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);

function MyApp() {
  const muiTheme = themeLoader('system')

  return (
    <ThemeProvider theme={muiTheme}>
      <App event={eManager}/>
    </ThemeProvider>
  )
  
}
