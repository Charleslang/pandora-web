<template>
  <div>
    <div class="button-wrapper">
      <a-button type="primary">格式校验</a-button>
      <a-button type="primary" style="background-color: pink;">美化</a-button>
      <AppButton :buttonType="'success'">压缩</AppButton>
      <a-button type="primary">转义</a-button>
      <a-button type="primary">去除转义</a-button>
      <a-button type="primary">转 GET 参数</a-button>
      <a-button type="primary">复制结果</a-button>
      <a-button type="primary" danger>清空</a-button>
    </div>
    <div class="text-wrapper">
      <div class="top">
        <a-textarea show-count placeholder="请输入内容" allow-clear :rows="6"/>
      </div>
      <div class="bottom">
        <a-textarea show-count placeholder="处理结果" allow-clear :rows="6"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import AppButton from '@/components/AppButton.vue'
</script>

<style scoped>
  .text-wrapper {
    margin-top: 22px;
  }
  .button-wrapper .ant-btn {
    margin-right: 8px;
  }
</style>
