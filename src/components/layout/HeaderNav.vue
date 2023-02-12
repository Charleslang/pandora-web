<template>
  <div class="header-wrapper">
    <div class="left-wrapper">
      <span @click="toggleMenu" class="icon-wrapper">
        <MenuFoldOutlined v-if="!collapsed"/>
        <MenuUnfoldOutlined v-else/>
      </span>
    </div>
    <div class="right-wrapper">
      <a-tooltip placement="bottom">
        <template #title>
          <span>{{ fullScreenMsg }}</span>
        </template>
        <span class="icon-wrapper" @click="toggleScreen">
          <FullscreenOutlined v-if="!fullScreen"/>
          <FullscreenExitOutlined v-else/>
        </span>
      </a-tooltip>
      <span class="icon-wrapper">
        <a href="http://baidu.com" target="_blank"><GithubOutlined/></a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import screenfull from 'screenfull'

  import { 
    MenuFoldOutlined, 
    MenuUnfoldOutlined, 
    FullscreenOutlined,
    FullscreenExitOutlined,
    GithubOutlined
  } from '@ant-design/icons-vue'

  import { message } from 'ant-design-vue'
  import { ref } from 'vue'
  
  const collapsed = ref<Boolean>(false)
  const fullScreen = ref<Boolean>(false)
  const fullScreenMsg = ref<String>('点击切换全屏模式')
  // defineEmits 可以不用显示导入
  const emit = defineEmits(['collapseMenu'])

  function toggleMenu() {
    collapsed.value = !collapsed.value
    emit('collapseMenu', collapsed.value)
  }

  function toggleScreen() {
    if (!screenfull.isEnabled) {
      message.error('当前浏览器暂时不支持全屏')
      return
    }
    fullScreen.value = !fullScreen.value
    screenfull.toggle()
    screenfull.onchange(e => {
      if (!screenfull.isFullscreen) {
        fullScreen.value = false
        fullScreenMsg.value = '点击切换全屏模式'
      } else {
        fullScreenMsg.value = '点击退出全屏模式'
      }
    })
  }
  
</script>

<style scoped>
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    height: 100%;
  }

  .right-wrapper {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .header-wrapper .icon-wrapper {
    cursor: pointer;
    font-size: 18px;
  }

  a {
    color: rgb(78, 89, 105);
  }
  .right-wrapper .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    border: 1px solid rgb(242,243,245);
    border-radius: 50%;
    color: rgb(78, 89, 105);
    margin-left: 12px;
  }
</style>
