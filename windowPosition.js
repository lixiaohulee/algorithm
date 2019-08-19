

/** 
 * 获取浏览器窗口的位置信息
 * 
 * 由于各大浏览器厂商实现的api不同(包括api名称，API的表现都不同)
 * 比如说获取浏览器窗口相对于屏幕上面的位置，在IE，safari，Opera，Chrome中都提供了screenTop，但在Firefox中提供了
 * screenY等  并且他们对相对于屏幕上面的位置的理解也不同IE,Chrome,Opera都认为是屏幕上面到页面可见区域的位置，而Firefox
 * safari则认为是整个窗口到屏幕的位置
*/

function windowPosition() {
    const leftPos = typeof window.screenLeft === 'number'
                        ?  window.screenLeft
                        :  window.screenX

    const topPos = typeof window.screenTop === 'number'
                        ? window.screenTop
                        : window.screenY
                    
    return {
        leftPos,
        topPos
    }
} 

console.log(windowPosition())
