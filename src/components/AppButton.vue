<template>
  <a-button
    v-bind="$attrs"
    type="primary"
    :class="buttonClass"
  >
    <!-- slot 用于显示 button 的文字, 例如 <AppButton>确认</AppButton> -->
    <slot></slot>
  </a-button>
</template>

<script>
  // 参考 https://www.jianshu.com/p/0b2fde46c761
  import { defineComponent, ref, watch, onMounted } from 'vue'
  export default defineComponent({
    name: 'AppButton',
    props: {
      buttonType: {
        type: String,
        require: false,
        default: () => 'primary'
      }
    },
    setup (props, ctx) {
      const buttonClass = ref(props.buttonType)
      onMounted(()=>console.log(ctx.attrs))
      watch(() => props.buttonType, (v) => {
        switch (v) {
          case 'success':
            buttonClass.value = 'app-button-success'
            break
          case 'warning':
            buttonClass.value = 'app-button-warning'
            break
          case 'error':
            buttonClass.value = 'app-button-error'
            break
          case 'info':
            buttonClass.value = 'app-button-info'
            break
        }
      }, { immediate: true })

      watch(() => props, () => {}, { immediate: true })

      return {
        buttonClass
      }
    }
  })
</script>

<style scoped lang="less">

  // 使用 antd 中定义的变量
  // https://github.com/vueComponent/ant-design-vue/blob/main/components/style/themes/default.less
  @import 'ant-design-vue/dist/antd.less';

  .app-button-success {
    color: #fff;
    background-color: @success-color;
    border-color: @success-color;
  }
  .app-button-success:hover {
    color: #fff;
    background-color: success-color-hover;
    border-color: success-color-hover;
  }
  .app-button-success[disabled], .app-button-success[disabled]:hover, .app-button-success[disabled]:focus, .app-button-success[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }
  .app-button-warning {
    color: #fff;
    background-color: #ff9900;
    border-color: #ff9900;
  }
  .app-button-warning:hover {
    color: #fff;
    background-color: #fcac35;
    border-color: #ff9900;
  }
  .app-button-warning[disabled], .app-button-warning[disabled]:hover, .app-button-warning[disabled]:focus, .app-button-warning[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  .app-button-error {
    color: #fff;
    background-color: #ff3300;
    border-color: #ff3300;
  }
  .app-button-error:hover {
    color: #fff;
    background-color: #fc653f;
    border-color: #ff3300;
  }
  .app-button-error[disabled], .app-button-error[disabled]:hover, .app-button-error[disabled]:focus, .app-button-error[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  .app-button-cyan {
    color: #fff;
    background-color: #04c1e1;
    border-color: #04c1e1;
  }
  .app-button-cyan:hover {
    color: #fff;
    background-color: #0ad5f8;
    border-color: #04c1e1;
  }
  .app-button-cyan[disabled], .app-button-cyan[disabled]:hover, .app-button-cyan[disabled]:focus, .app-button-cyan[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  .app-button-black {
    color: #fff;
    background-color: #131313;
    border-color: #131313;
  }
  .app-button-black:hover {
    color: #fff;
    background-color: #313131;
    border-color: #131313;
  }
  .app-button-black[disabled], .app-button-black[disabled]:hover, .app-button-black[disabled]:focus, .app-button-black[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  .app-button-purple {
    color: #fff;
    background-color: #B500FE;
    border-color: #B500FE;
  }
  .app-button-purple:hover {
    color: #fff;
    background-color: #c951fa;
    border-color: #B500FE;
  }
  .app-button-purple[disabled], .app-button-purple[disabled]:hover, .app-button-purple[disabled]:focus, .app-button-purple[disabled]:active {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }
</style>
