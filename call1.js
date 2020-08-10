


Function.prototype.call1 = function(context) {
    context = context || window

    context.func = this
    console.log(arguments)
    const args = Array.from(arguments).slice(1)
    console.log(args)
    const res = eval('context.func(' + args + ')')
    delete context.func
    return res 
}


var obj = {
    name: 'leee'
}

function print() {
    console.log(this.name)
}

print.call1(obj)