const { currencyGen } = require('./challenge_12')

describe('invert array', 
    () => it.each([
        [478, {'1': 3, '5': 0, '10': 0, '25': 3, '100': 4, '500': 0}], 
        [384, {'1': 4, '5': 1, '10': 0, '25': 3, '100': 3, '500': 0}], 
        [5412, {'1': 2, '5': 0, '10': 1, '25': 0, '100': 4, '500': 10}],
        [50, {'1': 0, '5': 0, '10': 0, '25': 2, '100': 0, '500': 0}]
    ])
        ('when values is %s the result is %s', (amount, expected) => expect(currencyGen(amount)).toEqual(expected)))