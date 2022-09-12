exports.fibonacci = (number) =>{
    const bigNumber = BigInt(number)
    if (bigNumber === 0n){
        return 0n
    }
    if (bigNumber === 1n || bigNumber === 2n){
        return 1n
    }
    let numbers = [1n, 1n]
    let inc = 0n
    for (let i = 2n; i < bigNumber; i++) {
        inc = numbers[0] + numbers[1]
        numbers.shift()
        numbers.push(inc)
    }
    return numbers[1]
}