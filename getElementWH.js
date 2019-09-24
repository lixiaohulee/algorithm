


function getElementWHByOffset(element) {
    if (element) {
        const width = element.offsetWidth
        const height = element.offsetHeight
        
        const getLeftTop = function (pos) {
            pos = typeof pos === 'string' && pos === 'top' ? 'offsetTop' : 'offsetLeft'

            const actual = element[pos]
            const current = actual.offsetParent

            while(current !== null) {
                const borderWidth = pos === 'offsetLeft'
                                        ? window.getComputedStyle(current).borderLeftWidth
                                        : window.getComputedStyle(current).borderTopWidth

                actual += current[pos] + parseInt(borderWidth, 10)
                current = current.offsetParent
            }

            return actual
        }

        const left = getLeftTop('left')
        const top = getLeftTop('top')

        return {
            width,
            height,
            left,
            top
        }
    }
}


function getElementWHByRect(element) {
    if (element) {
        const rect = element.getBoundingClientRect()
        const { left, width, height, top,} = rect

        return {
            left, top, width, height
        }
    }
}


