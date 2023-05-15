// const Command = require('@jadecli/command');
import Command from '@jadecli/command';
import { log } from '@jadecli/utils';
// const { log } = require('@jadecli/utils');

class InitCommand extends Command{
  get command(){
    return 'init [name]';
  }
  get description(){
    return 'init project';
  }
  get options(){
    return [
      ['-f, --force','是否强制更新',false]
    ]
  }
  action([name,opts]){
    // console.log('init',name,opts);
    // new Promise((resolve,reject) => {
    //   resolve()
    // }).then( () => {
    //   throw new Error('dada')
    // })
    log.verbose('init',name,opts)
  }
  preAction(){
    // console.log('preAction')
  }
}

function Init(instance){
  return new InitCommand(instance);
}

export default Init;
