//index.js
import HelloWorld from "./components/HelloWorld.vue";
import TypeSearch from "./components/HelloWorld.vue";// 引入封装好的组件

export { HelloWorld, TypeSearch } //实现按需引入*


const components = [HelloWorld, TypeSearch];
const install = function (App, options) {
	components.forEach((component) => {
		App.component(component.name, component);
	});
};
export default { install } // 批量的引入*
