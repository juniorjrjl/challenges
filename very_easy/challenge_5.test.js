const { greatherLetter } = require('./challenge_5')

describe('greather letter', 
    () => it.each([
        ['Lorem ipsum dolore sec avanti', 'v'], 
        ['Hello', 'o'], 
        ['May the force be with you', 'y'], 
        ['Its over nine thousand', 'v']
    ])
        ('when values is %s the result is %s', (sentence, expected) => expect(greatherLetter(sentence)).toEqual(expected)))