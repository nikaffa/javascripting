//Using arr.reduce, ...
const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

//1. Finds the total years of experience of all objects
const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);

//2. Finds which pilot is the most experienced one
var mostExpPilot = pilots.reduce(function (oldest, pilot) { //oldest is an accumulator
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
//callback compares the accumulator to each pilot.
//If a pilot has more years of experience than oldest, then that pilot becomes the new oldest

//---------------------------------------------------------
//Using arr.reduce, finds the total score of force users only
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Equal to chaining: const totalJediScore = personnel.filter(person => person.isForceUser).map(jedi => jedi.pilotingScore + jedi.shootingScore).reduce((acc, score) => acc + score, 0);
const totalJediScore = personnel.reduce(function (total, curr) {
  if (curr.isForceUser) {
    total += curr.pilotingScore + curr.shootingScore;
  }
  return total;
}, 0);
