import { Game } from '../logic/game'
const Player = jest.fn()
var player1
var player2
var game

beforeEach(() => {
  player1 = new Player('Macavity')
  player2 = new Player('Bustopher Jones')
  game = new Game(player1, player2)
})

test('has two players', () => {
  expect(game.player1()).toBe(player1)
  expect(game.player2()).toBe(player2)
})

test('states whose turn it is', () => {
  expect(game.currentTurn()).toBe(player1)
})

test('can switch turns', () => {
  game.switchTurns()
  expect(game.currentTurn()).toBe(player2)
})

test('returns the current opponent', () => {
  expect(game.currentOpponent()).toBe(player2)
})

test('knows if there is game over', () => {
  player1['hitPoints'] = jest.fn(() => 100)
  player2['hitPoints'] = jest.fn(() => 100)
  expect(game.isOver()).toBe(false)
})

test('returns game over if a player is out of HP', () => {
  player1['hitPoints'] = jest.fn(() => 100)
  player2['hitPoints'] = jest.fn(() => 0)
  expect(game.isOver()).toBe(true)
})

test('returns the loser of the game', () => {
  player1['hitPoints'] = jest.fn(() => 100)
  player2['hitPoints'] = jest.fn(() => 0)
  expect(game.loser()).toBe(player2)
})

test('returns any currently poisoned players', () => {
  player1['isPoisoned'] = jest.fn(() => false)
  player2['isPoisoned'] = jest.fn(() => true)
  expect(game.poisonedPlayers()[0]).toBe(player2)
})
