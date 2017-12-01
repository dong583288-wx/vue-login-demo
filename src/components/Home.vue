<template>
  <div>
    <h1>这里是首页</h1>
    <router-link :to="{name:'login'}">登陆</router-link>
    <button>退出</button>
    <router-link :to="{name:'music'}">音乐首页</router-link>
    <router-link :to="{name:'music.list'}">音乐展示</router-link>

    <router-view></router-view>


  </div>
</template>
