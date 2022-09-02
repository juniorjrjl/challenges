exports.invertArray = (arr) =>{
    let invert = (arr, newArr, position) =>{
        if (position > -1){
            newArr.push(arr[position--])
            newArr = invert(arr, newArr, position)
        }
        return newArr
    }
    return invert(arr, [], arr.length - 1)
}