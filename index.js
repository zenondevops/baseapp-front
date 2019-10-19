require('dotenv').config()
const { execSync } = require('child_process')


execSync(`find ./js/ -type f -exec sed -i "s/process.env.BACKURL/\'${ process.env.BACKURL.replace(/\//g, '\\/') }\'/g" {} +`)
execSync(`find ./js/ -type f -exec sed -i "s/process.env.WWWURL/\'${ process.env.WWWURL.replace(/\//g, '\\/') }\'/g" {} +`)

execSync('http-server -p ' + process.env.APP_PORT)