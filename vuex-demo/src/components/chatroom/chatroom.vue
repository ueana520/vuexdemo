<template>
  <div class="chat">
    <h4 class="name">Jing and Bill</h4>
    <div class="content">
      <ul>
        <li v-for="item in array">
          <div class="li-top">
            <span>{{item.authorName}}</span>
            <span>{{item.timestamp}}</span>
          </div>
          <div class="li-bottom">{{item.text}}</div>
        </li>
      </ul>
    </div>
    <textarea class="send" @keyup.enter="send" ref="text"></textarea>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        array: []
      }
    },
    watch: {
      getValue(val) {
        let arr = []
        this.allData.forEach((item) => {
          if (item.threadID === val) {
            arr.push(item)
          }
        })
        console.log(this.allData)
        this.array = arr
      },
      allData(val) {
        let arr = []
        val.forEach((item) => {
          if (item.threadID === this.getValue) {
            arr.push(item)
          }
        })
        this.array = arr
      }
    },
    computed: {
      ...mapGetters(['allData', 'getValue'])
    },
    methods: {
      ...mapActions(['setData']),
      send() {
        let text = this.$refs.text
        this.setData({text: text.value, thread: this.array[0]})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .chat {
    width: 602px;
    height: 700px;
    .content {
      width: 600px;
      height: 500px;
      border: 1px solid #00a0dc;
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100px;
        font-weight: bold;
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
    .send {
      width: 596px;
      height: 50px;
      margin-top: 20px;
    }
  }
</style>
