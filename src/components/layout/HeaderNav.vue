<template>
  <div class="header-wrapper">
    <div class="left-wrapper">
      <span @click="toggleMenu" class="icon-wrapper">
        <MenuFoldOutlined v-if="menuFold"/>
        <MenuUnfoldOutlined v-else/>
      </span>
    </div>
    <div class="right-wrapper">
      <span class="icon-wrapper">
        <FullscreenOutlined/>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { 
    MenuFoldOutlined, 
    MenuUnfoldOutlined, 
    FullscreenOutlined 
  } from '@ant-design/icons-vue'
  import { ref } from 'vue'
  
  const menuFold = ref<Boolean>(true)
  // defineEmits 可以不用显示导入
  const emit = defineEmits(['changeMenuFold'])

  function toggleMenu() {
    menuFold.value = !menuFold.value
    emit('changeMenuFold', menuFold.value)
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
