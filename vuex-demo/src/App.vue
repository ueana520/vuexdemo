<template>
  <div id="app">
    <unread></unread>
    <chat></chat>
  </div>
</template>

<script>
  import chat from './components/chatroom/chatroom'
  import unread from './components/unread/unread'

  export default {
    name: 'app',
    components: {
      chat,
      unread
    }
  }
</script>

<style lang="less" scoped>
  #app {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:920px;
    height:100%;
    margin: 10px auto;
  }
</style>
