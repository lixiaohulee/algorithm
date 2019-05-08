



new Promise((resolve, reject) => {
    if (false) {
        resolve(2)
    }else {
        reject(23)
    }
}).then(res => console.log(res), err => console.log(err))


