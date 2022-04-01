const isEven = require('./index')

test('checks isEven function', () => {
  expect( isEven(1) ).toBe( false );
  expect( isEven(2) ).toBe( true );
})