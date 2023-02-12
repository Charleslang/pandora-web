<template>
  <!-- v-bind="$attrs" 是透传 Attribute，参考 https://cn.vuejs.org/guide/components/attrs.html -->
  <a-button
    v-bind="$attrs"
    :type="nativeType"
    :class="[buttonClass, plainClass, 'app-btn']"
  >
    <!-- 继承 ant-design 按钮自带的 slot, 见 https://www.jianshu.com/p/c3e0390ddff1 -->
    <!-- #[name] 是表示插槽名称是动态的, 见 https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names -->
    <template v-for="(index, name) in $slots" #[name]>
      <slot :name="name"/>
    </template>
    <!-- slot 用于显示 button 的文字, 例如 <AppButton>确认</AppButton> -->
    <!-- <slot></slot> -->
  </a-button>
</template>

<script setup lang="ts" name="AppButton">
  // 参考 https://www.jianshu.com/p/0b2fde46c761
  import { defineComponent, ref, watch, onMounted, useAttrs } from 'vue'

  import type { ButtonType } from 'ant-design-vue/lib/button'

  type AppButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | undefined

  interface Props {
    type?: ButtonType,
    buttonType?: AppButtonType,
    plain?: boolean
  }

  const props = defineProps<Props>()

  const buttonClass = ref<any>(props.buttonType)
  const nativeType= ref(props.type)
  const plainClass = ref(props.plain ? 'app-btn-plain' : '')

  // immediate 见 https://cn.vuejs.org/guide/essentials/watchers.html#eager-watchers
  watch(() => props.buttonType, (v) => {
    switch (v) {
      case 'primary':
        buttonClass.value = 'app-btn-primary'
        break
      case 'success':
        buttonClass.value = 'app-btn-success'
        break
      case 'warning':
        buttonClass.value = 'app-btn-warning'
        break
      case 'danger':
        buttonClass.value = 'app-btn-danger'
        break
      case 'info':
        buttonClass.value = 'app-btn-info'
        break
      default:
        buttonClass.value = ''
        break
    }
  }, { immediate: true })

  watch(() => props.type, v => {
    if (!v) {
      nativeType.value = 'default'
    }
  }, { immediate: true })

  watch(() => props, () => {}, { immediate: true })
</script>

<style scoped lang="less">

  // 使用 antd 中定义的变量
  // https://github.com/vueComponent/ant-design-vue/blob/main/components/style/themes/default.less
  @import 'ant-design-vue/dist/antd.less';
  @import '@/assets/less/app.less';

  // type='primary'
  .app-btn-primary {
    color: @btn-primary-color;
    background-color: @primary-color;
    border-color: @primary-color;
  }
  .app-btn-primary:hover,
  .app-btn-primary:focus {
    color: @btn-primary-color;
    background-color: @primary-color-hover;
    border-color: @primary-color-hover;
  }
  .app-btn-primary:active {
    color: @btn-primary-color;
    background-color: @primary-color-active;
    border-color: @primary-color-active;
  }
  .app-btn-primary.app-btn-plain,
  .ant-btn.ant-btn-primary.app-btn-plain {
    color: @primary-color;
    background-color: @app-color-primary-light-1; // #ecf5ff;
    border-color: @app-color-primary-light-5;
  }
  .app-btn-primary.app-btn-plain:hover,
  .ant-btn.ant-btn-primary.app-btn-plain:hover {
    color: @btn-primary-color;
    background-color: @primary-color;
    border-color: @primary-color;
  }

  // type='success'
  .app-btn-success {
    color: @btn-primary-color;
    background-color: @success-color;
    border-color: @success-color;
  }
  .app-btn-success:hover,
  .app-btn-success:focus {
    color: @btn-primary-color;
    background-color: @success-color-hover;
    border-color: @success-color-hover;
  }
  .app-btn-warning:active {
    color: @btn-primary-color;
    background-color: @warning-color-active;
    border-color: @warning-color-active;
  }
  .app-btn-success.app-btn-plain {
    color: @success-color;
    background-color: @app-color-success-light-1; // #f0f9eb;
    border-color: @app-color-success-light-5;
  }
  .app-btn-success.app-btn-plain:hover {
    color: @btn-primary-color;
    background-color: @success-color;
    border-color: @success-color;
  }

  // type='warning'
  .app-btn-warning {
    color: @btn-primary-color;
    background-color: @warning-color;
    border-color: @warning-color;
  }
  .app-btn-warning:hover,
  .app-btn-warning:focus {
    color: @btn-primary-color;
    background-color: @warning-color-hover;
    border-color: @warning-color-hover;
  }
  .app-btn-warning:active {
    color: @btn-primary-color;
    background-color: @warning-color-active;
    border-color: @warning-color-active;
  }
  .app-btn-warning.app-btn-plain {
    color: @warning-color;
    background-color: @app-color-warning-light-1; // #fdf6ec
    border-color: @app-color-warning-light-5;
  }
  .app-btn-warning.app-btn-plain:hover {
    color: @btn-primary-color;
    background-color: @warning-color;
    border-color: @warning-color;
  }

  // type='danger'
  .app-btn-danger {
    color: @btn-primary-color;
    background-color: @btn-danger-bg;
    border-color: @btn-danger-border;
  }
  .app-btn-danger:hover,
  .app-btn-danger:focus {
    color: @btn-primary-color;
    background-color: @error-color-hover;
    border-color: @error-color-hover;
  }
  .app-btn-danger:active {
    color: @btn-primary-color;
    background-color: @error-color-active;
    border-color: @error-color-active;
  }
  .app-btn-danger.app-btn-plain {
    color: @error-color;
    background-color: @app-color-danger-light-1; // todo #fef0f0
    border-color: @app-color-danger-light-4;
  }
  .app-btn-danger.app-btn-plain:hover {
    color: @btn-primary-color;
    background-color: @btn-danger-bg;
    border-color: @btn-danger-border;
  }
  .app-btn.app-btn-plain {
    transition-duration: .2s;
  }

  .app-btn[disabled], 
  .app-btn[disabled]:hover, 
  .app-btn[disabled]:focus, 
  .app-btn[disabled]:active {
    color: @btn-disable-color;
    background: @disabled-bg;
    border-color: @btn-disable-border;
    text-shadow: none;
    box-shadow: none;
  }
</style>
