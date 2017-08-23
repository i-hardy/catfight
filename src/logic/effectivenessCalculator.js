function EffectivenessCalculator () {

}

EffectivenessCalculator.sleepAttack = function () {
  return (Math.floor(Math.random() * 3) + 1) < 3
}

EffectivenessCalculator.poisonAttack = function () {
  return (Math.floor(Math.random() * 5) + 1) < 5
}

export { EffectivenessCalculator }
