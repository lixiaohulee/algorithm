

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 4000)
    })
}


async function func() {
    console.log(1)
    await sleep()
    console.log(2)
}


console.log(0)
func()
console.log(3)