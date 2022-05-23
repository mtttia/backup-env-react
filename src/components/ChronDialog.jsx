import React from 'react'
import {  Dialog, Button } from 'react-windows-ui'
import { useSelector, useDispatch } from 'react-redux'
import { setBackup } from '../features/backupInfo'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const itemStyle = {
  marginBottom: '10px'
}


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
      <div className="container">
        <div className="row">
          <h2>Seleziona le impostazini di configurazione</h2>
        </div>
        <hr />
        <div className='row'>
          <p className='col-4'>Secondi</p>
          <FormControl className='col-8'>
            <InputLabel id="second">Secondi</InputLabel>
            <Select
              labelId="second"
              value={second}
              label="Secondi"
              onChange={(e) => setsecond(e.target.value)}
            >
              {
                seconds.map(v =>
                  <MenuItem value={v}>{v}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
        <div className='row mt-3'>
          <p className='col-4'>Minuti</p>          
          <FormControl className='col-8'>
            <InputLabel id="minute">Minuti</InputLabel>
            <Select
              labelId="minute"
              value={minute}
              label="Minuti"
              onChange={(e) => setminute(e.target.value)}
            >
              {
                minutes.map(v =>
                  <MenuItem value={v}>{v}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
        <div className='row mt-3'>
          <p className='col-4'>Ore</p>
          <FormControl className='col-8'>
            <InputLabel id="hour">Ore</InputLabel>
            <Select
              labelId="hour"
              value={hour}
              label="Ore"
              onChange={(e) => sethour(e.target.value)}
            >
              {
                hours.map(v =>
                  <MenuItem value={v}>{v}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
        <div className='row mt-3'>
          <p className='col-4'>Giorno del mese</p>
          <FormControl className='col-8'>
            <InputLabel id="dayMont">Giorno del mese</InputLabel>
            <Select
              labelId="dayMont"
              value={dayMont}
              label="Giorno del mese"
              onChange={(e) => setdayMont(e.target.value)}
            >
              {
                dayMonths.map(v =>
                  <MenuItem value={v}>{v}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
        <div className='row mt-3'>
          <p className='col-4'>Mese</p>
          <FormControl className='col-8'>
            <InputLabel id="month">Mese</InputLabel>
            <Select
              labelId="month"
              value={month}
              label="Mese"
              onChange={(e) => setmonth(e.target.value)}
            >
              {
                months.map(v =>
                  <MenuItem value={v.value}>{v.label}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>       
        <div className='row mt-3'>
          <p className='col-4'>Giorno della settimana</p>
          <FormControl className='col-8'>
            <InputLabel id="deyWeek">Giorno della settimana</InputLabel>
            <Select
              labelId="deyWeek"
              value={dayWeek}
              label="GIorno della settimana"
              onChange={(e) => setdayWeek(e.target.value)}
            >
              {
                dayWeeks.map(v =>
                  <MenuItem value={v.value}>{v.label}</MenuItem>
                )
              }
            </Select>
          </FormControl>
        </div>
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