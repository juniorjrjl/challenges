const { Coordinates } = require('./challenge_21')

describe('System Location', 
    () => it.each([
        [37, 42, 15, 'Alfa', 57.94825277780168], 
        [144, 49, 0, 'Alfa', 152.10851389715174], 
        [-37, 0, 0, 'Épsilon', 37],
        [-19, -80, -32, 'Ômega', 88.23264701911646], 
    ])
        ('when positions is {x: %s, y: %s, z: %s} then sector is %s and distance is %s', 
        (x, y, z, expectedSector, expectedDistance) => {
            let coordinates = new Coordinates(x, y, z)
            expect(coordinates.getSector()).toEqual(expectedSector)
            expect(coordinates.getDistance()).toBe(expectedDistance)
        }))