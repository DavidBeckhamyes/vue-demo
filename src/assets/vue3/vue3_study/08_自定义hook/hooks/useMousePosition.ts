import { ref, onMounted, onUnmounted } from 'vue'
/*
收集用户鼠标点击的页面坐标
*/
export default function useMousePosition() {

    // 初始化坐标数据
    const x = ref(-1);
    const y = ref(-1);

    const updatePosition = function (e: MouseEvent) {
        x.value = e.pageX
        y.value = e.pageY
    }

    // 挂载后绑定点击监听
    onMounted(() => {
        document.addEventListener("click", updatePosition);
    })

    // 卸载前解绑点击监听
    onUnmounted(() => {
        document.removeEventListener("click", updatePosition);
    })

    return {
        x, y
    }
}