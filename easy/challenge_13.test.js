const { validId } = require('./challenge_13')

describe('airship id validation', 
    () => it.each([
        [547020743789, true], 
        [301354030348, true], 
        [301354030349, false],
        [123456789872, false],
        [121212121120, true]
    ])
        ('when values is %s the result is %s', (code, expected) => expect(validId(code)).toBe(expected)))