const {writeFileSync, readFileSync, promises: fsPromises} = require('fs');

const A_CODE = 65
const Z_CODE = 90
const ZERO_CODE = 48
const NINE_CODE = 57
const SEPARATOR = ';'
const SELECTOR = ':'
const FUNCTIONS = ['SUM', 'SUB', 'MUL', 'DIV', 'MIN', 'MAX', 'AVG']

const cellFunctions = {
    SUM: (...values) => values.filter(v => !isNaN(parseInt(v))).reduce((n1, n2) => n1 + n2, 0),
    SUB: (initial, ...values) => values.filter(v => !isNaN(parseInt(v))).reduce((n1, n2) => n1 - n2, initial),
    MUL: (...values) => values.reduce((n1, n2) => n1 * n2, 1),
    DIV: (initial, ...values) => values.filter(v => !isNaN(parseInt(v))).reduce((n1, n2) => n1 / n2, initial),
    MIN: (...values) => Math.min(...values.filter(v => !isNaN(parseInt(v)))),
    MAX: (...values) => Math.max(...values.filter(v => !isNaN(parseInt(v)))),
    AVG: (...values) => values.filter(v => !isNaN(parseInt(v))).reduce((n1, n2) => n1 + n2, 0) / values.length
}

class Spreadsheet{

    #cells

    constructor(){
        this.#cells = {}
    }

