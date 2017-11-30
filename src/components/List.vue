
<template>
  <div>
    <h1>音乐列表 </h1>
    <ul>
      <li v-for="(ele,index) in musics">
        {{index}} {{ele}} 
      </li>

    </ul>


  </div>


</template>
<script>
export default {
  data() {
    return {
      musics: ["喜欢你", "小白菜", "fade"]
    };
  }
};
</script>

<style scoped>
  ul,li{
    list-style: none
  }
</style>

