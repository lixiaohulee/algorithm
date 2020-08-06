




function sleep(delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, delay)
    })
}


async function func() {
    for(let i = 0; i < 10; i++) {
        await sleep(1000)
        console.log(i)
    }
}

func()