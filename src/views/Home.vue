<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
  }
}
</style>
