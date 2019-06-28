/**
 * @file imgLazyload.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */


/**
 * 图片懒加载
 */

function getClientHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight
}

function getElementRect(element) {
    return element.getBoundingClientRect()
}

function elementInViewport(element) {
    if (element) {
        const rect = getElementRect(element)
        const { width, height, left, top } = rect
        const clientHeight = getClientHeight()

        return top < clientHeight 

    }
}

function lazyLoad() {
    const allLazyImgs = [...document.querySelectorAll('.lazy-load')]
    allLazyImgs.forEach(img => {
        console.log(elementInViewport(img))
        if(elementInViewport(img)) {
            const dataSrc = img.dataset.src
            img.src = dataSrc
        }
    })
}

lazyLoad()
window.addEventListener('scroll', lazyLoad, false)