<template>
  <div class="cmk-mobile-warp">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>

</template>

<script lang="ts" setup>

/* vant Ui */
import 'vant/lib/index.css';

</script>

<!-- 不使用 scoped -->
<style lang="scss" >
/* 移动端的公共样式必须包裹在 .cmk-mobile-warp */
@use './style/base.scss';
</style>
