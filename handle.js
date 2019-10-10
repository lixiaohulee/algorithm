


//封装一个跨浏览器的添加事件处理程序的方法

const EventUtil = {
    addHandle(type, element, handle) {
        if (element.addEventListener) {
            element.addEventListener(type, handle, false)
        }else if (element.attachEvent) {
            element.attachEvent(`on${type}`, handle)
        }else {
            element[`on${type}`] = handle
        }
    },
    removeHandle(type, element, handle) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handle, false)
        }else if (element.detachEvent) {
            element.detachEvent(`on${type}`, handle)
        }else {
            element[`on${type}`] = null
        }
    }
}