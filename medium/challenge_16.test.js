const { caesarCipher } = require('./challenge_16')

describe("Caesar's Cipher", 
    () => it.each([
        ['Vguvg', 2, 'Teste'], 
        ['BCDYZAbcdyza', 27, 'ABCXYZabcxyz'], 
        ['Qaiik', 60, 'Isaac'],
        ['Amozmlw', 8, 'Segredo'], 
    ])
        ('when sentence %s with code %s then result is %s', 
        (sentence, code, expected) => expect((caesarCipher(sentence, code))).toEqual(expected)))
