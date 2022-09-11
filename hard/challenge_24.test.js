const { MainSystem } = require('./challenge_24')

describe('Register user in main system', () =>{

    const users = ['erick_14', 'pam_Is2', 'VICTOR_99A']
    let mainSystem

    beforeEach(() => mainSystem = new MainSystem(...users))

    it.each([
        ['52alfred', false], 
        ['erick_14', false], 
        ['josh_g15', true],
        ['hugo_123_', false], 
        ['k_9', false]
    ])
        ('when name is %s then return %s', 
        (name, expected) => expect(mainSystem.register(name)).toBe(expected))

})
