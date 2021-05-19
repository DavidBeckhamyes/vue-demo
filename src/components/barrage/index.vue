<template>
  <div class="tan-box">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        :style="{ height: liHeight + 'px' }"
      >
        <transition-group
          :name="'list' + (index % 3)"
          tag="div"
          :key="index"
          @before-enter="beforeEnter"
        >
          <div
            :id="'transition_' + index + '_' + ind"
            v-for="(value, ind) in item"
            :key="value.id"
            class="transition-box"
          >
            <slot :data="value"></slot>
          </div>
        </transition-group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VueTan",
  data() {
    return {
      dataList: [], // 有几个航道放几个数组
      initData: null, // 接收父组件传来的数组
      enterIndex: 0, // 进入哪个队列
      leaveIndex: 0, // 要销毁的队列序号
      iteratorIndex: 0,
      arrayIndex: 0,
    };
  },
  props: {
    liNum: {
      type: Number,
      default: 2,
    },
    liHeight: {
      type: Number,
      default: 50,
    },
    data: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(val) {
        this.initData = JSON.parse(JSON.stringify(val));
      },
    },
    liNum: {
      immediate: true,
      handler(val) {
        for (let i = 0; i < val; i++) {
          this.$set(this.dataList, i, []);
        }
      },
    },
  },
  mounted() {
    this.move();
  },
  methods: {
    move() {
      this.timer = setInterval(() => {
        let firstBitIndex = this.enterIndex % this.liNum;
        if (this.iteratorIndex > firstBitIndex) {
          this.arrayIndex++;
        } else {
          this.iteratorIndex = firstBitIndex;
        }
        if (this.enterIndex >= this.initData.length) {
          return;
        }
        this.dataList[firstBitIndex].push(this.initData[this.enterIndex]);
        setTimeout(() => {
          let itemDom = document.getElementById(
            "transition_" + firstBitIndex + "_" + this.arrayIndex
          );
          console.log("3424234->", itemDom);
        }, 100);
        this.enterIndex++;
      }, 1000);
    },
    
    beforeEnter() {
      setTimeout(() => {
        this.dataList[this.leaveIndex % this.liNum].shift();
        this.leaveIndex++;
      }, 15000);
    },
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.tan-box {
  height: 100%;
  width: 100%;
  position: relative;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    vertical-align: middle;

    li {
      position: relative;
      margin: 10px 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .transition-box {
        position: absolute;
        top: 0;
        height: 100%;
        left: 100%;
        overflow: hidden;
        white-space: nowrap;
      }
      .list0-enter-active {
        transition: left 15s linear;
      }
      .list0-enter-to,
      .list1-enter-to,
      .list2-enter-to {
        left: -100%;
      }
      .list1-enter-active {
        transition: left 10s linear;
      }
      .list2-enter-active {
        transition: left 12s linear;
      }
    }
  }
}
</style>