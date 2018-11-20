import sourceData from "../data";

export const isMatched = (value, matcher) => {
    return value.indexOf(matcher) > -1
}

export const normaliseData = () => {
    let path = 'Filter/';
    let key = '';
    const arr = [];

    sourceData.forEach(a=> {
        path = 'Filter/';
        path += `${a.name}/`;
        key = '';
        key += `${a.key}-`;
        a.options.forEach(b=>{
            path = `Filter/${a.name}/`;
            path += `${b.name}/`;
            key = `${a.key}/`;
            key += `${b.key}-`;
            b.options.forEach(c=>{
                key = `${a.key}/${b.key}`;
                const obj = {};
                obj.path = path;
                obj.key = `${key}${c.key}`;
                obj.data = c;
                arr.push(obj)
            })
        })
    })

    return arr
}