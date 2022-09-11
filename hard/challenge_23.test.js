const { Pannel, InvalidEvent, InvalidPod } = require('./challenge_23')

describe('pannel with classification', () =>{
    let pannel
    const pods = ['Alfa', 'Beta', 'Gama', 'Delta']

    beforeEach(() => pannel = new Pannel(pods))

    test('manipulate pannel', () => {
        pannel.executeEvent(`${pods[1]} +1`)
        expect(pannel.getClassification()).toEqual(['Beta', 'Alfa', 'Gama', 'Delta'])

        pannel.executeEvent(`${pods[2]} -1`)
        expect(pannel.getClassification()).toEqual(['Beta', 'Alfa', 'Delta', 'Gama'])

        pannel.executeEvent(`${pods[3]} ELIMINATE`)
        expect(pannel.getClassification()).toEqual(['Beta', 'Alfa', 'Gama', 'Delta ELIMINATED'])

        pannel.executeEvent(`${pods[2]} +2`)
        expect(pannel.getClassification()).toEqual(['Gama', 'Beta', 'Alfa', 'Delta ELIMINATED'])
    })

    test('manipulate pod who is not running', () => expect(() => pannel.executeEvent('Zeta +1')).toThrowError(InvalidPod))

    test('enter with invalid event', () => expect(() => pannel.executeEvent(`${pods[1]} *1`)).toThrowError(InvalidEvent))

    test('manipulate pod eliminated', () => expect(() =>{
        pannel.executeEvent(`${pods[3]} ELIMINATE`)
        pannel.executeEvent(`${pods[3]} +2`)
        pannel.getClassification()
    }).toThrowError(InvalidPod))

    test('inc first position element', () => {
        pannel.executeEvent(`${pods[0]} +1`)
        expect(pannel.getClassification()).toEqual(pods)
    })

    test('dec last position element', () => {
        pannel.executeEvent(`${pods[3]} -1`)
        expect(pannel.getClassification()).toEqual(pods)
    })


})

