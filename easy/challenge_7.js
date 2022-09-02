exports.bidirectionalArrayToArray = (biArr) => {
    let newArray = []
    biArr.forEach(arr => newArray.push(...arr));
    return newArray.sort((n1, n2) => n1 - n2)
}