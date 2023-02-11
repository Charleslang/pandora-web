<template>
  <div v-if="menuList && menuList.length" id="app-menu">
    <template v-for="(item, index) in menuList" :key="index">
      <a-sub-menu :key="item.path" v-if="item.children && item.children.length">
        <template #icon>
          <!-- <TeamOutlined/> -->
          <component :is="item.meta?.icon"></component>
          <!-- {{ item.meta?.icon }} -->
        </template>
        <template #title>
          {{ item.meta?.title }}
        </template>
        <AppMenu :menu-list="item.children"/>
      </a-sub-menu>
      <!-- :key 中的 item.path 后面要有空格，不然会被 vue 解析为虚拟 DOM 的 key -->
      <a-menu-item :key="item.path " v-else>
        <template #icon>
          <!-- {{ item.meta?.icon }} -->
          <!-- <TeamOutlined/> -->
          <component :is="item.meta?.icon"></component>
        </template>
        {{ item.meta?.title }}
      </a-menu-item>
    </template>
  </div>
</template>

<script setup lang="ts" name="AppMenu">
  import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    EllipsisOutlined,
    HomeOutlined,
    KeyOutlined,
    LinkOutlined
  } from '@ant-design/icons-vue'

  import type { RouteRecordRaw } from 'vue-router'

  defineProps({
    menuList: Array<RouteRecordRaw>
  })
</script>

<style scoped>

  #app-menu {
    padding: 0 20px;
  }

  #app-menu :deep(.ant-menu-submenu:hover) {
    color: #165DFF;
    background-color: #f2f3f5;
  }

  #app-menu :deep(.ant-menu-item:hover) {
    color: #165DFF;
    background-color: #f2f3f5;
    /* pointer-events: none; */
  }

  #app-menu :deep(.ant-menu-item),
  #app-menu :deep(.ant-menu-submenu-title) {
    padding: 0 16px !important;
  }

  #app-menu :deep(.ant-menu-item-selected) {
    color: #165DFF;
    background-color: #f2f3f5;
  }

</style>
