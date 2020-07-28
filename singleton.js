


var CreateDiv = (function() {
    var instance = null
    var CreateDiv = function(html) {
        if (instance) return instance
        this.html = html
        this.init()

        return instance = this
    }

    CreateDiv.prototype.init = function() {
        console.log(3)
    }

    return CreateDiv
})()

const a = new CreateDiv(3)
const b = new CreateDiv(54)

console.log(a === b)
console.log(a.html, a.html)