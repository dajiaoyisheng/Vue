//find 找到的那一项 找到不继续找
// 配置npm环境 setting->node
// 配置es6语法
let arr = [{name: "hello"}, {name: "word"}, {}];
// 参数 第一个 回调函数  第二个改变this指向 没有return （没有终止条件）-> 循环完
arr.forEach(function (item, index) {
    // this window/ （回调函数）
}, arr);
let username = 'hello';
arr.find(function (item, index) {
    //如果在这个回调函数返回true 会将这一项返回
    //return false;//undefined
    return username === item.name;
}, arr);
// includes 返回的是boolean类型
[2,454,3,4,45,2].includes(4);
//some 返回的是boolean类型
//声明式=> vue 声明式 只关心底层逻辑 不管怎么实现的
// map映射 可以将一个数组变成另一种方式显示 返回新数组 可以做修改
// filter 过滤 如果函数中返回true则把这一项放到新数组中 要 ===   删除（！==）
//　可以返回叠加后的结果
[[],[]].reduce((pre,next)=>[...prev,...next]);//展开运算符





