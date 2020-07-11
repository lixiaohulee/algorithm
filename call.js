


Function.prototype.myCall = function(context) {
    const args = Array.from(arguments).slice(1)

    context = context || window || global
    if (typeof context === 'number') {
        context = new Number(context)
    }else if (typeof context === 'string') {
        context = new String(context)
    }else if (typeof context === 'boolean') {
        context = new Boolean(context)
    }

    const theFuncInvokeCall = this
    context.tempFunc = theFuncInvokeCall
    context.tempFunc(...args)
    delete context.tempFunc
}


let obj = {
    name: 'lixiaohu'
}
function printName(age, address) {
    console.log(this.name)
    console.log(age,address)
}

printName.myCall(null, 2, 3)