<template>
  <div>
    <h1>{{title}}</h1>
    <router-view></router-view>

  </div>


</template>
<script>
  export default{
    data(){
      return{
        title:'音乐首页'
      }
    }
  }
</script>