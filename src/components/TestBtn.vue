<template>
    <div class="TestBtn">
        <button>我是测试要发布的按钮组件</button>
    </div>
</template>
   
  <!-- 导出组件名 -->
<script>
export default {
    name: 'TestBtn'
}
</script> 
<script setup>

</script>
   
<style scoped lang="less">
.TestBtn {
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover {
        border-color: #646cff;
    }
}
</style>