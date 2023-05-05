const log = require('npmlog');
const isDebug = require('./isDebug');

if(isDebug()){
    log.level = 'verbose';
}else{
    log.level = 'info';
}

log.heading = 'jade-cli'

module.exports = log