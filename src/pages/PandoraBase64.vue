<template>
  <div>
    <div class="button-wrapper">
      <a-button type="primary">Base64编码</a-button>
      <a-button type="primary">Base64解码</a-button>
      <a-button type="primary">交换</a-button>
      <a-button type="primary">复制结果</a-button>
      <a-button type="primary" danger>清空</a-button>
    </div>
    <div class="text-wrapper">
      <div><a-textarea show-count placeholder="请输入内容" allow-clear :rows="6"/></div>
      <div><a-textarea show-count placeholder="处理结果" allow-clear :rows="6"/></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>

  .button-wrapper .ant-btn {
    margin-right: 8px;
  }

  .text-wrapper,
  .text-wrapper > div:last-child {
    margin-top: 22px;
  }
  
  .text-wrapper :deep(.ant-input-affix-wrapper) {
    height: 100%;
  }
</style>
