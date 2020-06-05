class Parent {
  constructor(x, y) {
    // 给实例设置私有属性
    this.x = x
    this.y = y
  }

  // 相当于在Parent.prototype.render
  render() {}

  // 把Parent当做一个普通对象，设置的私有属性和方法，与实例没有关系
  static ajax() {}
  // static BB = 10; 不能在此处设置属性，会报错
}

/**
 * ES6创建类的大括号中
 * - 只能写方法（不能是箭头函数）
 * - 不能设置属性，如需设置属性需如下面所示设置
 */
Parent.prototype.AA = 11 // 设置公共属性
Parent.BB = 44 // 设置私有属性

let p = new Parent(22, 33)

console.log('--->', p.x) // 22
console.log('--->', p.AA) // 11
console.log('--->', p.BB) // undefined

class Children extends Parent {
  constructor() {
    /**
     * ES6中的extends继承，一旦使用了constructor，第一行必须设置super执行：相当于React.Component.call(this),
     * 把父类私有属性继承过来
     */
    super(10, 20) // Parent.constructor.call(this, 10, 20)
  }
}

console.log('===>Children-x', new Children().x) // 10
console.log('===>Children-AA', new Children().AA) // 11
console.log('===>Children-BB', new Children().BB) // undefined

/**
 * 子类只能继承:
 * - 父类原型上的属性和方法
 * - 父类实例私有的属性和方法
 *
 * 不能继承：
 * - 父类作为普通对象设置的私有属性和方法
 */
// console.log('===>Children-BB', new Children().ajax()) // TypeError: (intermediate value).ajax is not a function
