<template>
  <div class="menu-wrapper">
    <div class="logo">Pandora</div>
    <a-menu 
      @click="handleMenuClick"
      :theme="theme" 
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      mode="inline">

      <AppMenu :menu-list="dynamicRoute"/>

    </a-menu>
  </div>
</template>

<script setup lang="ts">

  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    EllipsisOutlined,
  } from '@ant-design/icons-vue'

  import { onMounted, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router'
  import AppMenu from './AppMenu.vue'
  import { dynamicRoute } from '@/settings'
  
  defineProps(['theme'])
  
  const selectedKeys = ref<string[]>(['/'])
  const openKeys = ref<string[]>([])

  const router = useRouter()
  const route = useRoute()

  // fix 刷新页面后, 菜单的选中状态和路由不一致
  onMounted(() => {
    const fullRoutePath = route.path
    selectedKeys.value = [fullRoutePath === '/' ? fullRoutePath : fullRoutePath.substring(fullRoutePath.lastIndexOf('/') + 1)]
    if (!fullRoutePath || fullRoutePath === '' || fullRoutePath === '/') {
      openKeys.value = []
    } else {
      openKeys.value = getParentPath(fullRoutePath)
    }
  })

  function getParentPath(fullRoutePath: string): string[] {
    if (!fullRoutePath || fullRoutePath === '' || fullRoutePath === '/') {
      return []
    }
    if (fullRoutePath.startsWith('/')) {
      fullRoutePath = fullRoutePath.substring(1)
    }
    fullRoutePath = fullRoutePath.substring(0, fullRoutePath.lastIndexOf('/'))
    return fullRoutePath.split('/')
  }

  function handleMenuClick({ key, keyPath }): undefined {
    const route = keyPath.length == 1 ? keyPath[0] : '/' + keyPath.join('/')
    if (route !== route.path) {
      selectedKeys.value = [key]
      router.push(route)
    }
    return undefined
  }

</script>

<style scoped>
  .menu-wrapper {
    overflow: auto; 
    height: 100vh;
  }
  .logo {
    text-align: center;
    padding: 10px 0;
    font-size: 20px;
    color: #1D2129;
  }
  /* #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  } */
</style>
