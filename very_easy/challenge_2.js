exports.genChunks = (amount) => {
    let gen = (amount, text) => {
        if (amount-- > 0){
            text += "chunk-"
            text = gen(amount, text)
        }
        return text
    }
    return gen(amount, '').slice(0, -1)
}