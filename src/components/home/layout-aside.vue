
<template>
  <div class='layout-aside'>
      <div class='title'>
          <img src='../../assets/静态资源/logo_admin.png' alt="">
      </div>
      <el-menu
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b">
      <el-menu-item>
          <i class='el-icon-s-home'></i>
          <span>首页</span>
          </el-menu-item>
      <!-- 折叠菜单 -->
      <el-submenu>
        <!-- 具名插槽 传入内容 -->
        <template slot='title'>
         <i class='el-icon-menu' ></i>
         <span>内容管理</span>
        </template>
         <!-- 匿名插槽 -->
          <el-menu-item>发表文章</el-menu-item>
          <el-menu-item>内容列表</el-menu-item>
          <el-menu-item>素材管理</el-menu-item>
          <el-menu-item>评论列表</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot='title'>
         <i class='el-icon-user-solid' ></i>
         <span>粉丝管理</span>
        </template>
         <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
          <i class='el-icon-s-tools'></i>
          <span>账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import eventBus from '../../utils/eventBus'
export default {
  // data () {
  //   return {
  //     collapse: false, // 默认是展开
  //     bigImg: require('../../assets/img/静态资源/logo_admin.png'), // 大图
  //     smallImg: require('../../assets/img/静态资源/toutiao.png') // 小图
  //   }
  // }
  // created () {
  //   //   展开或者折叠每次取相反
  //   eventBus.$on('collopseOrClose', () => {
  //     this.collapse = !this.collapse
  //   })
  // }
}
</script>

<style lang='less' scoped>
// .layout-aside {import eventBus from '../../utils/eventBus'
    .title {
        padding: 15px 0;
        text-align: center;
        background-color: #2e2f32;
        img {
            width:120px;
            height:30px;
        }
    }
// }
</style>
