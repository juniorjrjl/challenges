const openSignal = ['(', '[', '{']
const closeSignal = [')', ']', '}']

exports.checkOpenClose = (sentence) =>{

    let signalIndexPendingToClose = []
    let valid = true

    const sentenceArray = sentence.split('')
    for (const char of sentenceArray) {
        const openIndex =  openSignal.indexOf(char)
        if (openIndex > -1){
            signalIndexPendingToClose.push(openIndex)
            continue
        }
        const closeIndex = closeSignal.indexOf(char)
        if (closeIndex > -1){
            if (signalIndexPendingToClose[signalIndexPendingToClose.length -1] !== closeIndex || signalIndexPendingToClose.length === 0){
                valid = false
                break
            }
            signalIndexPendingToClose.pop()
        }
    }
    valid = signalIndexPendingToClose.length === 0

    return valid
}