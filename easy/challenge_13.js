exports.validId = (code) => {
    let digits = code.toString().split('')
    let verifierDigit = parseInt(digits[digits.length - 1])
    digits.splice(-1);
    let pairPositions = digits.filter((d, i)=> i % 2 === 0).reduce((n1, n2) => n1 + parseInt(n2), 0)
    let oddPositions = digits.filter((d, i)=> i % 2 !== 0).reduce((n1, n2) => n1 + parseInt(n2), 0)
    let genCode = ((pairPositions * 3) + oddPositions) % 10
    return verifierDigit === (genCode === 0 ? 0 : 10 - genCode)
}