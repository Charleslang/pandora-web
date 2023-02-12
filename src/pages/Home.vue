<template>
  <a-layout>
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="3">
          <template #icon>
            <upload-outlined />
          </template>
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <div>
          <a-tooltip placement="bottom">
            <template #title>
              <span>{{ text }}</span>
            </template>
            <a-button>Bottom</a-button>
          </a-tooltip>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

  const collapsed = ref<boolean | undefined>(true)
  const text = ref('测试')
</script>

<style scoped>
  
</style>