    #convertCellPositionToBiArrayPositions(cellPosition){
        let position = []
        let cellPosArray = cellPosition.toUpperCase().split('')
        while (cellPosArray.length !== 0) {
            if (cellPosArray[0].charCodeAt(0) < A_CODE || cellPosArray[0].charCodeAt(0) > Z_CODE){
                break
            }
            if (position[0]){
                position[0] += cellPosArray.shift()
            }
            position[0] = cellPosArray.shift()
        }
        while (cellPosArray.length !== 0) {
            if (cellPosArray[0].charCodeAt(0) < ZERO_CODE || cellPosArray[0].charCodeAt(0) > NINE_CODE){
                break
            }
            if (position[1]){
                position[1] += cellPosArray.shift()
            }
            position[1] = cellPosArray.shift()
        }
        if (cellPosArray.length !== 0){
            throw new InvalidPositionError(`A posição ${cellPosition} é inválida`)
        }
        return position
    }

    #refreshFunctions([c, p], priorPositions = []){
        priorPositions.push(`${c}${p}`)
        for (const [col, colVal] of Object.entries(this.#cells)){
            if (Array.isArray(colVal)){
                for (const [row, rowVal] of Object.entries(colVal)) {
                    if ((colVal[row])&&
                        (colVal[row].value instanceof Func) &&
                        (colVal[row].value.positions.some(([v1, v2]) => v1 === c && v2 === p))){
                            let values = colVal[row].value.positions
                                .map(([c, r]) => isNaN(this.#cells[c] && this.#cells[c][r] && parseInt(this.read(`${c}${r}`))) ? 
                                    this.read(`${c}${r}`) : 
                                    parseInt(this.read(`${c}${r}`)))
                            this.#cells[col][row].value.values = values
                            if (priorPositions.filter( p => p === `${col}${row}`).length > 2){
                                throw new CircularReferenceError('As celular contém referências circulares')
                            }
                            this.#refreshFunctions([col, row], priorPositions)
                    }
                }
            }
        }
    }

    read(cellPosition, getFunctionExpression = false){
        const [col, row] = this.#convertCellPositionToBiArrayPositions(cellPosition)
        if (!this.#cells[col] || !this.#cells[col][row] || !this.#cells[col][row].value){
            return ''
        }
        if (this.#cells[col][row].value instanceof Func){
            return getFunctionExpression ? this.#cells[col][row].value.cellValue : this.#cells[col][row].value.getFuncResult().toString()
        } else {
            return this.#cells[col][row].value.toString()
        }
    }

    write(cellPosition, value){
        const [col, row] = this.#convertCellPositionToBiArrayPositions(cellPosition)
        if (!this.#cells[col]){
            this.#cells[col] = []
        }
        const name = value.substr(0, value.indexOf('('))
        const cellsName = value.replace(`${name}(`, '').replace(')', '').split(SEPARATOR)
        let cellPositions = []
        let cellValues = []
        try{
            for (const cell of cellsName) {
                if (cell.includes(SELECTOR)){
                    const [start, end] = cell.split(SELECTOR).map(cc => this.#convertCellPositionToBiArrayPositions(cc))
                    if (start[0].charCodeAt(0) > end[0].charCodeAt(0) || (start[0].charCodeAt(0) === end[0].charCodeAt(0) && start[1] > end[1])){
                        throw new InvalidRangeError(`o intervalo ${cell} é inválido`)
                    }
                    for (let i = start[0].charCodeAt(0); i <= end[0].charCodeAt(0); i++) {
                        for (let ii = start[1]; ii <= end[1]; ii++) {
                            cellPositions.push([String.fromCharCode(i), ii.toString()])
                            const cellValue = this.#cells[String.fromCharCode(i)] && this.#cells[String.fromCharCode(i)][ii] ? 
                                this.read(`${String.fromCharCode(i)}${[ii]}`) : 
                                ''
                            cellValues.push(isNaN(parseInt(cellValue)) ? '' : parseInt(cellValue))
                        }
                    }
                }else{
                    const [c,r] = this.#convertCellPositionToBiArrayPositions(cell)
                    cellPositions.push([c, r])
                    const cellValue = this.read(`${c}${r}`)
                    cellValues.push(isNaN(parseInt(cellValue)) ? 0 : parseInt(cellValue))
                }
            }
            let func = new Func(value, name, cellFunctions[name], cellValues, cellPositions)
            this.#cells[col][row] = new Cell(func)
        }catch(e){
            this.#cells[col][row] = new Cell(value)
        }finally{
            this.#refreshFunctions([col, row])
        }
    }

    save(filename){
        let spreadsheetStruct = {}
        for (const [col, colVal] of Object.entries(this.#cells)){
            if (!spreadsheetStruct[col]){
                spreadsheetStruct[col] = {}
            }
            for (const [row, rowVal] of Object.entries(colVal)) {
                spreadsheetStruct[col][row] = this.read(`${col}${row}`, true)
            }
        }
        writeFileSync(`./resources/${filename}`, JSON.stringify(spreadsheetStruct))
    }

    load(filename){
        const spreadsheetStruct = JSON.parse(readFileSync(`./resources/${filename}`, 'utf-8'))
        for (const [col, colVal] of Object.entries(spreadsheetStruct)){
            for (const [row, rowVal] of Object.entries(colVal)) {
                this.write(`${col}${row}`, rowVal)
            }
        }
    }

}

class InvalidRangeError extends Error{

    constructor(message){
        super(message)
    }

}

class InvalidPositionError extends Error{

    constructor(message){
        super(message)
    }

}

class InvalidFunctionError extends Error {

    constructor(message){
        super(message)
    }

}

class CircularReferenceError extends Error {

    constructor(message){
        super(message)
    }

}

class Func {

    #cellValue
    #name
    #func
    #values = []
    #positions = []

    constructor(cellValue, name, func, values, positions){
        this.#cellValue = cellValue
        this.#name = name
        this.#func = func
        this.#values = values
        this.#positions = positions
        let funcIndex = cellValue.length
        if (cellValue.indexOf(')') !== cellValue.length -1 || cellValue.indexOf('(') > cellValue.indexOf(')') ){
            throw new InvalidFunctionError(`O valor ${cellValue} não é uma função`)
        }
        for (const fun of FUNCTIONS) {
            funcIndex = cellValue.indexOf(fun)
            if (funcIndex > -1){
                break
            }
        }
        if (funcIndex !== 0){
            throw new InvalidFunctionError(`O valor ${cellValue} não é uma função`)
        }
    }

    set values(values){
        this.#values = values
    }

    get positions(){
        return this.#positions
    }

    get cellValue(){
        return this.#cellValue
    }

    getFuncResult(){
        return this.#func(...this.#values)
    }

}

class Cell{

    #value

    constructor(value){
        this.#value = value
    }

    get value(){
        return this.#value
    }

}

module.exports = { Spreadsheet, InvalidPositionError, CircularReferenceError}
