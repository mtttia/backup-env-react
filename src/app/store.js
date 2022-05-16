import { configureStore } from '@reduxjs/toolkit'
import backupInfo from '../features/backupInfo'

const fs = window.require('fs')

const persistedState = localStorage.getItem('reduxState') 
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}


let store = configureStore({
  reducer: {
    backupInfo
  },
  // load store from LocalStorage
  preloadedState: persistedState
})


// save store from LocalStorage
store.subscribe(() => {
  let toSave = store.getState()
  let save = { ...toSave }
  localStorage.setItem('reduxState', JSON.stringify(save))
})

export default store