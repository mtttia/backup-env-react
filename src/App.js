import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import { Dialog, Button } from 'react-windows-ui'
import ChronDialog from './components/ChronDialog';
import DoBackup from './components/DoBackup';
import icon from './assets/ic_launcher.png'
import FloatingActionBotton from './components/FloatingActionBotton';
import History from './components/history';

function App({event}) {
  const backup = useSelector(state => state.backupInfo)
  const [openSettingDialog, setOpenSettingDialog] = React.useState(false)
  const [openDoBakcup, setOpenDoBakcup] = React.useState(false)
  const [openHistory, setOpenHistory] = React.useState(false)
  
  return (
    <div>
      {
        backup
          ? null
          : <NotSetted openDoBakcup={() => { setOpenDoBakcup(true) }} openSettingDialog={() => { setOpenSettingDialog(true) }} event={event} />          
      }

      <DoBackup isOpen={openDoBakcup} onClose={() => setOpenDoBakcup(false)} event={event }/>
      <ChronDialog isOpen={openSettingDialog} onClose={() => { setOpenSettingDialog(false) }} event={event} />
      <History isOpen={openHistory} onClose={() => { setOpenHistory(false) }} />
      <FloatingActionBotton openDoBackup={() => setOpenDoBakcup(true)} openSetting={() => setOpenSettingDialog(true)} openHistory={()=>{setOpenHistory(true)}} />
    </div>
  );
}

function NotSetted({openSettingDialog, openDoBakcup, event}) {
  
  return (
    <>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-6 d-flex justify-content-center'>
            <h1>Benvenuto su ENV Backup</h1>
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <img src={icon} alt='logo' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-6 d-flex justify-content-center'>
            <Button onClick={openSettingDialog} value="Configura ENV Backup" type="primary" className="col-6" />
          </div>
          <div className='col-6 d-flex justify-content-center'>
            <Button onClick={openDoBakcup} value="Fai un backup" className="col-6" type="primary-outline" />
          </div>
        </div>

      </div>
      
    </>
  )
}
export default App
