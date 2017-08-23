import { Heal } from '../../logic/heal'
import { Player } from '../../logic/player'
const player = new Player('Macavity')
player.getHit(30)

it('heals the player for 10HP', () => {
  Heal.run(player)
  expect(player.hitPoints()).toEqual(80)
})
