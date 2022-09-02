exports.eachLetterHasSameAmount = (sentence) =>{
    let amounts = []
    let lastAmount = 0
    let hasSameAmount = true
    const sentenceArray = sentence.split('')
    for (let i = 0; i < sentenceArray.length; i++) {
        lastAmount = sentenceArray.filter(c => c === sentenceArray[i]).length
        if (amounts.length !== 0 && lastAmount !== 0 && lastAmount !== amounts[amounts.length -1]){
            hasSameAmount = false
            break
        }
        amounts.push(lastAmount)
    }
    return hasSameAmount
}