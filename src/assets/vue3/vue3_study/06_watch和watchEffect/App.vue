<template>
  <div>
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input
        type="text"
        placeholder="请输入姓氏"
        v-model="user.firstName"
      />
      <br />
      名字：<input
        type="text"
        placeholder="请输入名字"
        v-model="user.lastName"
      />
      <br />
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名；<input type="text" placeholder="显示姓名" v-model="fullName1" />
      <br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" />
      <br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName3" />
      <br />
    </fieldset>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      // 姓氏
      firstName: "东方",
      // 名字
      lastName: "不败",
    });
    // 通过计算属性，实现第一个姓名的显示
    // vue3计算属性
    // 计算属性的函数中如果只传入一个回调函数,表示的是get

    // 第一个姓名：
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    // 返回的是一个Ref类型的对象
    console.log(fullName1);

    // 第二个姓名：
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(value: string) {
        const names = value.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    // 第三个名字
    const fullName3 = ref("");
    // 监视-----监视指定的数据
    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     fullName3.value = firstName + "_" + lastName;
    //   },
    //   { immediate: true, deep: false }
    //   // immediate默认会执行一次watch,deep深度监视
    // );

    // 监视，不需要配置immediate，本身默认就会进行监视
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });

    // 监视fullName3的数据，改变firstName和lastName
    // watchEffect(() => {
    //   const names = fullName3.value.split("_");
    //   user.firstName = names[0];
    //   user.lastName = names[1];
    // });

    // watch----可以监视多个数据的
    watch([() => user.firstName, () => user.lastName, fullName3], () => {
      // 这里的代码就没有执行,fullName3是响应式的数据,但是,user.firstName,user.lastName不是响应式的数据
      console.log("===========");
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
