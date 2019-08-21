



/**
 * 获取页面视口大小的方法
 */

function getViewPort() {
    const viewWidth = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
    const viewHeight = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight

    return {
        viewWidth,
        viewHeight
    }
}

