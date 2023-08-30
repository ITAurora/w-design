<!-- 带有头部类型的搜索框-->
<template>
  <div class="TypeSearch">
    <div class="SearchBox">
      <template v-for="(item, index) in typeList" :key="index + 'switchBox'">
        <div @click="change($event, item, index)" class="SearchBoxOptions"
          :class="{ SearchBoxOptionsChance: activeValue == item.value }">
          {{ item.name }}
        </div>
      </template>
    </div>
    <div class="SearchContent">
      <div class="Searchinfo">
        <div class="icon">logo</div>
        <input class="input" ref="input" type="text" id="searchContent" name="name" size="40" placeholder="请输入搜索内容"
          @click="inputClick" />
        <div class="icon">logo</div>
        <div class="iconOption" @click="search">搜索</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TypeSearch",
};
</script> 
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
const props = defineProps({
  typeList: {
    type: Array,
    default() {
      return [];
    },
  },
  activeValue: {
    type: [String, Number],
    default() {
      return "";
    },
  },

  searchValue: {
    type: String,
    default() {
      return "";
    },
  },
});
const emits = defineEmits([
  "update:activeValue",
  "changeClick",
  "update:searchValue",
  "searchClick",
]);
const input = ref("");
const inputClick = () => {
  // console.log('input被点击了')
};
const change = (event, item, index) => {
  emits("update:activeValue", item.value);
  emits("changeClick", event, item, index);
};
const search = (event) => {
  emits("update:searchValue", input.value.value);
  emits("searchClick", event, input.value.value);
};
onMounted(() => {
  input.value.value = props.searchValue;
});
</script>
<style scoped lang='less'>
.TypeSearch {
  width: 530px;

  .SearchBox {
    display: flex;
    justify-content: left;
    align-items: center;

    .SearchBoxOptions {
      cursor: pointer;
      text-align: center;
      height: 30px;
      line-height: 30px;
    }

    .SearchBoxOptionsChance {
      background: linear-gradient(135deg, #ff4d6d, #f29984);
      color: #ffffff;
    }
  }

  .SearchContent {
    .Searchinfo {
      width: 100%;
      border: 1px solid red;
      border-right: none;
      height: 50px;
      display: flex;
      justify-content: left;
      align-items: center;

      .input {
        border: none;
        outline: none;
      }

      .icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        line-height: 50px;
        text-align: center;
        font-size: 15px;
        color: gray;
      }

      .icon:hover {
        color: red;
      }

      .iconOption {
        flex: 1;
        background: linear-gradient(135deg, #ff4d6d, #f29984);
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: white;
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>