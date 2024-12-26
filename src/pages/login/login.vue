<script setup lang="ts">

const back = () => {
  uni.navigateBack()
}

</script>

<template>
  <view class="login">login</view>
  <button @tap="back()" size="mini" plain type="warn">返回</button>
</template>

<style lang="scss"></style>
