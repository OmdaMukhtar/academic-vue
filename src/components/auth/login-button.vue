<template>
  <button class="Button btn-sent" :disabled="loading"  type="submit">
      <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="20px" y="0px"
            viewBox="-400 -20 900 120" enable-background="new 0 0 100 100" xml:space="preserve" 
            v-if="loading" class="Button__Icon Button__Spinner" >
            <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
                <animateTransform 
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate"
                    dur="0.4s" 
                    from="0 50 50"
                    to="360 50 50" 
                    repeatCount="indefinite" />
            </path>
      </svg>
      <span v-if="!loading" class="Button__Content">
          <slot></slot>
      </span>
  </button>
</template>

<script>
export default {
  props: {
      loading: { type: Boolean }
  }
}
</script>

<style scoped>
    disabled{
        background: #ccc;
    }
</style>