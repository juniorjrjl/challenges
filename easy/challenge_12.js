exports.currencyGen = (amount) => {
    const values = [500, 100, 25, 10, 5, 1]
    let result = {}
    values.forEach(v => {
        result[v] = 0
        if (amount !== 0){
            let amountUsed = Math.floor(amount/v)
            if (amountUsed > 0){
                result[v] = amountUsed
                amount = amount - (amountUsed * v)
            }
        }
    })
    return result
}