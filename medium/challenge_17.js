exports.insertWords = (sentence, word, positions) => {
    let positionsInserteds = 0
    if (word.length === 0){
        return sentence
    }
    positions.forEach(p => {
        if (p <= sentence.length){
            sentence = [sentence.slice(0, p + positionsInserteds), word, sentence.slice(p + positionsInserteds)].join('')
            positionsInserteds += word.length
        }
    });
    return sentence
}