const { eachLetterHasSameAmount } = require('./challenge_9')

describe('verify if text have pair for each letter', 
    () => it.each([
        ['This is Thee', true], 
        ['ssd', false], 
        ['Lorem ipsum', false], 
        ['QQwweerrttyy', true]
    ])
        ('when values is %s the result is %s', (sentece, expected) => expect(eachLetterHasSameAmount(sentece)).toEqual(expected)))