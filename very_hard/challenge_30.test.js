const { Spreadsheet, InvalidPositionError, CircularReferenceError} = require('./challenge_30')
const { unlinkSync} = require('fs');

describe('Spreadsheet', () => {

    let spreadsheet

    beforeEach(() => spreadsheet = new Spreadsheet()),

    test('use functions', () =>{
        let file = 'spreadsheet.json'
        spreadsheet.write('A1', '4')
        spreadsheet.write('A2', '4')
        spreadsheet.write('B1', '0')
        spreadsheet.write('B2', '3')
        spreadsheet.write('C1', '0')
        spreadsheet.write('C2', '3')
        spreadsheet.write('A3', 'SUM(A1:C2)')
        expect(spreadsheet.read('A3')).toBe('14')

        spreadsheet.write('A1', '8')
        expect(spreadsheet.read('A3')).toBe('18')

        spreadsheet.write('A4', 'AVG(A1;A2;A3)')
        expect(spreadsheet.read('A4')).toBe('10')

        spreadsheet.write('B1', '9')
        spreadsheet.write('B3', '1')
        spreadsheet.write('B4', 'SUB(B1:B3)')
        expect(spreadsheet.read('A3')).toBe('27')
        expect(spreadsheet.read('A4')).toBe('13')
        expect(spreadsheet.read('B4')).toBe('5')

        spreadsheet.write('A6', 'MIN(A1:B5)')
        spreadsheet.write('B6', 'MAX(B1:B5)')
        expect(spreadsheet.read('A6')).toBe('1')
        expect(spreadsheet.read('B6')).toBe('9')

        spreadsheet.write('C1', '18')
        spreadsheet.write('C3', 'DIV(C1;C2)')
        expect(spreadsheet.read('A3')).toBe('45')
        expect(spreadsheet.read('A4')).toBe('19')
        expect(spreadsheet.read('C3')).toBe('6')

        spreadsheet.write('D1', '4')
        spreadsheet.write('D2', '8')
        spreadsheet.write('D3', 'MUL(D1;D2)')
        spreadsheet.write('D4', 'SUM(D1:D3)')
        spreadsheet.write('D5', 'SUM(A1:D4)')
        expect(spreadsheet.read('D3')).toBe('32')
        expect(spreadsheet.read('D4')).toBe('44')
        expect(spreadsheet.read('D5')).toBe('209')

        spreadsheet.save(file)

        spreadsheet2 = new Spreadsheet()
        spreadsheet2.load(file)
        spreadsheet2.write('G1', 'teste')
        spreadsheet2.write('G2', '3')
        spreadsheet2.write('G3', '4')
        spreadsheet2.write('G4', 'SUM(G2;G3)')

        expect(spreadsheet2.read('D1')).toBe('4')
        expect(spreadsheet2.read('D2')).toBe('8')
        expect(spreadsheet2.read('D3')).toBe('32')
        expect(spreadsheet2.read('D4')).toBe('44')
        expect(spreadsheet2.read('D5')).toBe('209')

        expect(spreadsheet2.read('C3')).toBe('6')
        expect(spreadsheet2.read('C2')).toBe('3')
        expect(spreadsheet2.read('C1')).toBe('18')

        expect(spreadsheet2.read('A1')).toBe('8')
        expect(spreadsheet2.read('A2')).toBe('4')
        expect(spreadsheet2.read('A3')).toBe('45')
        expect(spreadsheet2.read('A4')).toBe('19')
        expect(spreadsheet2.read('A6')).toBe('1')

        expect(spreadsheet2.read('B1')).toBe('9')
        expect(spreadsheet2.read('B2')).toBe('3')
        expect(spreadsheet2.read('B3')).toBe('1')
        expect(spreadsheet2.read('B4')).toBe('5')
        expect(spreadsheet2.read('B6')).toBe('9')
        
        expect(spreadsheet.read('G1')).toBe('')
        expect(spreadsheet.read('G2')).toBe('')
        expect(spreadsheet.read('G3')).toBe('')
        expect(spreadsheet.read('G4')).toBe('')

        unlinkSync(`./resources/${file}`)
    })

    test('invalid selector', () => expect(() => spreadsheet.read('A#3')).toThrowError(InvalidPositionError))

    test('write in double letter position', () =>{
        spreadsheet.write('AA11', '22')
        expect(spreadsheet.read('AA11')).toBe('22')
    })

    it.each([
        ['SUM(A5:A2)'], 
        ['SUM(A3:A5);A2'],
        [' SUM(A1;A2)']
    ])
        ('whne enter with roman number %s then output is %s', (expected) => {
            spreadsheet.write('A1', expected)
            expect(spreadsheet.read('A1')).toBe(expected)
        })

    test('when functions with circular referencer then throw error', () => {
        expect(() => {
            spreadsheet.write('A1', 'SUM(A2;A3)')
            spreadsheet.write('A2', 'SUM(A1;A3)')
        }).toThrowError(CircularReferenceError)

    })

})