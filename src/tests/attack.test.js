import { Attack } from '../logic/attack'
import { Player } from '../logic/player'
const player = new Player('Macavity')

it('attacks a player', () => {
  const getHit = jest.spyOn(player, 'getHit')
  Attack.run(player)
  expect(getHit).toHaveBeenCalled()
})
