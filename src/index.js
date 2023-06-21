//index.js
import HelloWorld from "./components/HelloWorld.vue";// 引入封装好的组件
import TypeSearch from "./components/TypeSearch.vue";
import SupplierType from "./components/SupplierType.vue";
export { HelloWorld, TypeSearch,SupplierType } //实现按需引入*


const components = [HelloWorld, TypeSearch,SupplierType];
const install = function (App, options) {
	components.forEach((component) => {
		App.component(component.name, component);
	});
};
export default { install } // 批量的引入*
