<template>
  <div>
    <div class="button-wrapper">
      <a-button type="primary">开始去除</a-button>
      <a-button type="primary">复制结果</a-button>
      <a-button type="primary" danger>清空</a-button>
    </div>
    <div class="select-wrapper">
      <a-checkbox>去空格</a-checkbox>
      <a-checkbox>去制表</a-checkbox>
      <a-checkbox>去回车</a-checkbox>
    </div>
    <div class="text-wrapper">
      <div class="header">
        <a-textarea show-count placeholder="请输入内容" allow-clear :rows="6"/>
      </div>
      <div class="bottom">
        <a-textarea show-count placeholder="处理结果" allow-clear :rows="6"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
  .text-wrapper, .select-wrapper {
    margin-top: 22px;
  }

  .button-wrapper .ant-btn {
    margin-right: 8px;
  }

  .text-wrapper > div {
    width: 80%;
  }
</style>
