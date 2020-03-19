<template>
<!-- 最外成容器-->
<el-container>
  <!-- 侧便拦 容器-->
  <el-aside style='width:200px;height:100vh;background-color:#323745'>
    <!-- 左侧菜单 -->
 <layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <!-- 头部内容 -->
    <el-header>
      <layout-header></layout-header>
      </el-header>
    <!-- 中间区域-->
    <el-main style='padding: 0 0'>
      <!-- 二级路由的容器-->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside.vue'
// import layoutHeader from '../../components/home/layout-header.vue'
export default {
  components: {
    // 'layout-aside': layoutAside,
    // 'layout-header': layoutHeader
  }

}
</script>

<style lang='less' scoped>

</style>
