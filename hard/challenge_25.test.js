const { checkOpenClose } = require('./challenge_25')
const {readFileSync, promises: fsPromises} = require('fs');

describe('validate open and close', 
    
    () => 
        it.each([
        ['((((([(]))))))', false], 
        ['{(){([]){[]}()()()()[]}(){(())}(())}', true], 
    ])
        ('when sentence is %s then expected is %s', 
        (sentence, expected) => expect(checkOpenClose(sentence)).toBe(expected)
    ),
    

    test('using challenge code', () => {
        const content = readFileSync('./hard/challenge_24.js', 'utf-8')
        expect(checkOpenClose(content)).toBe(true)
    }),

    test('using challenge code', async () => {
        let content = readFileSync('./hard/challenge_24.js', 'utf-8')
        content = content + '{'
        expect(checkOpenClose(content)).toBe(false)
    })
)
