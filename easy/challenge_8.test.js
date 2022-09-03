const { abbrName } = require('./challenge_8')

describe('abbreviate name', 
    () => it.each([
        ['Isaac Larrubia Ferreira Pontes', 'PONTES, I. L. F.'], 
        ['John Ronald Reuel Tolkien', 'TOLKIEN, J. R. R.'], 
        ['christopher james paolini', 'PAOLINI, C. J.'], 
        ['Suzanne Marie Collins', 'COLLINS, S. M.']
    ])
        ('when values is %s the result is %s', (name, expected) => expect(abbrName(name)).toEqual(expected)))