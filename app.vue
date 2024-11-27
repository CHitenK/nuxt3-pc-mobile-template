<template>
  <!-- PC -->
  <PCLayout v-if="deviceType === 'pc'"></PCLayout>
   <!-- mobile -->
  <MobileLayout v-if="deviceType === 'mobile'"></MobileLayout>
</template>

<script lang="ts" setup>

import PCLayout from './PC/layout.vue'
import MobileLayout from './mobile/layout.vue'

import { getDeviceType } from '~/utils/index'

import '~/styles/common.css'

const deviceType = getDeviceType()

</script>

<style lang="scss"></style>
