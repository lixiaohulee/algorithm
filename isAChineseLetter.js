


const isAChineseLetter = letter => {

    if (typeof letter !== 'string') {
        throw new TypeError('letter muse be a string')
    }

    const reg = /[\u4e00-\u9fa5]/g
    
    return reg.test(letter)

}


console.log(isAChineseLetter('454545四大皆空时间'))
