// TypeScript 变量和常量示例
// 变量声明
let userName: string = "Alice";
let age: number = 25;
let isActive: boolean = true;

// 常量声明
const PI: number = 3.14159;
const APP_NAME: string = "My App";

// 可变变量
userName = "Bob";
age = 30;

// 输出结果
console.log(`用户名: ${userName}, 年龄: ${age}, 活跃状态: ${isActive}`);
console.log(`常量 PI: ${PI}, 应用名称: ${APP_NAME}`);

// 不同作用域的变量
function demonstrateScope() {
    let localVar = "局部变量";
    const LOCAL_CONSTANT = "局部常量";
    
    console.log(`函数内部: ${localVar}, ${LOCAL_CONSTANT}`);
}

demonstrateScope();

// 变量重新赋值
let counter = 0;
counter = counter + 1;
counter += 5;
console.log(`计数器: ${counter}`); 