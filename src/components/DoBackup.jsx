import React, { useState } from 'react'
import { Dialog, Button, InputText } from 'react-windows-ui'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const { dialog } = window.require('electron').remote

const itemStyle = {
  marginBottom: '10px'
}


export default function ChronDialog({ isOpen, onClose, event }) {
  const height = window.outerHeight
  const [src, setsrc] = useState('')
  const [dist, setdist] = useState('')

  return (
    <Dialog
      isVisible={isOpen}
      // onBackdropPress={()=>{ setOpenSettingDialog(false)}}
      style={{ height: height + 'px', width: '100%', color: 'black', padding: '10px' }}
      showDropShadow={true}>
      <div className="container">
        <h2>Effettua un backup</h2><hr />
        <div className="row">
          <div className="col-9">
            <InputText
              width="400px"
              placeholder="Inserisci la sorgente"
              tooltip="Inserisci la sorgente"
              value={src}
              onChange={(e) => { setsrc(e.target.value) }}
            />
          </div>
          <div className="col-3 d-flex flex-row-reverse">
            <Button value='Browse' type="primary" onClick={() => {
              dialog.showOpenDialog({
                properties: ['openDirectory']
              }).then((filePaths) => {
                console.log(filePaths)
                if (filePaths.canceled) {
                  return
                }
                else
                  filePaths && setsrc(parseUrl(filePaths.filePaths[0]))
              })
            }} />
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <InputText
              width="400px"
              placeholder="Inserisci la destinazione"
              tooltip="Inserisci la destinazione"
              value={dist}
              onChange={(e) => { setdist(e.target.value) }}
            />
          </div>
          <div className="col-3 d-flex flex-row-reverse mt-3">
            <Button value='Browse' type="primary" onClick={() => {
              dialog.showOpenDialog({
                properties: ['openDirectory']
              }).then((filePaths) => {                
                if (filePaths.canceled){
                  return
                }
                else
                setdist(parseUrl(filePaths.filePaths[0]))
              })
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} className="mt-5">
          <Button
            value="ESEGUI IL BACKUP"
            type="primary"
            onClick={() => {
              event.emit('backup', { src, dist })
              onClose()
            }} />
          <div className="app-space-15"></div>
          <Button
            value="Chiudi"
            onClick={onClose} />
          
        </div>
      </div>      
      
    </Dialog>
  )
}

/**
 * Parse \ in / in path
 * 
 * @params {string} path
 * @returns {string} path with \ replaced by /
 */
function parseUrl(path) {
  return path.replace(/\\/g, '/')
}