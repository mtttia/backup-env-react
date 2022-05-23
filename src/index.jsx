import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@mui/material/styles';
import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
import store from './app/store'
import { Provider } from 'react-redux'
import themeLoader from './theme/themeLoader';
import eManager from './event'

const { ipcRenderer } = window.require('electron')

ipcRenderer.send('client-ready')
ipcRenderer.on('hello-client', (event, arg) => {   
  ipcRenderer.send('hello-client-from-client', 'Hello from client')
})

ipcRenderer.on('hello-world', (e, args) => {
  alert('Hello world')
})

ipcRenderer.on('backup-done', (e, args) => {
  alert('Backup done')
  console.log(args);
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
