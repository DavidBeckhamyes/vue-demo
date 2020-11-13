<template>
  <!-- <div class="image">
        <a href="#"><img src="../../assets/logo.png"></a>
  </div>-->
  <ul class="usable-invoice-list">
    <li class="usable-invoice-item">
      <div class="orderTitle"></div>
      <div class="orderDetail"></div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "Style3",
  mounted: function() {
    this.testReq();
  },
  methods: {
    testReq() {
      axios({
        headers: { "Access-Control-Allow-Origin": "*" },
        method: "GET",
        url:
          "https://wifi.12306.cn/wifiapps/hotelfrontend/api/query/city/listAll"
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.usable-invoice-list {
  padding: 0.44rem 0.4rem;
  .usable-invoice-item {
    margin: 0 auto;
    box-sizing: border-box;
    width: 345px;
    height: 140px;
    padding-top: 5px;
    list-style-type: none;
    background: rgba(251, 251, 251, 1);
    box-shadow: 0 0.093333rem 0.16rem 0 rgba(0, 0, 0, 0.06);
    border-radius: 0.666667rem;
    border: 1px solid rgba(251, 251, 251, 1);
    .orderTitle {
      box-sizing: border-box;
      height: 40px;
      width: 85%;
      padding-left: 20px;
      background-color: red;
    }
  }
}
</style>