const commander = require('commander');
const { program } = commander;
const pkg = require('../package.json');
const createInitCommand = require('@jadecli/init')

module.exports = function (args){
    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug','是否开启调试模式',false)

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