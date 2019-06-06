/**
 * @file sticky.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */


function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop
}


function getElementTop(element) {
    const rect = element.getBoundingClientRect()
    const { top } = rect
    return top   
}



function onScrollBallback() {
    const scrollTop = getScrollTop()
    
    if(scrollTop >= 300) {
        document.getElementsByClassName('nav')[0].style.position = 'fixed'
        document.getElementsByClassName('nav')[0].style.top = '0'
    }
}

const bannerDom = document.getElementsByClassName('nav')[0]
var top = getElementTop(bannerDom)
window.addEventListener('scroll', onScrollBallback, false)