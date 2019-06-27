/** 
 * Bind 函数实现
*/

Function.prototype._bind = function () {
  const self = this;
  let [toThis, ...arges] = [...arguments];

  const fNOP = function(){};
  function fbind() {
    arges = [...arges, ...arguments];
    //this instanceof fbind === true时,说明返回的fbind被当做new的构造函数调用
    return self.apply(this instanceof fbind ? this : toThis, arges);
  }

  // 维护原型关系
  if(this.prototype){
    fNOP.prototype = this.prototype;
  }

  // 下行的代码使fbind.prototype是fNOP的实例,因此
    // 返回的fbind若作为new的构造函数,new生成的新对象作为this传入fbind，新对象的__proto__就是fNOP的实例
  fbind.prototype = new fNOP();

  return fbind;
}