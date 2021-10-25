//Getter
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    }
    else {
      return 'System malfunction: cannot retrieve energy level';
    }  
  }
};
console.log(robot.energyLevel);

//Setter
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    }
    else {
      console.log ('Pass in a number that is greater than or equal to 0');
    }
  }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors);


//Example on .this
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge()
