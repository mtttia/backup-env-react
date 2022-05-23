const fs = require('fs');

/**
 * create a folder called 'data' then create in this folder two files: 'backup.json' and 'setting.json', then write into backup.json '[]'
 */

const dataPath = path.join(__dirname, 'data');
const backupPath = path.join(dataPath, 'backup.json');
const settingPath = path.join(dataPath, 'setting.json');
function init() {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(dataPath);
  }
  if (!fs.existsSync(backupPath)) {
    fs.writeFileSync(backupPath, '[]');
  }
  if (!fs.existsSync(settingPath)) {
    fs.writeFileSync(settingPath, '{}');
  }
}

function updateBackup(backup) {
  let data = fs.readFileSync(backupPath);
  let json = JSON.parse(data);
  json.push(backup);
  fs.writeFileSync(backupPath, JSON.stringify(json));
}

function updateSetting(setting) {
  fs.writeFileSync(settingPath, JSON.stringify(setting));
}

module.exports = {
  init,
  updateBackup,
  updateSetting
}