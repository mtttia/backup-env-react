import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import { Dialog, Button } from 'react-windows-ui'
import ChronDialog from './components/ChronDialog';


function App({event}) {
  const backup = useSelector(state => state.backupInfo)
  const [openSettingDialog, setOpenSettingDialog] = React.useState(false && backup != null)
  
  return (
    <div>
      <Button
        style={{ margin: '15px', float: 'right' }}
        value="Apri"
        onClick={() => { setOpenSettingDialog(true) }} />
      <ChronDialog isOpen={openSettingDialog} onClose={()=>{setOpenSettingDialog(false)}} />
    </div>
  );
}
export default App
