<template>
  <div class="header-wrapper">
    <div class="left-wrapper">
      <span @click="toggleMenu" class="icon-wrapper">
        <MenuFoldOutlined v-if="!collapsed"/>
        <MenuUnfoldOutlined v-else/>
      </span>
    </div>
    <div class="right-wrapper">
      <span class="icon-wrapper" @click="toggleScreen">
        <FullscreenOutlined v-if="!fullScreen"/>
        <FullscreenExitOutlined v-else/>
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
    FullscreenExitOutlined
  } from '@ant-design/icons-vue'

  import { message } from 'ant-design-vue'
  import { ref } from 'vue'
  
  const collapsed = ref<Boolean>(false)
  const fullScreen = ref<Boolean>(false)
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
  .header-wrapper .icon-wrapper {
    font-size: 18px;
    cursor: pointer;
  }
</style>
