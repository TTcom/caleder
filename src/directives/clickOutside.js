
// const listener = function (e) {
//   return (el, bindings) => {
//     if (e.target === el || el.contains(e.target)) {
//       return;
//     }
//     bindings.value(); // close事件
//   };
// };

export default { // 指令是一个方法  指令有自己的生命周期
  // bind update

  clickOutside: {
    inserted(el, bindings) { // el真实的dom元素
	     console.log('el',el);
		 console.log('bindings',bindings);
	
      el.listener = function listener(e) {   //el监听函数
        if (e.target === el || el.contains(e.target)) {
          return;
        }
        bindings.value(); // 不满足条件时触发close事件
      };
      document.addEventListener('click', el.listener);
    },
    unbind(el) {      //组件销毁时删除监听函数
	  console.log("组件unbind")	
      document.removeEventListener('click', el.listener);
    },
  },
};
