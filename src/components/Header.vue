<template>
  <div class="header">
    <div class="left">
      <div class="title">Crutch</div>
      <p
        v-for="(item, index) in menuList"
        :key="index"
        class="init"
        :class="{ currentActive: item.active == 1 }"
        @click="handleMenuClick(item)"
      >
        {{ item.name }}
      </p>
    </div>
    <div class="right">
      <p class="user">
        <span class="user-icon"></span>
        <span>樊亚军</span>
      </p>
      <p>退出</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: "tool",
          name: "工具箱",
          active: 1,
          path: "/toolCase",
        },
        {
          id: "system",
          name: "系统管理",
          active: 0,
          path: "/system",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handleMenuClick(item) {
      this.menuList.forEach((menu) => {
        menu.active = 0;
      });
      item.active = 1;
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 15px;
  margin-bottom: 20px;
  background: #333f54;
  color: #fff;

  .left, .right {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-right: 40px;
  }
  .init {
    height: 48px;
    line-height: 48px;
    margin-right: 20px;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .currentActive {
    border-bottom: 3px solid #85b189;
  }

  .user {
    display: flex;
    align-items: center;
    margin-right: 20px;
    .user-icon {
      margin-right: 5px;
      width: 16px;
      height: 16px;
      background: url('../assets/img/user.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
