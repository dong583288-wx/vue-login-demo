
<template>
  <div>
    <ul>
      <li v-for:"(ele,index) in musics">
        {{ele}} {{index}}
      </li>

    </ul>


  </div>


</template>
<script>
  export default{
    data(){
      musics:["喜欢你","小白菜","fade"]
    }
  }
</script>
