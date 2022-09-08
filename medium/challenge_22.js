exports.remainCodes = (codes) =>{
    if (codes.length === 0 ) return codes
    const codeNumbers = codes.map(c => parseInt(c)).sort((a, b) => a - b)
    const allPositions = Array.from({length: codeNumbers[codeNumbers.length -1]}, (_, i) => i + 1)
    return allPositions.filter(p => !codeNumbers.includes(p))
        .map(p => `${'0'.repeat(4 - p.toString().length)}${p}`)
}