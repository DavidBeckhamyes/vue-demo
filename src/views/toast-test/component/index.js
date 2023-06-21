import toast from "./toast";
import Vue from "vue";

// 使用基础 Vue 构造器，创建一个“子类”
const toastConstructor = Vue.extend(toast);

const showToast = function (msg, duration = 2000) {
    const toast = new toastConstructor({
        el: document.createElement('div'),  // 组件挂载到的节点
        data() {
            return {
                isShow: true,
                message: msg
            }
        }
    })

    // 将挂载的Node添加到body中
    document.body.appendChild(toast.$el);

    setTimeout(() => {
        toast.isShow = false;
        toast.message = "";
    }, duration);
}

function regCpn() {
    // 挂载到原型上
    Vue.prototype.$toast = showToast;
}

export default regCpn