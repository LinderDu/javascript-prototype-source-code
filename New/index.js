
/**
 *  New 函数
 * 
 *  new 核心逻辑分为4个步骤
 *  
 * 1.创建一个空对象
 * 2.原型链接
 * 3.属性方法绑定
 * 4.新创建的对象由 this 所引用，并且最后隐式的返回 this
 * 
 */



/** 
 * 
 * 源码实现
 * 
*/

function _New() {
  
  const target = {};  // 创建空对象

  const [fn, ...args] = [...arguments];

  target.__proto__ = fn.prototype;        //原型链接

  const result = fn.apply(target, args);    // 属性方法绑定  

  // 如果构造函数执行的结果是一个对象就返回这个对象
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }

  return target;

}