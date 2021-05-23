<template>
  <div class="tan-box">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        :style="{ height: liHeight + 'px' }"
      >
        <transition-group
          :name="'list' + (index % 2)"
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
const screenWidth = document.body.clientWidth;
export default {
  name: "VueTan",
  data() {
    return {
      dataList: [], // 有几个弹幕行道放几个数组
      initData: null, // 接收父组件传来的数组
      enterIndex: 0, // 进入哪个队列
      leaveIndex: 0, // 要销毁的队列
      iteratorIndex: 0, // 中间暂存的首位序号 用来判断轮询到哪个轨道
      arrayIndex: 0, // 二维数组第二位
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
    enterIndex: {
      immediate: true,
      handler(val) {
        this.$emit("updateEnterIndex", val);
      },
    },
  },
  mounted() {
    this.move();
  },
  methods: {
    move() {
      this.timer = setInterval(() => {
        if (this.initData.length == 0) {
          return;
        }
        if (this.enterIndex >= this.initData.length) {
          this.enterIndex = 0;
          this.leaveIndex = 0;
        }
        // 遍历要处理的索引下标
        let firstBitIndex = this.enterIndex % this.liNum;

        // 二维数组第二位起始索引值
        if (firstBitIndex == 1 && this.enterIndex > 0) {
          this.arrayIndex = this.dataList[firstBitIndex].length;
        } else {
          this.arrayIndex =
            this.dataList[firstBitIndex].length > 0
              ? this.dataList[firstBitIndex].length - 1
              : 0;
        }

        if (this.iteratorIndex > firstBitIndex) {
          this.arrayIndex++;
        } else {
          this.iteratorIndex = firstBitIndex;
        }

        if (this.dataList[firstBitIndex].length == 0) {
          // 两个通道各自第一个弹幕文字不处理
          this.dataList[firstBitIndex].push(this.initData[this.enterIndex]);
        } else {
          let secondIndex = this.arrayIndex - 1;
          let itemDom = document.getElementById(
            "transition_" + firstBitIndex + "_" + secondIndex
          );
          //判断右侧是否空出距离 避免下条弹幕生成时出现重叠问题
          if (screenWidth - itemDom.offsetLeft - itemDom.offsetWidth > 10) {
            this.dataList[firstBitIndex].push(this.initData[this.enterIndex]);
          } else {
            this.enterIndex--;
          }
        }
        this.enterIndex++;
      }, 1000);
    },

    beforeEnter() {
      setTimeout(() => {
        this.dataList[this.leaveIndex % this.liNum].shift();
        this.leaveIndex++;
      }, 7000);
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
        transition: left 5s linear;
      }
      .list0-enter-to,
      .list1-enter-to,
      .list2-enter-to {
        left: -100%;
      }
      .list1-enter-active {
        transition: left 7s linear;
      }
    }
  }
}
</style>