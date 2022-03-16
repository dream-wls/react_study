// 箭头函数
// 普通函数在使用的时候确定this
const teacher = {
  name: "lubai",
  getName: function () {
    return `${this.name}`;
  },
};
console.log(teacher.getName()); // lubai

// 箭头函数是在定义的时候确定this
const teacher1 = {
  name: "lubai",
  getName: () => {
    return `${this.name}`;
  },
};
console.log(teacher1.getName()); // undefined

class Test {
  // 表示是内部的变量
  _name = "";
  constructor(name) {
    this.name = name;
  }
  static getFormatName() {
    return `${this._name}---`;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    console.log("这里进行了set name的值");
    this._name = val;
  }
  set name1(val) {
    console.log("set2");
  }
}
const instance = new Test("加油喵");
// instance.name = 'zsh'
console.log(Test.getFormatName(), instance.name);

// ⾯试题来⼀道. 编写render函数, 实现template render功能.
const year = "2021";
const month = "10";
const day = "01";
let template = "${year}-${month}-${day}";
let context = { year, month, day };
const str = render(template)({ year, month, day });

function render(template) {
  return ({ year, month, day }) => {
    return template.replace(/\${(.*?)}/g, (match, key) => context[key]);
  };
}
console.log("关于模版字符串的匹配：", render(template)({ year, month, day }));

// 要点
/**
 * 1. 首先高阶函数
 * 2. 字符串replace的使用，第一个参数是正则，第二个是处理函数
 */

// 解构
const [a, b, c] = [1, 2, 3];
console.log("解构：", a, b, c);

const [q, w] = [{ a: 1 }, { b: 2 }];
console.log("");

// 解构默认值
const { f1 = "f1", f2 = "f2" } = { f1: "current" };
console.log("解构：", f1, f2); // 没有则使用默认值
// 解构： current f2

/**
 * 解构原理
 * 针对可迭代对象的Iterator接⼝，通过遍历器按顺序获取对应的值进⾏赋值.
 * 
 * Iterator是⼀种接⼝，为各种不⼀样的数据解构提供统⼀的访问机制。任何数据解构只要有
    Iterator接⼝，就能通过遍历操作，依次按顺序处理数据结构内所有成员。ES6中的for of的语
    法相当于遍历器，会在遍历数据结构时，⾃动寻找Iterator接⼝。
 */

// 自己实现一个Iterator
function generateIterator(array) {
  let nextIndex = 0;
  // 使用递归
  return {
    next: () =>
      nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            value: undefined,
            done: true,
          },
  };
}
const iterator = generateIterator([1,2,3,4])
console.log(iterator.next());
console.log(iterator.next());

/**
 * 实现要点：
 * 1. 要有两个参数 value 和 done
 */

// 实现一个可以用for of 进行遍历的对象
/**
 * 1.iterator接口
 */
const obj = {
    count: 0,
    [Symbol.iterator]: () => {
        return {
            next: () => {
                obj.count ++;
                if (obj.count <= 10) {
                    return {
                        value: Object.count,
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}
for(let key of obj) {
    // console.log(obj[key].value);
    console.log(obj[key]);
}

// for in


// for of

// Object
//
