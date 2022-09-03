const numbersConfig = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

exports.romanNumberToNumber = (romanNumber) => {
    const romanAlgorism = romanNumber.toUpperCase().split('')
    const convertedDigits = romanAlgorism.map(a => numbersConfig[a])
    let convertedNumber = 0
    while(convertedDigits.length !== 0){
        const currElement = convertedDigits[0]
        const nextElement = convertedDigits[1]
        if (currElement < nextElement) {
            convertedNumber = convertedNumber + (nextElement - currElement)
            convertedDigits.splice(0, 2)
        } else {
            const currElementOccurrences = convertedDigits.filter((a, i) => i < 3 && a === currElement).length
            convertedNumber = convertedNumber + (currElement * currElementOccurrences)
            convertedDigits.splice(0, currElementOccurrences)
        }
    }
    return convertedNumber;
}