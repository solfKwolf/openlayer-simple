<template>
  <el-container class="container">
    <el-header>
      <header>
        <div class="app-title">Openlayers Simple</div>
      </header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-menu-item index="/proj4326">4326投影地图</el-menu-item>
          <el-menu-item index="/proj3857">3857投影地图</el-menu-item>
          <el-menu-item index="/gaode">高德地图</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
}

header {
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #e5e7eb;
}

.app-title {
  font-weight: bold;
}
</style>
