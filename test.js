/* global test, expect */

const insertionIndex = require('./')

const numberCompare = (i, j) => i < j

test('first if array is empty', () => {
  expect(insertionIndex([], 1, numberCompare)).toBe(0)
})

test('second if array contains same', () => {
  expect(insertionIndex([1], 1, numberCompare)).toBe(1)
})

test('crash if no compare function', () => {
  expect(() => insertionIndex([1], 1, null)).toThrow(TypeError)
})
