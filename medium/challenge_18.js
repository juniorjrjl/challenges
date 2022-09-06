class Equation{

    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
    }

    getEquationResult(){
        if ((!this.a && !this.b) || (this.a === 0 && this.b === 0) || (typeof this.a !== 'number' && typeof this.b !== 'number')){
            throw new InvalidEquationArgsError("The values 'a' and 'b' mustn`t be Zero")
        }
        if (this.a === 0){
            return this.#resolveFirstLaw()
        }
        return this.#resolveSecondLaw()
    }

    #resolveFirstLaw(){
        let a = this.a
        let b = this.b
        let c = this.c
        console.log(`1. ${b}X + ${c} = ${a}`)
        let changeSignalC = c * -1
        console.log(`2. ${b}X = ${changeSignalC}`)
        console.log(`3. X = ${changeSignalC} / ${b}`)
        const result = changeSignalC / b
        console.log(`4. X = ${result}`)
        return [result]
    }

    #resolveSecondLaw(){
        let a = this.a
        let b = this.b
        let c = this.c
        console.log(`∆ = ${b}² - 4 * ${a} * ${c}`)
        const delta = b * b - (4 * a * c)
        console.log(`∆ = ${delta}`)
        console.log(`X' = (-(${b}) + √${delta}) / 2 * ${a}`)
        let multiplyA = 2 * a
        let changeSignalB = b * -1
        console.log(`X" = (-(${b}) - √${delta}) / 2 * ${a}`)
        console.log(`X' = ${changeSignalB} + √${delta} / ${multiplyA}`)
        console.log(`X" = ${changeSignalB} - √${delta} / ${multiplyA}`)
        let squareRootDelta = Math.sqrt(delta)
        console.log(`X' = ${changeSignalB} + ${squareRootDelta} / ${multiplyA}`)
        console.log(`X" = ${changeSignalB} - ${squareRootDelta} / ${multiplyA}`)
        let xOne = (changeSignalB + squareRootDelta) / multiplyA
        let xTwo = (changeSignalB - squareRootDelta) / multiplyA
        console.log(`X' = ${xOne}`)
        console.log(`X" = ${xTwo}`)
        return [xOne, xTwo]
    }

}

class InvalidEquationArgsError extends Error {

    constructor(message){
        super(message)
    }

}

module.exports = {
    Equation,
    InvalidEquationArgsError
}