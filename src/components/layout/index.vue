<template>
  <a-layout style="min-height: 100vh">
    <!-- 使用 trigger="null" 去掉 a-layout-sider 下方的 toggle -->
    <a-layout-sider 
      collapsible
      :collapsed="collapsed"
      :trigger="null"
      :theme="theme"
      :width="220">
      <SideBar :theme="theme" :collapsed="collapsed"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <HeaderNav @collapseMenu="handleMenuCollapsed"/>
      </a-layout-header>
      <a-layout-content style="padding: 1.2rem 1.2rem 0.75rem">
        <AppMain/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Pandora © 2023 - present Created by Junfeng Dai
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import AppMain from './AppMain.vue'
  import SideBar from './SideBar.vue'
  import HeaderNav from './HeaderNav.vue'
  import { ref } from 'vue'

  const collapsed = ref<boolean>(false)
  const theme = ref<"dark" | "light" | undefined>('light')
  
  function handleMenuCollapsed(menuFold: boolean) {
    collapsed.value = menuFold
  }

</script>

<style scoped>

</style>
