import Vue from 'vue';
import VueRouter from 'vue-router';


// 
import App from './App.vue';



import $ from 'jquery';
Vue.prototype.$ = $;



import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Music from './components/Music.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';

// 

// 路由配置
Vue.use(VueRouter);
var router = new VueRouter();
router.addRoutes([
  // 重定向 到首页
  {
    path: '/',
    redirect: {
      name: "home"
    }
  },
  // 首页
  {
    name: 'home',
    path: '/home',
    component: Home,
    children: [
      // 登陆页
      {
        name: 'login',
        path: 'login',
        component: Login
      },
      // 音乐首页
      {
        name: 'music',
        path: 'music',
        component: Music,
        // --设置元数据
        meta:{
          needCheckd:true
        },
        children: [
          // 音乐列表页
          {
            name: 'music.list',
            path: 'list',
            component: List
          },
          {
            //音乐详情页
            name: 'music.detail',
            path: 'detail/:mid',
            component: Detail
          }

        ]
      }
    ]
  }
])


// 路由守卫设置
router.beforeEach((to,from,next)=>{
  // console.log(to)
  // // 获取
  // console.log(router)
  var matched = to.matched;
  // 声明一个flag 判断是否要直接放行 (不需要进行登陆校验)
  var flag = true;
  for(var i=0; i<matched.length;i++){
    // 判断是否需要进行登陆校验 结合上面设置的元数据
    if (matched[i].meta.needCheckd){
      flag = false;
    }
    
  }
  // 不需要进行登陆 验证 直接放行
  if (checkLogin){
    return next()
  }
  // 从localStorage中获取 当前用户的登录信息
  var username = window.localStorage.getItem("username");\

  // 发起ajax请求 校验当前用户名是否可以登陆
  $.ajax({
    type:"get",
    url: 'http://localhost:3000/users/' + username,
    dataType:'json',
    // success:function(data){

    // },
    // success:(data)=>{

    // },
    success(data){
      if(data.isLogin =="true"){
        next();
      }else{
        alert("去登陆吧");
        next({
          name:"login"
        })
      }
    }
  })
 
})


// 
new Vue({
  el: '#app',
  router,
  render: c => c(App)
})