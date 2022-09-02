const { invertWords } = require('./challenge_6')

describe('greather letter', 
    () => it.each([
        ['Lorem ipsum dolore sec avanti', 'merol muspi erolod ces itnava'], 
        ['This is an apple', 'siht si na elppa'], 
        ['May the force be with you', 'yam eht ecrof eb htiw uoy'], 
        ['It s over nine thousand', 'ti s revo enin dnasuoht']
    ])
        ('when values is %s the result is %s', (sentence, expected) => expect(invertWords(sentence)).toEqual(expected)))