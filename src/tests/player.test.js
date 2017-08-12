import { Player } from '../logic/player'
const testPlayer = new Player('Macavity')

test('name can be retrieved', () => {
  expect(testPlayer.getName()).toBe('Macavity')
})

test('has hit points', () => {
  expect(testPlayer.hitPoints()).toBe(100)
})

test('can lose hit points', () => {
  testPlayer.getHit(10)
  expect(testPlayer.hitPoints()).toBe(90)
})
