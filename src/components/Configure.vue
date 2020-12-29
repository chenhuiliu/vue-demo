<template>
  <div>
    <div class="header">
      <div class="search-wrap">
        <span>活动ID:</span>
        <el-input size="small" v-model="inputVal" class="search-input" placeholder="请输入内容"></el-input>
        <span class="search-button">搜索</span>
      </div>
      <div class="add-wrap">
        <span class="add-btn-icon"></span>
        <span>新建</span>
      </div>
    </div>
    <el-table class="custom-table" :data="tableData" style="width: 100%" stripe>
      <el-table-column prop="activityId" label="活动ID"> </el-table-column>
      <el-table-column prop="activityName" label="活动名称" width="150"> </el-table-column>
      <el-table-column prop="startTime" label="活动开始日期"> </el-table-column>
      <el-table-column prop="endTime" label="活动结束日期"> </el-table-column>
      <el-table-column prop="activityType" label="活动类型"> </el-table-column>
      <el-table-column prop="siteId" label="Site ID"> </el-table-column>
      <el-table-column prop="viewId" label="View ID"> </el-table-column>
      <el-table-column prop="siteToken" label="Site token"> </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="150"> </el-table-column>
      <el-table-column prop="personInCharge" label="负责人"> </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <span class="operation edit" @click="handleEdit(scope.row)">编辑</span>
          <span class="operation" @click="handleDelete(scope.row)">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="custom-pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>

export default {
  data() {
    return {
      inputVal: '',
      currentPage: 1,
      tableData: [
        {
          activityId: "2016-05-02",
          activityName: "王小虎",
          startTime: "2016-05-02",
          endTime: "2016-05-02",
          activityType: "keyword",
          siteId: "781",
          viewId: "903",
          siteToken: "878256276272",
          createTime: "2020-03-23 13:22:34",
          personInCharge: "张三",
        },
        {
          activityId: "2016-05-02",
          activityName: "王小虎",
          startTime: "2016-05-02",
          endTime: "2016-05-02",
          activityType: "keyword",
          siteId: "781",
          viewId: "903",
          siteToken: "878256276272",
          createTime: "2020-03-23 13:22:34",
          personInCharge: "张三",
        },
        {
          activityId: "2016-05-02",
          activityName: "王小虎",
          startTime: "2016-05-02",
          endTime: "2016-05-02",
          activityType: "keyword",
          siteId: "781",
          viewId: "903",
          siteToken: "878256276272",
          createTime: "2020-03-23 13:22:34",
          personInCharge: "张三",
        },
        {
          activityId: "2016-05-02",
          activityName: "王小虎",
          startTime: "2016-05-02",
          endTime: "2016-05-02",
          activityType: "keyword",
          siteId: "781",
          viewId: "903",
          siteToken: "878256276272",
          createTime: "2020-03-23 13:22:34",
          personInCharge: "张三",
        }
      ],
    };
  },
  mounted() {
  },
  methods: {
    handleEdit(row) {
      console.log(row, '====row====');
    },
    handleDelete(row) {
      console.log(row, '====row====');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  .search-wrap {
    display: flex;
    align-items: center;
    .search-input {
      width: 200px;
      padding: 0 10px;
    }
    .search-button {
      padding: 8px;
      background: #69a0c7;
      color: #fff;
      border-radius: 4px;
    }
  }
  .add-wrap {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-left: 10px;
    background: #69a0c7;
    color: #fff;
    border-radius: 4px;

    .add-btn-icon {
      width: 14px;
      height: 14px;
      background: url('../assets/img/add.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
<style lang="scss">
  .custom-table {
    margin-bottom: 60px;
    .cell {
      font-size: 12px;
    }
    th>.cell {
      font-size: 14px;
      color: #333;
    }
    .operation {
      display: inline-block;
      padding: 4px;
      background:#679a8b;
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      line-height: 1.2;
      border-radius: 2px;
    }
    .edit {
      margin-right: 5px;
    }
  }
  .custom-pagination {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .custom-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #679a8b;
  }
  .custom-pagination.is-background .el-pager li:not(.disabled).active {
    background:#679a8b;
    color: #fff;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #679a8b;
  }
  .el-select .el-input.is-focus .el-input__inner {
    border-color: #679a8b;
  }
  .el-select-dropdown__item.selected {
    color: #679a8b;
  }
</style>
