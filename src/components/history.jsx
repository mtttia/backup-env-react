import React, { useState } from 'react'
import { Dialog, Button, InputText } from 'react-windows-ui'

const fs = window.require('fs')
const path = window.require('path')

export default function History({ isOpen, onClose }) {
  const height = window.outerHeight
  const backupPath = path.join(__dirname, '../')

  return (
    <Dialog
      isVisible={isOpen}
      // onBackdropPress={()=>{ setOpenSettingDialog(false)}}
      style={{ height: height + 'px', width: '100%', color: 'black', padding: '10px' }}
      showDropShadow={true}>
      <div className="container">
        {backupPath}
      </div>
      <Button
        value='Chiudi'
        // type="primary"
        onClick={() => {
          onClose()
        }}
      />
    </Dialog>
  )
}
