<template>
  <div class="menu-wrapper">
    <div class="logo">Pandora123</div>

    <!-- :inline-collapsed="collapsed" -->
    <!-- 如果 menu 是放在 a-layout 中的，那么 menu 的展开或收起应该由 layout 控制，否则浏览器报错如下 -->
    <!-- `inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead. -->
    <a-menu 
      @click="handleMenuClick"
      mode="inline"
      :theme="theme" 
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      >

      <template v-if="dynamicRoute && dynamicRoute.length">
        <AppMenu :menu-list="dynamicRoute"/>
      </template>

    </a-menu>
  </div>
</template>

<script setup lang="ts">

  import { onMounted, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router'
  import AppMenu from './AppMenu.vue'
  import { dynamicRoute } from '@/settings'
  
  defineProps(['theme', 'collapsed'])
  
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
