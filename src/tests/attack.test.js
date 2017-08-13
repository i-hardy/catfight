import { Attack } from '../logic/attack'
import { Player } from '../logic/player'
const player = new Player('Macavity')

it('attacks a player', () => {
  const getHit = jest.spyOn(player, 'getHit')
  Attack.run(player)
  expect(getHit).toHaveBeenCalled()
})

it('poisons a player', () => {
  const getPoisoned = jest.spyOn(player, 'getPoisoned')
  Attack.getPoisoned(player)
  expect(getPoisoned).toHaveBeenCalled()
})

it('deals poison damage', () => {
  const poisonDamage = jest.spyOn(player, 'getHit')
  Attack.run(player, 'poison')
  expect(poisonDamage).toHaveBeenCalled()
})
