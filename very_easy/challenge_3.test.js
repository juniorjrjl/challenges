const { invertArray } = require('./challenge_3')

describe('invert array', 
    () => it.each([
        [[0, 9, 6, 8, 9, 1, 5, 7], [7, 5, 1, 9, 8, 6, 9, 0]], 
        [['Oh', 'Hi', 'Mark'], ['Mark','Hi','Oh']], 
        [[false, true, true, true], [true, true, true, false]], 
        [["It's", 'not', true, 0], [0, true, 'not', "It's"]]
    ])
        ('when values is %s the result is %s', (times, expected) => expect(invertArray(times)).toEqual(expected)))