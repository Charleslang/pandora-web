<template>
  <div>
    <div class="button-wrapper">
      <a-button type="primary">URL编码</a-button>
      <a-button type="primary">URL解码</a-button>
      <a-button type="primary" danger>清空</a-button>
    </div>
    <div class="text-wrapper">
      <div class="header">
        <a-textarea show-count placeholder="请输入内容" allow-clear :rows="6"/>
      </div>
      <div class="bottom">
        <div class="left">
          <a-textarea show-count placeholder="encodeURI 编码" allow-clear :rows="6"/>
        </div>
        <div class="right">
          <a-textarea show-count placeholder="encodeURIComponent 编码" allow-clear :rows="6"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>

  .text-wrapper {
    margin-top: 22px;
  }
  .button-wrapper .ant-btn {
    margin-right: 8px;
  }
  .text-wrapper .bottom {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
  }

  .text-wrapper :deep(.ant-input-textarea) {
    /* width: 800px; */
    /* height: 200px; */
  }

  .text-wrapper .bottom > div {
    width: 49%;
  }
  
  .text-wrapper :deep(.ant-input-affix-wrapper) {
    height: 100%;
  }

  .text-wrapper :deep(.ant-input-affix-wrapper textarea.ant-input) {
    /* resize: both; */
  }

</style>
