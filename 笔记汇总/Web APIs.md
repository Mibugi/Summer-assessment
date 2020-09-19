# Web APIs

### 一、DOM



#### 1.DOM树

- 文档：一个页面就是一个文档，DOM中用 dovument 表示。
- 元素：网页中的所有标签都是元素，DOM中使用 element 表示。
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM用 node 表示。



#### 2.获取元素

- 根据ID获取
- 根据标签名获取
- 通过HTML5新增的方法获取
- 特殊元素获取



##### 1-根据ID获取

使用 getElementByid() 可以获取带有 ID 的元素对象。

语法

```js
var element = document.getElementById(id);
```

参数

1.**`element`**是一个 [Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 对象。如果当前文档中拥有特定ID的元素不存在则返回null.

2.**`id`**是大小写敏感的字符串，代表了所要查找的元素的唯一ID.



##### 2-根据标签名获取

getElementsByTagName() 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。

还可以获取某个元素（父元素）内部所有指定标签名的子元素

```js
element.getelementsByTagName('标签名');
```

tip：父元素必须是单个对象（必须指明是哪一个元素对象），获取时不包括父元素自己。



##### 3-通过HTML5新增的方法获取

```js
document.getElementsByClassName('类名');
```

```js
document.querySelector('选择器');
```

根据指定选择器返回第一个元素对象。

```js
document.querySelectorALL('选择器');
```

根据指定选择器返回



##### 4-获取特殊元素（body、html）

1.获取body 元素

```js
var bodyEle = document.body;
```

2.获取html 元素

```js
var htmlEle = document.documentElement;
```



#### 3.事件



##### 1-事件三要素

- 事件源：事件被触发的对象
- 事件类型：如何触发
- 事件处理程序：通过一个函数赋值的方式 完成

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="btn">唐伯虎</button>
    <script>
        //  点击一个按钮 弹出对话框
        //  (1)事件源 事件触发的对象 
        var btn = document.getElementById('btn');
        //  (2)事件类型 如何触发 什么事件 比如鼠标点击（onclick） 或鼠标经过 键盘按下
        //  (3)事件处理程序 通过一个函数赋值的方式 完成
        btn.onclick = function () {
            alert('点秋香');
        }
    </script>
</body>

</html>
```



##### 2-执行事件的步骤

1.获取事件源

2.注册事件（绑定事件）

3.添加事件处理程序（采取函数赋值形式）

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>123</div>
    <script>
        //  执行事件步骤
        //  点击div 控制台输出 我被选中了
        //  1.获取事件源
        var div = document.querySelector('div');
        //  2.绑定事件 注册事件
        //  div.onclick
        //  3.添加事件处理程序
        div.onclick = function () {
            console.log('我被选中了');
        }
    </script>
</body>

</html>
```



#### 4.操作元素

JavaScript的 DOM 操作可以改变网页内容、结构和样式，我们可以利用 DOM 操作元素来改变元素里面的内容、属性等。注意以下都是属性。



##### 1-改变元素的内容

```js
element.innerText
```

从起始位置到终止位置的内容，但它除去 html 标签，同时空格和换行也会被去掉

```js
element.innerHTML
```

起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行



##### 2-修改元素属性

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    <button id="zr">左然</button>
    <button id="ljh">陆景和</button> <br>

    <img src="img/zuoran-lihui.png">

    <script>
        //  修改元素属性 src
        //  1.获取元素
        var zr = document.getElementById('zr');
        var ljh = document.getElementById('ljh');
        var img = document.querySelector('img');
        //  2.注册事件 处理程序
        ljh.onclick = function () {
            img.src = 'img/lujinghe-lihui.png';
            img.title = '陆景和';
        }
        zr.onclick = function () {
            img.src = 'img/zuoran-lihui.png';
            img.title = '左然';
        }
    </script>
</body>

</html>
```



##### 3-表单属性设置

利用 DOM 可以操作如下表单元素的属性

type、value、checked、selected、disabled



案例：仿京东显示隐藏密码

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 400px;
            border-bottom: 1px solid #cccccc;
            margin: 100px auto;
        }

        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }

        .box img {
            position: absolute;
            top: 113px;
            right: 567px;
            width: 20px;
        }
    </style>
</head>

<body>
    <div class="box">
        <label for="">
            <img src="img/hide.png" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <script>
        //1.获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        //2.注册事件 处理程序
        var flag = 0;
        eye.onclick = function () {
            //点击一次之后 flag变化
            if (flag == 0) {
                pwd.type = 'text';
                eye.src = 'img/browse.png';
                flag = 1;
            }
            else {
                pwd.type = 'password';
                eye.src = 'img/hide.png';
                flag = 0;
            }
        }
    </script>
</body>

</html>
```



##### 4-样式属性操作

可以通过JS修改元素的大小、颜色、位置等样式。

```
1.element.style         行内样式操作
2.element.className     类名样式操作
```

注意！

- JS 里面的样式采取驼峰命名法 如 fontSize、backgroundColor
- JS 修改 style 样式操作，产生的是行内样式，CSS权重比较高



##### 5-关闭淘宝二维码案例

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 74px;
            height: 88px;
            border: 1px solid #cccccc;
            margin: 100px auto;
            font-size: 12px;
            text-align: center;
            color: #ff4400;

        }

        .box img {
            width: 60px;
            margin-top: 5px;
        }

        .close-btn {
            position: absolute;
            top: -1px;
            left: -16px;
            width: 14px;
            height: 14px;
            border: 1px solid #cccccc;
            line-height: 14px;
            font-family: Arial, Helvetica, sans-serif;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <div class="box">
        淘宝二维码
        <img src="img/tb-erweima.png" alt="">
        <i class="close-btn">×</i>
    </div>
    <script>
        //1获取元素
        var btn = document.querySelector('.close-btn');
        var box = document.querySelector('.box');
        //2注册事件 程序处理
        btn.onclick = function () {
            box.style.display = 'none';
        }
    </script>
</body>

</html>
```



##### 6-显示隐藏文本框内容案例

1. 首先表单需要2个新事件，获得焦点 onfocus 失去焦点 onblur
2. 如果获得焦点，判断表单里面内容是否为默认文字，如果是默认文字，就清空表单内容
3. 如果失去焦点，判断表单内容是否为空，如果为空，啧表单内容改为默认文字

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            color: #999999;
        }
    </style>
</head>

<body>
    <input type="text" value="手机">
    <script>
        //1.获取元素
        var text = document.querySelector('input');
        //2.注册事件 获得焦点事件 onfocus
        text.onfocus = function () {
            if (this.value === '手机') {
                this.value = '';
            }
            //获得焦点需要把文本框里面的文字颜色变黑
            this.style.color = '#333';
        }
        //3.注册事件 失去焦点事件 onblur
        text.onblur = function () {
            if (this.value === '') {
                this.value = '手机';
            }
            //失去焦点需要把文本框里面的文字颜色边浅色
            this.style.color = '#999';
        }
    </script>
</body>

</html>
```

##### 7-通过className更改元素样式

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .change {
            background-color: purple;
            color: #fff;
            font-size: 25px;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div>文本</div>
    <script>
        //使用 element.style 获得修改元素样式
        var text = document.querySelector('div');
        text.onclick = function () {
            // this.style.backgroundColor = 'purple';
            this.className = 'change';
        }
    </script>
</body>

</html>
```

注意！

- 如果样式修改较多，可以采取操作类名方式更改元素
- class 因为是个保留字，因此使用 className 来操作元素类名属性
- className 会直接更改元素的类名，会覆盖原先的类名



##### 8-仿新浪注册页面案例

- 首先判断的事件是表单失去焦点 onblur
- 如果输入正确则提示正确的信息颜色为绿色小图标变化
- 如果输入不是6到16位，则提示错误信息为红色小图标变化
- 因为里面变化样式较多，采取 className 修改样式