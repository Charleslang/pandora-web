<template>
  <!-- 不能包含根元素, 否则在菜单收起或展开时无法隐藏文字，导致出现 ... -->
  <!-- <div v-if="menuList && menuList.length" id="app-menu"> -->
    <template v-for="(item, index) in menuList" :key="index">
      <a-sub-menu :key="item.path" v-if="item.children && item.children.length">
        <template #icon>
          <!-- <TeamOutlined/> -->
          <component :is="item.meta?.icon"></component>
          <!-- {{ item.meta?.icon }} -->
        </template>
        <!-- <template #title>
          {{ item.meta?.title }}
        </template> -->
        <span>{{ item.meta?.title }}</span>
        <AppMenu :menu-list="item.children"/>
      </a-sub-menu>
      <!-- :key 中的 item.path 后面要有空格，不然会被 vue 解析为虚拟 DOM 的 key -->
      <a-menu-item :key="item.path " v-else>
        <template #icon>
          <!-- {{ item.meta?.icon }} -->
          <!-- <TeamOutlined/> -->
          <component :is="item.meta?.icon"></component>
        </template>
        <span>{{ item.meta?.title }}</span>
      </a-menu-item>
    </template>
  <!-- </div> -->
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

</style>
