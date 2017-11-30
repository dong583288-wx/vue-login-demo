import Vue from 'vue';
import VueRouter from 'vue-router';

// 
import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);
var router = new VueRouter();
router.addRoutes([
  // 重定向 到首页
  {path:'/',redirect:{
    name:"home"
  }},
  // 首页
  {name:'home',path:'/home',component:Home,
  children:[
    {name:'login',path:'login',component:Login},
    {name}
  ]}


])


// 
new Vue({
  el:'#app',
  router,
  render:c=>c(App)
})