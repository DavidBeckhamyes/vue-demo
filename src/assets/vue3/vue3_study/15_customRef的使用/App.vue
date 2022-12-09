<template>
  <h2>App</h2>
  <input v-model="keyword" placeholder="搜索关键字" />
  <p>{{ keyword }}</p>
</template>

<script lang="ts">
/*
customRef:
  创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

需求:
  使用 customRef 实现 debounce 的示例
*/

import { defineComponent, ref, customRef } from "vue";

export default defineComponent({
  setup() {
    const keyword = useDebouncedRef("", 500);
    console.log(keyword);
    return {
      keyword,
    };
  },
});

/*
实现函数防抖的自定义ref
value传入的数据，将来数据的类型不确定，所以用泛型，delay防抖的默认间隔是200ms
*/
function useDebouncedRef<T>(value: T, delay = 200) {
  // 准备一个存储定时器ID的变量
  let timeout: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          // 告诉Vue去触发界面更新
          trigger();
        }, delay);
      },
    };
  });
}
</script>