<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <!-- vue是单向数据流,不允许子组件直接修改props里面的值,所以此处不能用v-model -->
      <!-- <input type="checkbox" :checked="isCompleted" /> -->
      <!-- 父级组件中的某些数据尽量不要让子级组件直接进行修改 -->
      <input type="checkbox" v-model="isCompleted" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">
      删除
    </button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/todo";

export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 背景色
    const bgColor = ref("white");
    // 前景色
    const myColor = ref("black");
    // 设置按钮默认不显示
    const isShow = ref(false);
    // 鼠标进入和离开的回调函数
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        bgColor.value = "pink";
        myColor.value = "green";
        isShow.value = true;
      } else {
        // 鼠标离开
        bgColor.value = "white";
        myColor.value = "black";
        isShow.value = false;
      }
    };
    // 删除数据的方法
    const delTodo = () => {
      // 提示
      if (window.confirm("确定要删除吗?")) {
        props.deleteTodo(props.index);
      }
    };
    // 计算属性的方式---来让当前的复选框选中/不选中
    const isCompleted = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val) {
        console.log("是否选中当前item?：", val);
        props.updateTodo(props.todo, val);
      },
    });
    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      delTodo,
      isCompleted,
    };
  },
});
</script>

<style scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>