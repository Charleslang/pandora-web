<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider 
      :collapsible="false"
      :collapsed="collapsed"
      :theme="theme"
      :width="220"
      :class="'app-layout-sider'">
      <SideBar :theme="theme"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <HeaderNav @changeMenuFold="handleChangeMenuFold"/>
      </a-layout-header>
      <a-layout-content style="padding: 1.2rem 1.2rem 0.75rem">
        <AppMain/>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
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
  
  function handleChangeMenuFold(menuFold: boolean) {
    collapsed.value = !menuFold
  }

</script>

<style scoped>

</style>
