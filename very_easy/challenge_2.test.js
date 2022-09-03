const { genChunks } = require('./challenge_2')

describe('gen chunks', 
    () => it.each([
            [4, 'chunk-chunk-chunk-chunk'], 
            [1, 'chunk'], 
            [8, 'chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk'], 
            [2, 'chunk-chunk']
        ])
        ('when values is %s the result is %s', (times, expected) => expect(genChunks(times)).toBe(expected)))