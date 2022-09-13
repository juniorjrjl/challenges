iterateProps = (props, values) =>{
    let tuple = []
    for(p of props){
        const [key, value] = p
        if (key === '_id'){
            tuple[0] = value
            continue
        }
        if (key === 'label'){
            tuple[1] = value
            continue
        }
        if (tuple[0] && tuple[1]){
            values.push(tuple)
            tuple = []
        }
        if (Array.isArray(value)){
            value.forEach(v => values = iterateProps(Object.entries(v), values))
            continue
        }
        if (typeof value === 'object'){
            values = iterateProps(Object.entries(value), values)
            continue
        }
    }
    return values
}

exports.getProperties = (object) => iterateProps(Object.entries(object), [])