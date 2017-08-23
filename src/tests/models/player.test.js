import { Player } from '../../logic/player'
var testPlayer

beforeEach(() => {
  testPlayer = new Player('Macavity')
})

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

test('poisoned status can be retrieved', () => {
  expect(testPlayer.isPoisoned()).toBe(false)
})

test('can be poisoned', () => {
  testPlayer.getPoisoned()
  expect(testPlayer.isPoisoned()).toBe(true)
})

test('can recover from poison', () => {
  for (var i = 0; i < 5; i++) {
    testPlayer.getPoisoned()
  }
  testPlayer.poisonRecover()
  expect(testPlayer.isPoisoned()).toBe(false)
})

test('sleep status can be retrieved', () => {
  expect(testPlayer.isAsleep()).toBe(false)
})

test('can be put to sleep', () => {
  testPlayer.fallAsleep()
  expect(testPlayer.isAsleep()).toBe(true)
})

test('can be woken up', () => {
  for (var i = 0; i < 3; i++) {
    testPlayer.fallAsleep()
  }
  testPlayer.wakeUp()
  expect(testPlayer.isAsleep()).toBe(false)
})

test('can be healed', () => {
  testPlayer.getHit(30)
  testPlayer.heal()
  expect(testPlayer.hitPoints()).toEqual(80)
})
