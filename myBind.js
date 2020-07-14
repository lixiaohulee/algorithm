


Function.prototype.myBind = function() {
    const self = this
    const context = [].shift.call(arguments)   
    const args = [].slice.call(arguments)
    
    return function() {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
}

var obj = {
    name: 'xiaohu',
    getName() {
        return this.name
    }
}

global.name = 'wagnlili'
let getName = obj.getName.myBind(null, 'sfsfs')

console.log(getName())