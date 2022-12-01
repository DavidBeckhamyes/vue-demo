<template>
  <h2>Child子级组件</h2>
  <h3>{{ msg }}</h3>
  <h3>{{ count }}</h3>
  <button @click="emitXxx">分发事件</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "child",
  props: ["msg"],
  //   setup 细节问题

  // 执行顺序：在 beforeCreate 之前执行(只执行一次), 此时组件对象还没有创建, 也就意味着组件实例对象this就不能用
  // this 是 undefined, 不能通过 this 来访问 data/computed/methods / props
  // 其实所有的 composition API 相关回调函数中也都不可以

  // 数据初始化的生命周期函数
  beforeCreate() {
    console.log("beforeCreate执行了");
  },

  // setup返回一个对象 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
  // setup返回对象中的属性会与 data 函数返回对象的属性合并成为组件对象的属性
  // setup返回对象中的方法会与 methods 中的方法合并成功组件对象的方法
  // 如果有重名, setup 优先
  //   注意:
  // 一般不要混合使用: methods 中可以访问 setup 提供的属性和方法, 但在 setup 方法中不能访问 data 和 methods(此时组件尚未创建,无法使用组件实例对象this)
  // setup 不能是一个 async 函数: 因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性数据
  setup(props, { attrs, slots, emit }) {
    console.log("setup执行了");
    console.log("###############################");
    // props: 包含 props 配置声明且传入了的所有属性的对象
    console.log(props);
    // attrs: 包含没有在 props 配置中声明的属性的对象, 相当于 this.$attrs
    console.log(attrs);
    // emit: 用来分发自定义事件的函数, 相当于 this.$emit
    function emitXxx() {
      emit("xxx", "+++");
    }
    const showMsg1 = () => {
      console.log("setup中的showMsg1方法");
    };
    return {
      showMsg1,
      emitXxx,
    };
  },

  // 页面渲染完毕的生命周期回调
  mounted() {
    console.log(this);
  },

  data() {
    return {
      count: 10,
    };
  },

  methods: {
    showMsg2() {
      console.log("methods中的showMsg2方法");
    },
  },
});
</script>