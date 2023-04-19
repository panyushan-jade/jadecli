class Command{
    constructor(instance){
      if(!instance){
        throw new Error("command instance must not be null");
      }
      this.program = instance
      const cmd =  this.program.command(this.command)
      cmd.description(this.description);
      cmd.hook('preAction',() => {
        this.preAction();
      })
      cmd.hook('postAction',() => {
        this.postAction();
      })
      if(this.options?.length > 0){
        this.options.forEach( opt => {
          cmd.option(...opt);
        })
      }
      cmd.action((...act) => {
            this.action(act)
      })
    }
    
    get command(){
      throw new Error("command must be implements");
    }
    get description(){
      throw new Error("description must not be null");
    }
    get options(){
      return []
    }
    get action(){
      throw new Error("action must be implements");
    }
    preAction(){
      // empty
    }
    postAction(){
      // empty
    }
}


module.exports = Command;

