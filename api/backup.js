const { existsSync, rmSync } = require('fs')
const fs = require('fs-extra')

async function copyDir(pathToCopy, finalPath) {
  // fs.ensureDirSync(pathToCopy)
  // fs.ensureDirSync(finalPath)
  await fs.copy(pathToCopy, finalPath)
}

/**
 * Will do the backup of src in dest folder, it will return an Object with the status.
 *
 * @author mtttia
 * @param {string} src The source folder.
 * @param {string} dist The destination folder, where backup will be write.
 * @return {Object} - The report with the status and the backup info.
 */
async function backup(src, dist) {
  report = {
    success: false,
    message: '',
    data: new Date().getTime(),
    startHour: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() ,
    endHour: null,
    error: ''
  }  

  try {
    await copyDir(src, dist)
    report.success = true;
    report.endHour = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    report.message = 'OK'
  } catch (ex) {
    report.endHour = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    report.error = ex.message
    report.message = 'Errore durante il backup'
  }
  return report
}

module.exports = backup