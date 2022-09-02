const { individualQuadractElevation } = require('./challenge_4')

describe('individual quadract elevation', 
    () => it.each([
        [3514, 925116], 
        [94571, 811625491], 
        [24, 416], 
        [745821698, 4916256441368164]
    ])
        ('when values is %s the result is %s', (number, expected) => expect(individualQuadractElevation(number)).toBe(expected)))