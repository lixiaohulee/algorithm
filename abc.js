

function createChar() {
    const random = parseInt(Math.random() * 10, 10) 
    if (random <= 3) return 'A'
    if (random <= 6 && random > 3) return 'B'
    if (random > 6) return 'C'
}

console.log(createChar())


let str = ''

let j = 0 
while(j < 79) {
    let curLevel = ''
    for(let i = 0; i < 60; i++) {
        const char = createChar()
        curLevel += char + ' '
    }
    str += curLevel + '\n'
    j++
}

console.log(str)