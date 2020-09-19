## Vue-router

学习资料：https://router.vuejs.org/zh/

#### 1.介绍

Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

路由，其实就是指向的意思，当我点击页面上的home按钮时，页面中就要显示home的内容，如果点击页面上的about 按钮，页面中就要显示about 的内容。Home按钮 => home 内容， about按钮 => about 内容，也可以说是一种映射. 所以在页面上有两个部分，一个是点击部分，一个是点击之后，显示内容的部分。 

#### 2.动态路由匹配

我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。

可以在 `vue-router` 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：

```js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

一个“路径参数”使用冒号 `:` 标记。

#### 3.嵌套路由

借助 `vue-router`，使用嵌套路由配置，就可以很简单地表达这种关系。

```html
<div id="app">
  <router-view></router-view>
</div>
```

这里的 `<router-view>` 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 `<router-view>`。

#### 4.vue-cli 创建一个项目体验一下

1, 在src 目录下新建两个组件，home.vue 和 about.vue

```vue
<template>
    <div>
        <h1>home</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            }
        }
    }
</script>
```

```vue
<template>
    <div>
        <h1>about</h1>
        <p>{{aboutMsg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是about组件'
            }
        }
    }
</script>
```

2, 在 App.vue中 定义 router-link   和  /router-view>

```vue
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>   
  </div>
</template>

<script>
export default {
  
}
</script>
```

3,  在 src目录下再新建一个router.js 定义router, 就是定义 路径到 组件的 映射。

```js
import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./home.vue";
import about from "./about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    }
]

var router =  new VueRouter({
    routes
})
export default router;
```

4， 把路由注入到根实例中，启动路由。这里其实还有一种方法，就像vuex  store 注入到根实例中一样，我们也可以把vueRouter 直接注入到根实例中。在main.js中引入路由，注入到根实例中。

```js
import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "./router.js"    // import router 的router 一定要小写， 不要写成Router, 否则报 can't match的报错
new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})
```

5， 这时点击页面上的home 和about 可以看到组件来回切换。但是有一个问题，当首次进入页面的时候，页面中并没有显示任何内容。这是因为首次进入页面时，它的路径是 '/'，我们并没有给这个路径做相应的配置。一般，页面一加载进来都会显示home页面，我们也要把这个路径指向home组件。但是如果我们写{ path: '/', component: Home },vue 会报错，因为两条路径却指向同一个方向。这怎么办？这需要重定向，所谓重定向，就是重新给它指定一个方向，它本来是访问 / 路径，我们重新指向‘/home’, 它就相当于访问 '/home', 相应地, home组件就会显示到页面上。vueRouter中用 redirect 来定义重定向。

```js
const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    // 重定向
    {
        path: '/', 
        redirect: '/home' 
    }
]
```

现在页面正常了，首次进入显示home, 并且点击也可以看到内容的切换。

6， 最后，我们看一下路由是怎么实现的

打开浏览器控制台，首先看到 router-link 标签渲染成了 a 标签，to 属性变成了a 标签的 href 属性，这时就明白了点击跳转的意思。router-view 标签渲染成了我们定义的组件，其实它就是一个占位符，它在什么地方，匹配路径的组件就在什么地方，所以 router-link 和router-view 标签一一对应，成对出现。