<template>
  <section class="app-main">
    <!-- transition 里面的组件需要有根节点, 否则控制台会有警告 Component inside <Transition> renders non-element root node that cannot be animated -->
    <!-- 所以 Home.vue、Profile.vue 等要有根节点 -->
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
  
</style>
