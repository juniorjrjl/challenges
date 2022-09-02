const { factorial } = require('./challenge_10')

describe('greather letter', 
    () => it.each([
        [5, 120n], 
        [0, 1n], 
        [32, 263130836933693530167218012160000000n], 
        [9n, 362880n]
    ])
        ('when values is %s the result is %s', (number, expected) => expect(factorial(number)).toBe(expected)))