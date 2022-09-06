const Challenge = require('./challenge_18')

describe('resolve equation', 
    () => it.each([
        [0, 2, 6, [-3]], 
        [1, -4, -5, [5, -1]], 
    ])
        ('when input values is %s, %s and %s then expected %s', 
        (a, b, c, expected) => {
            const equation = new Challenge.Equation(a, b, c)
            console.log(equation)
            expect(equation.getEquationResult()).toEqual(expected)
        })
)

describe('invalid args',
    () => it.each([
        [null, null, null],
        [0, 0, 5],
        ['a', 'a', 'a']
    ])
        ('when inputs is %, %s and %s then throw error', 
        (a, b, c) => expect(() => new Challenge.Equation(a, b, c).getEquationResult()).toThrowError(Challenge.InvalidEquationArgsError))
)