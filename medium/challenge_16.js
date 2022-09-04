const FIRST_LETTER_LOWER_CASE = 97
const LAST_LETTER_LOWER_CASE = 122
const FIRST_LETTER_UPPER_CASE = 65
const LAST_LETTER_UPPER_CASE = 90

reduceLetter = (letterDecimal, code, fitstCodeBase, lastCodeBase) => {
    while(code !== 0){
        let decValue = 0
        if (letterDecimal - code < fitstCodeBase) {
            decValue = (letterDecimal - fitstCodeBase) + 1
            letterDecimal = lastCodeBase
        }else {
            decValue = code
            letterDecimal -= decValue
        }
        code -= decValue
    }
    return String.fromCharCode(letterDecimal)
}

exports.caesarCipher = (sentence, code) => sentence.split('')
    .map(l => l === l.toUpperCase() ? 
                        reduceLetter(l.charCodeAt(0), code, FIRST_LETTER_UPPER_CASE, LAST_LETTER_UPPER_CASE) : 
                        reduceLetter(l.charCodeAt(0), code, FIRST_LETTER_LOWER_CASE, LAST_LETTER_LOWER_CASE))
    .join('')