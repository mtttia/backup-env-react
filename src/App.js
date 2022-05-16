import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import { Dialog, Button } from 'react-windows-ui'


function App({event}) {
  const backup = useSelector(state => state.backupInfo)
  const [openSettingDialog, setOpenSettingDialog] = React.useState(false && backup != null)
  
  return (
    <div>
      <Dialog
        isVisible={openSettingDialog}
        onBackdropPress={() => { setOpenSettingDialog(false) }}
        showDropShadow={true}>
        ciao a tutti

        <Button
          style={{ margin: '15px', float: 'right' }}
          value="Close"
          onClick={()=>{setOpenSettingDialog(false)}} />
      </Dialog>
    </div>
  );
}
export default App
