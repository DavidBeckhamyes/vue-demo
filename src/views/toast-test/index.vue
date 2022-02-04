<template>
    <button @click="show">测试弹窗</button>
</template>

<script>
export default {
   name: "toastTest",
   methods: {
       show() {
           this.$toast("中国健儿，冬奥加油！");
       }
   }
}
</script>

<style scoped>

</style>