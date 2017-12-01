<template>
  <div>
    <h4>{{music.title}}</h4>
    歌词<p>{{music.lrc}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musics: [
        { id:"1",title: "喜欢你", singer: "邓紫棋",lrc:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { id:"2",title: "小白菜", singer: "老白",lrc:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        { id:"3",title: "fade", singer: "waller",lrc:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }
      ],
      music:''
    };
  },
  created(){
    // 根据
      console.log(this.$route,"this.$route")

    console.log(this.$router,"this.$router");
    // 查找元素
    // 注意 router和$route
    var id = this.$route.params.mid;
    this.music = this.musics.find(function(ele){
      return ele.id = id
    })
  }
};
</script>
