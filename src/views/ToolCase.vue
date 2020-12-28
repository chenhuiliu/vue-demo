<template>
  <div class="tool-case-container">
    <div class="title">ADM-SiteM联合报表</div>
    <el-tabs class="custom-tab" tab-position="left">
      <el-tab-pane label="管理">
        <Configure></Configure>
      </el-tab-pane>
      <el-tab-pane label="每日报表">每日报表</el-tab-pane>
      <el-tab-pane label="自定义报表">自定义报表</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Configure from "../components/Configure";

export default {
  data() {
    return {};
  },
  components: {
    Configure,
  },
};
</script>

<style lang="scss" scoped>
.tool-case-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  .title {
    padding: 10px 20px;
    margin-bottom: 10px;
    margin-left: 30px;
    font-size: 18px;
    color: #85b189;
  }
}
</style>
<style lang="scss">
  .custom-tab {
    position: relative;
    flex: 1;
    .el-tabs__content {
      height: 100%;
    }
    .el-tabs__item.is-active {
      color: #679a8b;
    }
    .el-tabs__item:hover {
      color: #679a8b;
    }
    .el-tabs__active-bar {
      background-color: #679a8b;
    }
  }
</style>