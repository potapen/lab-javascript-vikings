// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack(){return this.strength}
  receiveDamage(damage){this.health -= damage}
}
const trooper = new Soldier(100, 10)
console.log(trooper)
console.log(trooper.attack())
trooper.receiveDamage(15)
console.log(trooper)

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength)
    this.name = name
  }
  receiveDamage(damage){
    super.receiveDamage(damage)
    return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`
  }
  
  battleCry(){return "Odin Owns You All!"}
}
const simonZeViking = new Viking("Simon", 150,20)
console.log(simonZeViking)
console.log(simonZeViking.attack())
console.log(simonZeViking.receiveDamage(90))
console.log(simonZeViking.receiveDamage(90))
console.log(simonZeViking.battleCry())

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage
    return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`

  }
}
const lambdaSaxon = new Saxon (80,8)
console.log(lambdaSaxon)
console.log(lambdaSaxon.attack())
console.log(lambdaSaxon.receiveDamage(70))
console.log(lambdaSaxon.receiveDamage(70))

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(vikingObject){
    this.vikingArmy.push(vikingObject)
  }

  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject)
  }

  randomPick(inputArray){
    return Math.floor(Number(Math.random()*inputArray.length))
  }
  vikingAttack(){
  //select a random viking
  const indexViking = this.randomPick(this.vikingArmy)
  const currentViking = this.vikingArmy[indexViking]
  console.log(indexViking)
    //select a random saxon
  const indexSaxon = this.randomPick(this.saxonArmy)
  const currentSaxon = this.saxonArmy[indexSaxon]
  console.log(indexSaxon)

  //remove dead saxon
  const output = currentSaxon.receiveDamage(currentViking.attack())
  if (currentSaxon.health<=0){
    this.saxonArmy.splice(indexSaxon,1)
  }
  return output
  }
  // saxonAttack()
  // showStatus()
}

const firstWar = new War()
console.log(firstWar)
firstWar.addViking(new Viking("Bjork", 150,20))
firstWar.addViking(new Viking("Lofsen", 150,20))
firstWar.addSaxon(new Saxon(80,8))
console.log(firstWar)
firstWar.vikingAttack()
console.log(firstWar)
firstWar.vikingAttack()
console.log(firstWar)
firstWar.vikingAttack()
console.log(firstWar)
firstWar.vikingAttack()
console.log(firstWar)




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
