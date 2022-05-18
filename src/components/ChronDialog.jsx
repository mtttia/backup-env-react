import React from 'react'
import { Select, Dialog, Button } from 'react-windows-ui'
import { useSelector, useDispatch } from 'react-redux'
import { setBackup } from '../features/backupInfo'

export default function ChronDialog({ isOpen, onClose }) {
  const backup = useSelector(state => state.backupInfo)
  const [second, setsecond] = React.useState(backup ? backup.second : '*');
  const [minute, setminute] = React.useState(backup ? backup.minute : '*');
  const [hour, sethour] = React.useState(backup ? backup.hour : '*');
  const [dayMont, setdayMont] = React.useState(backup ? backup.dayMont : '*');
  const [month, setmonth] = React.useState(backup ? backup.month : '*');
  const [dayWeek, setdayWeek] = React.useState(backup ? backup.dayWeek : '*');
  const height = window.outerHeight

  return (
    <Dialog
      isVisible={isOpen}
      // onBackdropPress={()=>{ setOpenSettingDialog(false)}}
      style={{height: height+'px', width:'100%', color:'black', padding:'10px'}}
      showDropShadow={true}>
      <div>
        <p style={{display:'inline', marginRight:'10px'}}>Secondi</p>
        <Select
          defaultValue={second}
          onChange={(value) => setsecond(value)}
          data={seconds.map(v => { return { label: v, value: v } })}
        />
      </div>
      <div>
        <p style={{ display: 'inline', marginRight: '10px' }}>Minuti</p>
        <Select
          defaultValue={minute}
          onChange={(value) => setminute(value)}
          data={minutes.map(v => { return { label: v, value: v } })}
        />
      </div>
      <div>
        <p style={{ display: 'inline', marginRight: '10px' }}>Ore</p>
        <Select
          defaultValue={hour}
          onChange={(value) => sethour(value)}
          data={hours.map(v => { return { label: v, value: v } })}
        />
      </div>
      <div>
        <p style={{ display: 'inline', marginRight: '10px' }}>Giorno del mese</p>
        <Select
          defaultValue={dayMont}
          onChange={(value) => setdayMont(value)}
          data={dayMonths.map(v => { return { label: v, value: v } })}
        />
      </div>
      <div>
        <p style={{ display: 'inline', marginRight: '10px' }}>Mese</p>
        <Select
          defaultValue={month}
          onChange={(value) => setmonth(value)}
          data={months}
        />
      </div>
      <div>
        <p style={{ display: 'inline', marginRight: '10px' }}>Giorno della settimana</p>
        <Select
          defaultValue={dayWeek}
          onChange={(value) => setdayWeek(value)}
          data={dayWeeks}
        />
      </div>
      <Button
        style={{ margin: '15px', float: 'right' }}
        value="Chiudi"
        onClick={onClose} />
    </Dialog>
  )
}


const seconds = new Array(60).fill(null).map((val, i) => {
  if (i == 0)
    return '*'
  else
    return i;
})

const minutes = new Array(60).fill(null).map((val, i) => {
  if (i == 0)
    return '*'
  else
    return i;
})

const hours = new Array(24).fill(null).map((val, i) => {
  if (i == 0)
    return '*'
  else
    return i;
})

const dayMonths = new Array(32).fill(null).map((val, i) => {
  if (i == 0)
    return '*'
  else
    return i;
})

const months = [
  { label: '*', value: '*' },
  { label: 'Gennaio', value: 1 },
  { label: 'Febbraio', value: 2 },
  { label: 'Marzo', value: 3 },
  { label: 'Aprile', value: 4 },
  { label: 'Maggio', value: 5 },
  { label: 'Giugno', value: 6 },
  { label: 'Luglio', value: 7 },
  { label: 'Agosto', value: 8 },
  { label: 'Settembre', value: 9 },
  { label: 'Ottobre', value: 10 },
  { label: 'Novembre', value: 11 },
  { label: 'Dicembre', value: 12 },
]

const dayWeeks = [
  { label: '*', value: '*' },
  { label: 'Lunedì',    value: 1 },
  { label: 'Martedì',   value: 2 },
  { label: 'Mercoledì', value: 3 },
  { label: 'Giovedì',   value: 4 },
  { label: 'Venerdì',   value: 5 },
  { label: 'Sabato',    value: 6 },
  { label: 'Domenica',  value: 7 },
]