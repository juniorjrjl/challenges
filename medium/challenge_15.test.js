const { romanNumberToNumber } = require('./challenge_15')

describe('convert roman number to number', 
    () => it.each([
        ['XLVII', 47], 
        ['CDXXXVIII', 438], 
        ['CMIX', 909],
        ['MMMCMXCIX', 3999], 
    ])
        ('whne enter with roman number %s then output is %s', 
        (romanNumber, expected) => expect(romanNumberToNumber(romanNumber)).toBe(expected)))