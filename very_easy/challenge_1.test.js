const { arithmeticMedium } = require('./challenge_1')

describe('arithmetic medium', 
    () => it.each([
            [[10, 9, 6, 8, 9, 1, 5, 7], 6.875], 
            [[2, 5, 7, 1, -2], 2.6], 
            [[10, 10, 10, 10, 9], 9.8], 
            [[25, 75], 50]
        ])
        ('when values is %s the result is %s', (numbers, expected) => expect(arithmeticMedium(...numbers)).toBe(expected)))