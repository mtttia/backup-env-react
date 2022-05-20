import React from 'react'
import { Dialog, Button } from 'react-windows-ui'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const itemStyle = {
  marginBottom: '10px'
}


export default function ChronDialog({ isOpen, onClose }) {
  const height = window.outerHeight

  return (
    <Dialog
      isVisible={isOpen}
      // onBackdropPress={()=>{ setOpenSettingDialog(false)}}
      style={{ height: height + 'px', width: '100%', color: 'black', padding: '10px' }}
      showDropShadow={true}>
      <div className="container">
        Fai un backup
      </div>
      <Button
        style={{ margin: '15px', float: 'right' }}
        value="Chiudi"
        onClick={onClose} />
    </Dialog>
  )
}
