// TypeScript 函数示例

// 基本函数声明
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// 函数表达式
const add = function(a: number, b: number): number {
    return a + b;
};

// 箭头函数
const multiply = (x: number, y: number): number => x * y;

// 可选参数
function introduce(name: string, age?: number): string {
    if (age !== undefined) {
        return `我是 ${name}，今年 ${age} 岁`;
    }
    return `我是 ${name}`;
}

// 默认参数
function createUser(name: string, role: string = "user"): object {
    return { name, role };
}

// 剩余参数
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 多返回值（使用元组）
function getNameAndAge(): [string, number] {
    return ["Alice", 25];
}

// 函数重载
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

// 高阶函数
function processData(data: number[], processor: (item: number) => number): number[] {
    return data.map(processor);
}

const double = (x: number) => x * 2;

// 递归函数
function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// 异步函数
async function fetchData(url: string): Promise<string> {
    // 模拟异步操作
    return new Promise((resolve) => {
        setTimeout(() => resolve(`数据来自 ${url}`), 1000);
    });
}

// 使用示例
console.log(greet("TypeScript"));
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(introduce("Bob"));
console.log(introduce("Alice", 30));
console.log(createUser("John"));
console.log(createUser("Jane", "admin"));
console.log(sum(1, 2, 3, 4, 5));

const [name, age] = getNameAndAge();
console.log(`姓名: ${name}, 年龄: ${age}`);

console.log(format("hello"));
console.log(format(3.14159));

const numbers = [1, 2, 3, 4, 5];
console.log(processData(numbers, double));

console.log(`5的阶乘: ${factorial(5)}`);

// 异步函数调用
fetchData("https://api.example.com").then(result => {
    console.log(result);
}); 