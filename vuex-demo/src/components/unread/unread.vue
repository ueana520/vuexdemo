<template>
  <div class="message">
    <h4 class="unread">未读消息:</h4>
    <div class="room">
      <ul>
        <li v-for="item in array" @click="setValue(item[0])">
          <div class="li-top">
            <span>{{item[item.length-1].threadName}}</span>
            <span>{{item[item.length-1].timestamp}}</span>
          </div>
          <div class="li-bottom">{{item[item.length-1].text}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        array: []
      }
    },
    created() {
      this.$store.dispatch('getData')
    },
    watch: {
      allData() {
        let arr = [[], [], []]
        this.allData.forEach((item, index) => {
          if (item.threadID === 't_1') {
            arr[0].push(item)
          } else if (item.threadID === 't_2') {
            arr[1].push(item)
          } else if (item.threadID === 't_3') {
            arr[2].push(item)
          }
        })
        this.array = arr
      }
    },
    computed: {
      ...mapGetters(['allData'])
    },
    methods: {
      ...mapMutations(['switchRoom']),
      setValue(item) {
        this.switchRoom(item.threadID)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .message {
    width: 302px;
    height: 700px;
    .room {
      width: 300px;
      height: 500px;
      border: 1px solid #00a0dc;
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ccc;
        .li-top {
          display: flex;
          justify-content: space-between;
          span {
            color: #00a0dc;
          }
        }
        .li-bottom {
          font-weight: bold;
        }
      }
    }
  }
</style>
