exports.abbrName = (name) =>{
    let names = name.split(' ')
    let authorName = `${names.pop().toUpperCase()}, `
    names = names.map(n => n.charAt(0).toUpperCase())
    names.forEach(n => authorName += `${n}. `);
    return authorName.slice(0, -1)
}