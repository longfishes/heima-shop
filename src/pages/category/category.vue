<script setup lang="ts">
import { http } from '@/utils/http'
import { ref } from 'vue'

let text = ref()

const onBnTapped: any = async () => {
  const res = await http({
    method: 'GET',
    url: 'https://jwplus.longfish.site/api/wx/grade?payload=%0A202311701434%0ALongfish@124',
  })
  text.value = res
}

</script>

<template>
  <view class="category">
    <view>{{ text }}</view>
    <button @tap="onBnTapped()" size="mini" plain type="warn">测试请求</button>
  </view>
</template>

<style lang="scss"></style>
