import path from 'path';
import { program } from 'commander';
import fse from 'fs-extra';
import semver from 'semver';
import { dirname } from 'dirname-filename-esm';
import { log } from '@jadecli/utils';


const __dirname = dirname(import.meta);
const pkgPath = path.resolve(__dirname,'../package.json');
const pkg = fse.readJSONSync(pkgPath);
const LOWEST_NODE_VERSION = '16.0.0'; 

function preAction() {
    checkNodeVersion();
}

function checkNodeVersion(){
    log.verbose('node version',process.version);
    if(!semver.gte(process.version,LOWEST_NODE_VERSION)){
        throw new Error(`jade-cli需要安装${LOWEST_NODE_VERSION}以上版本的Node.js`)
    }
}

export default function createCli(){
    log.info('version',pkg.version)
    program
        .name(Object.keys(pkg.bin)[0])
        .usage('<command> [options]')
        .version(pkg.version)
        .option('-d, --debug','是否开启调试模式',false)
        .hook('preAction',preAction)
    program.on('command:*',function (obj){
        log.error('未知的命令'+obj[0])
    })
    return program
}
