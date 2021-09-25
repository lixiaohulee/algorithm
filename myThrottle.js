

const throttle = (func, delay) => {
    let timer = null;

    return function() {
        if (timer) {
            return;
        }

        const self = this;
        const args = arguments;
        timer = setTimeout(() => {
            clearTimeout(timer);
            func.apply(self, args);
        }, delay);
    }
}