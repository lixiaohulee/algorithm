



function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()

        image.onload = function() {
            resolve(image)
        }

        image.onerror = function() {
            reject(new Error('load image error'))
        }

        image.src = url
    })
}

const url = 'https://avatars0.githubusercontent.com/u/26280622?s=400&u=9e7161c37a3919ad9d68af2193476b0b87dc31cb&v=4'
loadImageAsync().then(image => {
    console.log(image)
}).catch(err => {
    console.log(err)
})