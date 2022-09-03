const possibleRomanAlgorism = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const algorism = [1, 5, 10, 50, 100, 500, 1000]

exports.romanNumberToNumber = (romanNumber) => {
    const romanAlgorism = romanNumber.toUpperCase().split('')
    const romanAlgorismIndexes = []
    romanAlgorism.forEach(a => romanAlgorismIndexes.push(possibleRomanAlgorism.indexOf(a)));
    let convertedNumber = 0
    while(romanAlgorismIndexes.length !== 0){
        let currElement = romanAlgorismIndexes[0]
        if (currElement < romanAlgorismIndexes[1]) {
            convertedNumber = convertedNumber + (algorism[romanAlgorismIndexes[1]] - algorism[currElement])
            romanAlgorismIndexes.splice(0, 2)
        } else {
            const currElementOccurrences = romanAlgorismIndexes.filter((a, i) => i < 3 && a === currElement).length
            convertedNumber = convertedNumber + (algorism[currElement] * currElementOccurrences)
            romanAlgorismIndexes.splice(0, currElementOccurrences)
        }
    }
    return convertedNumber;
}