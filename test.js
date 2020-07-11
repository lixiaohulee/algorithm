'use strict'

function print() {
    console.log(this)
    console.log(this.name)
}

print.call(undefined)