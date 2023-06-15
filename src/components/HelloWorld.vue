
<template>
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
};
</script> 
<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<style scoped lang="less">
.HelloWorld {
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
