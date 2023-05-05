const commander = require('commander');
const { program } = commander;
const pkg = require('../package.json');
const createInitCommand = require('@jadecli/init')
const { log,isDebug } = require('@jadecli/utils');
const semver = require('semver');
const LOWEST_NODE_VERSION = '18.0.0'


process.on('uncaughtException',(e) => {
    if(isDebug()){
        console.log(e);
    }else{
        // console.log(e.message);
        log.error(e.message)
    }
})

function checkNodeVersion(){
    log.verbose('node version',process.version);
    if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
        throw new Error(`jade-cli需要安装${LOWEST_NODE_VERSION}以上版本的Node.js`)
    }
}

function preAction() {
    checkNodeVersion();
}

module.exports = function (args){
    log.info('version',pkg.version)
    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug','是否开启调试模式',false)
        .hook('preAction',preAction)

    // 注册命令
    // program
    //     .command('init [name]')
    //     .description('init project')
    //     .option('-f, --force','是否强制更新',false)
    //     .action((name,opts) => {
    //         console.log('init',name,opts);
    //     })

    createInitCommand(program)

    program.parse(process.argv)
}