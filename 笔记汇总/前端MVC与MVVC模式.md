## 前端MVC与MVVC模式

#### 前端的MVC

在前端的MVC模式中，M还是表示Modal层，负责与后台交互数据，V表示View，负责页面上DOM的渲染，C表示绑定在DOM元素上的事件，当Controllor中的事件被调用，会去调用Modal中的数据，然后交给View重新渲染数据。

#### 前端MVVM模式

目前前端框架中，最为出色的要属Vue和React了，这俩个框架的核心理念都**是数据驱动页面渲染**，同时他们都是MVVM模式的框架，MVVM模式中的M还是固定表示Modal，V还是表死View，这俩个基本都是不会发生变化，一个页面必然需要数据和渲染俩个部分，那么变化的是如何将Modal渲染到View的过程变了，在MVVM模式中，将View和Modal绑定在一起，只要Modal发生了变化，View就会自动更新，不需要我们认为的再去写如何操作DOM更新的过程了。

资料参考：https://juejin.im/post/6844903791892889613

