/** 
 * Call 函数
*/


Function.prototype._call = function () {
  let [toThis, ...arges] = [...arguments];

  if (!toThis) {
    // 如果 onThis 为 null 或者 undefined
    toThis = typeof window === 'undefined' ? global : window;
  }

  // this的指向当前函数  
  //（理解下面这两步很重要，核心）
  toThis.fun = this;
  const result = toThis.fun(arges);


  // toThis 没有func 属性，所以删除
  delete toThis.fun;
  return result;
}

