import { EffectivenessCalculator } from '../../logic/effectivenessCalculator'

it('has a 2/3 chance for a sleep attack to be effective', () => {
  Math['floor'] = jest.fn(() => 0)
  expect(EffectivenessCalculator.sleepAttack()).toEqual(true)
  Math['floor'] = jest.fn(() => 1)
  expect(EffectivenessCalculator.sleepAttack()).toEqual(true)
  Math['floor'] = jest.fn(() => 2)
  expect(EffectivenessCalculator.sleepAttack()).toEqual(false)
})

it('has a 4/5 chance for a poison attack to be effective', () => {
  Math['floor'] = jest.fn(() => 0)
  expect(EffectivenessCalculator.poisonAttack()).toEqual(true)
  Math['floor'] = jest.fn(() => 2)
  expect(EffectivenessCalculator.poisonAttack()).toEqual(true)
  Math['floor'] = jest.fn(() => 4)
  expect(EffectivenessCalculator.poisonAttack()).toEqual(false)
})
