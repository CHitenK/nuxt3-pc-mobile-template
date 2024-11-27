<template>
  <div class="row-warp layout-h layout-center gutter-v">
    这是PC端
  </div>
   <div class="row-warp layout-h layout-center gutter-v">
    <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
  </div>
  <div class="row-warp layout-h layout-center gutter-v">
    <el-badge :value="12" class="item gutter-h">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="3" class="item gutter-h">
      <el-button>replies</el-button>
    </el-badge>
    <el-badge :value="1" class="item gutter-h" type="primary">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="2" class="item gutter-h" type="warning">
      <el-button>replies</el-button>
    </el-badge>
    <el-badge :value="1" class="gutter-h" color="green">
      <el-button>custom background</el-button>
    </el-badge>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Click Me
        <el-icon class="el-icon--right"><caret-bottom /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="clearfix">
            comments
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            replies
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <el-empty description="暂无数据" />
</template>

<script lang="ts" setup>

import { CaretBottom } from '@element-plus/icons-vue'

</script>
<style lang="scss" scoped>
.row-warp {
  height: 120px;
  background: #1d66fb1a;
}

</style>
