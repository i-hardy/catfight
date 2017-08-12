import { Game } from '../logic/game'
const Player = jest.fn()
const player1 = new Player('Macavity')
const player2 = new Player('Bustopher Jones')
var game

beforeEach(() => {
  game = new Game(player1, player2)
  player1['hitPoints'] = jest.fn(() => 100)
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
  player2['hitPoints'] = jest.fn(() => 100)
  expect(game.isOver()).toBe(false)
})

test('returns game over if a player is out of HP', () => {
  player2['hitPoints'] = jest.fn(() => 0)
  expect(game.isOver()).toBe(true)
})

test('returns the loser of the game', () => {
  player2['hitPoints'] = jest.fn(() => 0)
  expect(game.loser()).toBe(player2)
})
