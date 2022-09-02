exports.coordInterval = (coord) => {
    let coordStruct = []
    for (let i = 0; i <= coord[0]; i++) {
        for (let x = 0; x <= coord[1]; x++) {
            coordStruct.push([i, x])
        }
    }
    return coordStruct
}