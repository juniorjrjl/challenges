const { coordInterval } = require('./challenge_11')

describe('invert array', 
    () => it.each([
        [[2, 2], [[0, 0], [0, 1], [0, 2], 
                    [1, 0], [1, 1], [1, 2], 
                    [2, 0], [2, 1], [2, 2]]], 
        [[2, 7], [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], 
                    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], 
                    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7]]], 
        [[-3, -3], []],
        [[7, 6], [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], 
                    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
                    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
                    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
                    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],
                    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
                    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
                    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6]]]
    ])
        ('when values is %s the result is %s', (times, expected) => expect(coordInterval(times)).toEqual(expected)))