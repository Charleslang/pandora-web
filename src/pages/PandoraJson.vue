<template>
  <div>
    <div class="button-wrapper">
      <!-- 如果同时设置了 type 和 button-type, 则 type 无效 -->
      <AppButton type="primary" plain>格式校验</AppButton>
      <AppButton type="ghost">美化</AppButton>
      <AppButton type="text">美化</AppButton>
      <AppButton type="link">美化</AppButton>
      <AppButton button-type="success" @click="testClick" plain>压缩</AppButton>
      <AppButton @click="testClick" shape="circle" type="primary">
        <template #icon>
          <DownloadOutlined />
        </template>
      </AppButton>
      <AppButton button-type="success">转义</AppButton>
      <AppButton button-type="danger" @click="testClick" shape="round" plain>去除转义</AppButton>
      <AppButton >转 GET 参数</AppButton>
      <AppButton button-type="warning" plain>复制结果</AppButton>
      <AppButton type="primary" danger>清空</AppButton>
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
  import { DownloadOutlined } from '@ant-design/icons-vue';
  import AppButton from '@/components/AppButton.vue'

  function testClick() {
    console.log('test')
  }
</script>

<style scoped>
  .text-wrapper {
    margin-top: 22px;
  }
  .button-wrapper .ant-btn {
    margin-right: 8px;
  }
</style>
