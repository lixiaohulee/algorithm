//Observer

function observe(data) {
    if (!data || typeof data !== 'object') {
        return 
    }

    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, val) {
    const dep = new Dep()
    observe(val)
    Object.defineProperty(data, key, {
        enumerable: true, 
        configurable: false,
        get() {
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set(newVal) {
            console.log('haha observe value changed', val, newVal)
            val = newVal
            dep.notify()
        }
    })
}

// const data = { name: 'lixiaohu' }
// observe(data)
// data.name = 'wanglili'

// console.log(data.name)


function Dep() {
    this.subs = []
}
Dep.prototype.addSub = function(sub) {
    this.subs.push(sub)
}
Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update())
}



function Watcher() {}

Watcher.prototype.get = function(key) {
    Dep.target = this
    this.value = data[key]
    Dep.target = null
}



function Compile(el) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)

    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el)
        this.init()
        this.$el.appendChild(this.$fragment)
    }
}
Compile.prototype.init = function() {
    this.compileElement(this.$fragment)
}
Compile.prototype.node2Fragment = function(el) {
    const fragment = document.createDocumentFragment()
    let child

    while(child = el.firstChild) {
        fragment.appendChild(child)
    }
    return fragment
}

