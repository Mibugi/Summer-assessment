<template>
  <el-container>
    <el-container>
      <el-header>
        <div class="photo">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>个人中心
        </div>
      </el-header>
      <el-main>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="基本信息-essential information" name="1" class="user">
            <div>真实姓名：</div>
            <div>电话：</div>
          </el-collapse-item>
          <el-collapse-item title="详细信息-detailed information" name="2" class="user">
            <div>qq：</div>
            <div>邮箱：</div>
          </el-collapse-item>
          <el-collapse-item title="我的订单-my order" name="3">
            <div>订单1 {{ input }}</div>
            <div>订单2</div>
            <div>订单3</div>
          </el-collapse-item>
          <el-collapse-item title="我的评价-My evaluation" name="4">
            <div>评价记录1</div>
            <div>评价记录2</div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>
    
<style scoped>
.el-header,
.el-footer {
  background-color: #9dcaec;
  color: rgb(22, 95, 129);
  text-align: center;
  line-height: 60px;
}
.el-header {
  border-bottom: 1px solid rgb(219, 217, 217);
  text-align: left;
}
.el-footer {
  border-top: 1px solid rgb(219, 217, 217);
}

.el-main {
  height: 600px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.photo {
  float: left;
  margin-top: 8px;
}
</style>
