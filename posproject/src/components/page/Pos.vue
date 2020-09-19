<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs type="border-card">
          <!-- 点餐 -->
          <el-tab-pane label="Order" class="diancan">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button class="bts" type="danger" @click="delSingleGoods(scope.row)">减少</el-button>
                  <el-button class="bts" type="success" @click="addOrderList(scope.row)">增加</el-button>
                  <!-- <el-button type="text">结账</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>
              {{ totalCount }} &nbsp &nbsp &nbsp
              <small>金额：</small>
              {{ totalMoney }}元
            </div>
            <div class="div-btn">
              <el-button type="warning" round>挂单</el-button>
              <el-button type="danger" round @click="delAllGoods">清空</el-button>
              <el-button type="success" round @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
          <!-- 挂单 -->
          <el-tab-pane label="List">敬请期待</el-tab-pane>
          <!-- 外卖 -->
          <el-tab-pane label="pack">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button class="bts" type="danger" @click="delSingleGoods(scope.row)">减少</el-button>
                  <el-button class="bts" type="success" @click="addOrderList(scope.row)">增加</el-button>
                  <!-- <el-button type="text">结账</el-button> -->
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>
              {{ totalCount }} &nbsp &nbsp &nbsp
              <small>金额：</small>
              {{ totalMoney }}元
            </div>

            <div class="ads">
              <!-- 填写外卖地址 -->
              <el-input placeholder="请输入送餐地址" v-model="input" clearable></el-input>
            </div>
            <!-- 选择送餐时间 -->
            <div class="time">
              请选择送餐时间
              <el-time-picker
                v-model="value1"
                :picker-options="{ selectableRange: '8:30:00 - 23:30:00'}"
                placeholder="请选择送餐时间"
              ></el-time-picker>
            </div>
            <div class="div-btn">
              <el-button type="warning" round>挂单</el-button>
              <el-button type="danger" round @click="delAllGoods">清空</el-button>
              <el-button type="success" round @click="checkout">结账</el-button>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <!--商品展示-->
      <el-col :span="17">
        <div class="often-goods">
          <div class="title">常用商品 Common Goods</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                <span>{{ goods.goodsName }}</span>
                <span class="o-price">{{ '￥'+goods.price+'元' }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs type="border-card">
            <el-tab-pane label="汉堡-hamburger">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" class="goodsimg" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食-snack">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" class="goodsimg" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮品-drinks">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" class="goodsimg" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐-Set meal">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" class="goodsimg" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      input: "",
      value1: new Date(2020, 9, 15, 18, 40),
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0,
      input: "",
    };
  },

  created: function () {
    // 拉取常用商品数据
    axios
      .get(
        "https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/oftenGoods"
      )
      .then((response) => {
        // console.log(response);
        this.oftenGoods = response.data.oftenGoods;
      })
      .catch((error) => {
        // console.log(error);
        alert("网络错误，不能访问");
      });
    // 拉取分类商品数据
    axios
      .get(
        "https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/typeGoods"
      )
      .then((response) => {
        // console.log(response);
        this.type0Goods = response.data.data[0];
        this.type1Goods = response.data.data[1];
        this.type2Goods = response.data.data[2];
        this.type3Goods = response.data.data[3];
      })
      .catch((error) => {
        // console.log(error);
        alert("网络错误，不能访问");
      });
  },

  mounted: function () {
    // 解决100%高的问题:在页面中使用了Element组件，这样他会自动给我们生产虚拟DOM，我们无法设置高度100%,此处通过利用javascript，来设置100%高度问题
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    //添加订单列表的方法
    addOrderList(goods) {
      // this.totalCount = 0; //汇总数量清0
      // this.totalMoney = 0;
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter((o) => o.goodsId == goods.goodsId);
        //使用“箭头”（=>）定义函数
        //var f = a = > a

        //等同于
        //var f = function(a){
        //return a;
        //}

        arr[0].count++;
        //console.log(arr);
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1,
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    //删除单个商品
    delSingleGoods(goods) {
      let arr = this.tableData.filter((o) => o.goodsId == goods.goodsId);
      arr[0].count--;
      if (arr[0].count == 0) {
        this.tableData = this.tableData.filter(
          (o) => o.goodsId != goods.goodsId
        );
      }
      this.getAllMoney();
    },

    //删除全部商品
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    //模拟结账
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "结账成功!谢谢你！",
          type: "success",
        });
      } else {
        this.$message.error("你还没有选择商品哦！");
      }
    },
    //汇总数量和金额
    getAllMoney() {
      this.totalMoney = 0;
      this.totalCount = 0;
      if (this.tableData) {
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + element.price * element.count;
        });
      }
    },
  },
};
</script>
<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
  height: 100%;
}
.div-btn {
  margin-top: 10px;
  margin-left: 55px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.bts {
  padding: 3px;
  margin: 0%;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}

.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.goodsimg {
  width: 90px;
  height: 80px;
}
.totalDiv {
  text-align: center;
  background-color: #ffffff(86, 89, 107);
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}
.ads {
  padding: 10px;
}
.time {
  margin-left: 25px;
}
</style>