exports.factorial = (number) => {
    let bigNumber = BigInt(number)
    if (bigNumber === 0n){
        return 1n
    }
    genFactorial = (current, next) =>{
        if (next <= 0){
            return current
        }
        current = next * current
        next -= 1n
        return genFactorial(current, next)
    }
    return genFactorial(bigNumber, bigNumber - 1n)

}