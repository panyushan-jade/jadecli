const Command = require('@jadecli/command');
const { log } = require('@jadecli/utils');

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
    log.verbose('init',name,opts)
  }
  preAction(){
    // console.log('preAction')
  }
}

function Init(instance){
  return new InitCommand(instance);
}

module.exports = Init;
