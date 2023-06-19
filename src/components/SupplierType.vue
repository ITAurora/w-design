<!-- 搜索栏  -->
<template>
    <div class='SupplierType'>
        <div class="SupplierBox">
            <template v-for="(item, index) in list" :key="index+'switchBox'">
                <div @click="change($event, item, index)" class="SearchBoxOptions"
                    :class="{ 'SearchBoxOptionsChance': activeValue == item.value }">
                    {{ item.label }}</div>
            </template>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { reactive, shallowReactive, watch, ref, onBeforeMount, onMounted, nextTick, defineProps, defineEmits } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router';
import { ElMessage, useFormItemInputId } from 'element-plus';
import kaloneUtils from '@/utils/kaloneUtils';
const route = useRoute();
const router = useRouter();
const props = defineProps({
    activeValue: {
        type: [String, Number],
        default() { return '' }
    },
    list: {
        type: Array<any>,
        default() { return [] }
    }
})
const emits = defineEmits(['update:activeValue', 'tabsChange',])
const change = (event: any, item: any, index: any) => {
    // console.log(event ,item, index);
    emits('update:activeValue', item.value)
    emits('tabsChange', event, item, index)
}
</script>
<style scoped lang='less'>
.SupplierType {
    width: 1190px;

    .SupplierBox {
        display: flex;
        justify-content: left;
        align-items: center;
        border: 0.1px solid gainsboro;

        .SearchBoxOptions {
            padding: 10px;
            font-size: 10px;
            cursor: pointer;
            text-align: center;
            line-height: 30px;
            border-right: 0.1px solid gainsboro;
        }

        .SearchBoxOptionsChance {
            background: #f6566f;
            color: #ffffff;
        }
    }

}
</style>