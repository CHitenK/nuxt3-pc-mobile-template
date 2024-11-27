<template>
  <div class="warp layout-h layout-center gutter-v-large">这是移动端</div>
  <div class="warp layout-h layout-center gutter-v-large"><van-button type="primary" class="btn box-23">Vant 按钮</van-button></div>
  <div class="warp layout-h layout-center gutter-v-large">
    <van-icon name="chat-o" class="gutter-h-large" size="40" dot />
    <van-icon name="star-o"  class="gutter-h-large" size="40" badge="9" />
    <van-icon name="cart-o"  size="40" badge="99+" />
  </div>
  <van-empty description="描述文字" />
</template>


<style lang="scss" scoped>
.warp {
  width: 750px;
  height: 200px;
  background-color: #fafafa;
}

.btn {
  width: 375px;
  height: 60px;
  font-size: 24px;

}

</style>
