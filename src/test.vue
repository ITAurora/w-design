<!-- test  -->
<template>
  <div class="test">
    <HelloWorld msg="Vite + Vue" />
    <TypeSearch
      :typeList="typeList"
      v-model:activeValue="activeValue"
      @changeClick="changeClick"
      v-model:searchValue="searchValue"
      @searchClick="searchClick"
    >
    </TypeSearch>
    <div style="width: 800px;">
      <SupplierType :typeList="typeList" v-model:activeValue="activeValue" @changeClick="changeClick"></SupplierType>
    </div>
   
  </div>
</template>
<script setup>
import {
  reactive,
  shallowReactive,
  watch,
  ref,
  onBeforeMount,
  onMounted,
  nextTick,
  defineProps,
  defineEmits,
} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TypeSearch from "./components/TypeSearch.vue";
import SupplierType from "./components/SupplierType.vue";
const typeList = [
  { name: "测试1", value: 0 },
  { name: "测试2", value: 1 },
  { name: "测试3", value: 2 }
];
const activeValue = ref(0);
const changeClick = (event, item, index) => {
  console.log(event, item, index);
};
const searchValue = ref("");
const searchClick = (event, value) => {
  console.log(event, value );
};

</script>
