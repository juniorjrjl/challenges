exports.multiplicativePersistence = (number) => {
    if (number < 10){
        return 0
    }
    let times = 0
    do {
        times ++
        let numbers = number.toString().split('')
        let firstPosition = numbers[0]
        for (let i = 1; i < numbers.length; i++) {
            firstPosition *= numbers[i]
        }
        number = firstPosition
    } while (number >= 10)
    return times
}