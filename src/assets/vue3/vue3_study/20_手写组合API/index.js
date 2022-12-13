// shallowReactive(浅的劫持,浅的监视,浅的响应数据) 与 reactive(深的)

// 定义一个reactiveHandler处理对象
const reactiveHandler = {
    get(target, key) {
        if (key == '_is_reactive') return true
        console.log('数据已捕获')
        return Reflect.get(target, key)
    },

    set(target, key, value) {
        Reflect.set(target, key, value)
        console.log('数据已更新, 去更新界面')
    },

    deleteProperty(target, key) {
        Reflect.deleteProperty(target, key)
        console.log('数据已删除, 去更新界面')
    }
}

// 定义一个shallowReactive函数,传入一个目标对象
function shallowReactive(target) {
    // 判断当前的目标对象是不是Object类型(数组/对象)
    if (target && typeof target === 'object') {
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的数据是基本类型的数据,那么就直接返回
    return target
}

// 定义一个reactive函数,传入一个目标对象
function reactive(target) {
    // 判断当前的目标对象是不是Object类型(数组/对象)
    if (target && typeof target === 'object') {
        if (Array.isArray(target)) {
            // 当前数据类型为数组
            target.forEach((item, index) => {
                // 数组的数据要进行遍历操作
                target[index] = reactive(item);
            })
        } else {
            // 当前数据类型为对象
            Object.keys(target).forEach(key => {
                // 对象的属性要进行遍历操作
                target[key] = reactive(target[key]);
            })
        }
        return new Proxy(target, reactiveHandler);
    }
    // 如果传入的数据是基本类型的数据,那么就直接返回
    return target;
}

const readonlyHandler = {
    get(target, key) {
        if (key == '_is_readonly') return true
        return Reflect.get(target, key)
    },

    set() {
        console.warn('只读的, 不能修改')
        return true
    },

    deleteProperty() {
        console.warn('只读的, 不能删除')
        return true
    }
}

/*
自定义shallowReadonly
*/
function shallowReadonly(obj) {
    return new Proxy(obj, readonlyHandler)
}

/*
自定义readonly
*/
function readonly(target) {
    if (target && typeof target === 'object') {
        if (target instanceof Array) {
            // 数组
            target.forEach((item, index) => {
                target[index] = readonly(item)
            })
        } else {
            // 对象
            Object.keys(target).forEach(key => {
                target[key] = readonly(target[key])
            })
        }
        const proxy = new Proxy(target, readonlyHandler)

        return proxy
    }

    return target
}

/*
自定义shallowRef
*/
function shallowRef(target) {
    const result = {
        _value: target, // 用来保存数据的内部属性
        _is_ref: true, // 用来标识是ref对象
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
            console.log('set value 数据已更新, 去更新界面')
        }
    }

    return result
}

/*
自定义ref
*/
function ref(target) {
    if (target && typeof target === 'object') {
        target = reactive(target)
    }

    const result = {
        _value: target, // 用来保存数据的内部属性
        _is_ref: true, // 用来标识是ref对象
        get value() {
            return this._value
        },
        set value(val) {
            this._value = val
            console.log('set value 数据已更新, 去更新界面')
        }
    }

    return result
}


/*
判断是否是ref对象
*/
function isRef(obj) {
    return obj && obj._is_ref
}

/*
判断是否是reactive对象
*/
function isReactive(obj) {
    return obj && obj._is_reactive
}

/*
判断是否是readonly对象
*/
function isReadonly(obj) {
    return obj && obj._is_readonly
}

/*
是否是reactive或readonly产生的代理对象
*/
function isProxy(obj) {
    return isReactive(obj) || isReadonly(obj)
}