
<template>
  <div>
    <h1>音乐列表 </h1>
    <ul>
      <li v-for="(item,index) in musics">
        {{item.title}} {{item.singer}} <router-link :to="{name:'music.detail',params:{mid:item.id}}">查看歌词</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      musics: [
        { id:"1",title: "喜欢你", singer: "邓紫棋" },
        { id:"2",title: "小白菜", singer: "老白" },
        { id:"3",title: "fade", singer: "waller" }
      ]
    };
  }
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
</style>

