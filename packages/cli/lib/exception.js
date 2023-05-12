import { log,isDebug } from '@jadecli/utils';

function printErrorLog(e) {
    if(isDebug()){
        log.error(e)
    }else{
        log.error(e.message)
    }
}


process.on('unhandleRejection', printErrorLog)

process.on('uncaughtException',printErrorLog)

