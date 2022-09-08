
exports.passwordBreaker = (options) => {
    if (options.length === 0){
        return [[]]
    }
    const removedChar = options[0]
    const partialChar = options.slice(1)

    const partialPossibilities = this.passwordBreaker(partialChar)

    const allPossibilites = []

    partialPossibilities.forEach(p =>{
        for (let i = 0; i <= p.length; i++) {
            const completPossibility = [...p.slice(0, i), removedChar, ...p.slice(i)]
            allPossibilites.push(completPossibility)
        }
    })
    return allPossibilites
}