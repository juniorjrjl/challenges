const { multiplicativePersistence } = require('./challenge_19')

describe('calculate mutiplicative persistence', 
    () => it.each([
        [539, 3], 
        [999, 4], 
        [7, 0],
        [7169, 5], 
    ])
        ('when number is %s then mutiply numbers is %s', 
        (number, expected) => expect(multiplicativePersistence(number)).toBe(expected)))