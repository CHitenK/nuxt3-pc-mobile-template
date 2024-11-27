<template>
  <div class="cmk-pc-warp">
    <NuxtLayout>
      <el-config-provider :locale="zhCn">
        <NuxtPage />
      </el-config-provider>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
/* element-plus 使用中文 */
import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<!-- 不使用 scoped -->
<style lang="scss">
@use './style/base.scss';
</style>
