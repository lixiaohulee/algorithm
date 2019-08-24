




function getQueryStringArgs() {
    const qs = window.location.search.length > 0 
                  ? window.location.search.substring(1)
                  : ''
    const paramArr = qs.length > 0 ? qs.split('&') : []
    const paramObj = Object.create(null)
    
    for(let i = 0; i <= paramArr.length - 1; i++) {
        const currentParam = paramArr[i].split('=')
        const key = currentParam[0]
        const value = currentParam[1]
        
        paramObj[key] = value
    }
    
    return paramObj
}

console.log(getQueryStringArgs())

