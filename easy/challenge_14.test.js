const Person = require('./challenge_14')

describe('generate flying license code', 
    () => it.each([
        ['John', 'Doe', new Date(1977, 4, 25, 0, 0, 0, 0), 'DOE99-7057.j'], 
        ['Hal', 'Jordan', new Date(1995, 8, 2, 0, 0, 0, 0), 'JORDA-9095.h'], 
        ['Carol', 'Danvers', new Date(1968, 7, 17, 0, 0, 0, 0), 'DANVE-6088.c'],
        ['Poe', 'Damerson', new Date(1979, 2, 9, 0, 0, 0, 0), 'DAMER-7039.p'], 
        ['Jao', 'Silva', new Date(1985, 10, 10, 0, 0, 0, 0), 'SILVA-8115.j']
    ])
        ('when person was created with {name: %s, lastName: %s, birthday: %s} the generated flyingLicense is %s', 
        (name, lastName, birthday, expected) => {
            let person = new Person(name, lastName, birthday)
            person.genFlyingLicense()
            expect(person.flyingLicense).toBe(expected)
        }))