const { bidirectionalArrayToArray } = require('./challenge_7')

describe('bidirectional array to array', 
    () => it.each([
            [[[1, 3, 5], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]], [1, 1, 3, 5, 5, 6, 11, 19, 42, 47, 57, 93, 103, 128]], 
            [[[1, 3], [4, 8], [7, 5], [2, 6]], [1, 2, 3, 4, 5, 6, 7, 8]], 
            [[[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]], [10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 100]]
        ])
        ('when values is %s the result is %s', (bidirectionalArray, expected) => expect(bidirectionalArrayToArray(bidirectionalArray)).toEqual(expected)))