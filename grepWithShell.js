
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

module.exports = async function(file) {
  try{
    const {stdout, stderr} = await exec(`rg -e '- \\[ \\]' ${file}`)
    return stdout
  } catch (err) {
    return false
  }
}
