<template>
  <div class="left-nav">
    <ul>
      <li>
        <router-link to="/pos" class="linkto">
          <i class="icon iconfont icon-goumai">
            <a href="#"></a>
          </i>
          <div>purchase</div>
        </router-link>
      </li>
      <li>
        <router-link to="/shop" class="linkto">
          <i class="icon iconfont icon-dianpu">
            <a href="#"></a>
          </i>
          <div>shop</div>
        </router-link>
      </li>
      <li>
        <router-link to="/goods" class="linkto">
          <i class="icon iconfont icon-hanbao">
            <a href="#"></a>
          </i>
          <div>goods</div>
        </router-link>
      </li>
      <li>
        <router-link to="/vip" class="linkto">
          <i class="icon iconfont icon-huiyuanqia">
            <a href="#"></a>
          </i>
          <div>vip</div>
        </router-link>
      </li>
      <li>
        <router-link to="/my" class="linkto">
          <i class="icon iconfont icon-zuanshi">
            <a href="#"></a>
          </i>
          <div>my</div>
        </router-link>
      </li>
      <li>
        <router-link to="/setup" class="linkto">
          <i class="icon iconfont icon-gongnengjianyi">
            <a href="#"></a>
          </i>
          <div>set up</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
.left-nav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
}
.iconfont {
  font-size: 24px;
  cursor: pointer;
}
.left-nav ul {
  padding: 0px;
  margin: 0px;
}
.left-nav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
}
.linkto {
  text-decoration: none;
  color: #fff;
}
</style>