<template>
  <div>
    <h1>这里是首页</h1>
    <router-link :to="{name:'login'}">登陆</router-link>
    <button @click="exit">退出</button>
    <router-link :to="{name:'music'}">音乐首页</router-link>
    <router-link :to="{name:'music.list'}">音乐展示</router-link>

    <router-view></router-view>


  </div>
</template>


<script>
export default {
  methods: {
    // exit:function(){},
    exit(){
      // 获取当前登陆的用户名2
      var username = window.localStorage.getItem("username");
      console.log(username)
      this.$.ajax({
        type:"put",
        url:"http://localhost:3000/users/" + username,
        data:'isLogin=false',
        dataType:"json",
        success:()=>{
          // push路由跳转
          this.$router.push({
            name:'login'
          })
        }
      })
    }
  },

  // data: function() {
  //   return {
  //   }
  // },
  // data(){
  //   return {
  //   }
  // }
};
</script>
