const { fibonacci } = require('./challenge_26')

describe('gen fibonacci number', 
    () => it.each([
        [0, 0n], 
        [2n, 1n], 
        [7, 13n],
        [144n, 555565404224292694404015791808n], 
    ])
        ('when number is %s then fibonacci number expected is %s', 
        (position, expected) => expect(fibonacci(position)).toBe(expected)))