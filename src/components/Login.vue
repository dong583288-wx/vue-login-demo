<template>
  
  <div>
    <h1>登陆</h1>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button @click="doLogin">登陆</button>
  </div>
</template>

<script>
export default {
  // data:function(){

  // },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    doLogin() {
      this.$.ajax({
        url: "http://localhost:3000/users/" + this.username,
        // 注意put请求
        type: "put",
        dataType: "json",
        // 假设成功
        data: "isLogin=true",
        success: () => {
          window.localStorage.setItem("username", this.username);
          if (confirm("去音乐列表页吗")) {
            // location.href = {name:"music.list"};//不行
            location.href = "#/home/music/list";

            // TODO: 这里
            // this.$router.push({
            //   name:'music.list'
            // })
          }
          return;
        }
      });
    }
  }
};
</script>
