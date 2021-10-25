//Fuctory funct - a schema for creating multiple objects
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep () {
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();