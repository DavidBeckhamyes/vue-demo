import toast from "./toast";
import Vue from "vue";

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