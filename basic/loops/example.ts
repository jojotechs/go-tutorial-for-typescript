// TypeScript 循环语句示例

// for 循环
console.log("=== 基本 for 循环 ===");
for (let i = 0; i < 5; i++) {
    console.log(`计数: ${i}`);
}

// for...of 循环（数组）
console.log("\n=== for...of 循环（数组）===");
const fruits: string[] = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(`水果: ${fruit}`);
}

// for...of 循环（带索引）
console.log("\n=== for...of 循环（带索引）===");
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

// for...in 循环（对象）
console.log("\n=== for...in 循环（对象）===");
const person = {
    name: "Alice",
    age: 25,
    city: "Beijing"
};

for (const key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
}

// while 循环
console.log("\n=== while 循环 ===");
let count = 0;
while (count < 3) {
    console.log(`while 计数: ${count}`);
    count++;
}

// do...while 循环
console.log("\n=== do...while 循环 ===");
let num = 0;
do {
    console.log(`do-while 计数: ${num}`);
    num++;
} while (num < 3);

// 数组方法循环
console.log("\n=== forEach 循环 ===");
const numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`索引 ${index}: ${num}`);
});

// map 方法（转换数组）
console.log("\n=== map 方法 ===");
const doubled = numbers.map(num => num * 2);
console.log(`原数组: ${numbers}`);
console.log(`翻倍后: ${doubled}`);

// filter 方法（过滤数组）
console.log("\n=== filter 方法 ===");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`偶数: ${evenNumbers}`);

// reduce 方法（累积操作）
console.log("\n=== reduce 方法 ===");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(`数组求和: ${sum}`);

// break 和 continue
console.log("\n=== break 和 continue ===");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // 跳过当前迭代
    }
    if (i === 7) {
        break; // 退出循环
    }
    console.log(`循环值: ${i}`);
}

// 嵌套循环
console.log("\n=== 嵌套循环 ===");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`外层: ${i}, 内层: ${j}`);
    }
}

// 循环中的标签（label）
console.log("\n=== 带标签的循环 ===");
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outer; // 跳出外层循环
        }
        console.log(`标签循环 - i: ${i}, j: ${j}`);
    }
}

// 遍历 Map
console.log("\n=== 遍历 Map ===");
const userMap = new Map([
    ["alice", 25],
    ["bob", 30],
    ["charlie", 35]
]);

for (const [name, age] of userMap) {
    console.log(`${name}: ${age} 岁`);
}

// 遍历 Set
console.log("\n=== 遍历 Set ===");
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 4, 5]);
for (const num of uniqueNumbers) {
    console.log(`唯一数字: ${num}`);
}

// 无限循环（需要小心使用）
console.log("\n=== 模拟无限循环 ===");
let counter = 0;
while (true) {
    if (counter >= 3) {
        console.log("达到限制，退出无限循环");
        break;
    }
    console.log(`无限循环计数: ${counter}`);
    counter++;
}

// 异步循环
console.log("\n=== 异步循环 ===");
async function asyncLoop() {
    const urls = ["url1", "url2", "url3"];
    
    // 串行处理
    for (const url of urls) {
        const result = await mockFetch(url);
        console.log(`串行结果: ${result}`);
    }
    
    // 并行处理
    const promises = urls.map(url => mockFetch(url));
    const results = await Promise.all(promises);
    console.log(`并行结果: ${results.join(", ")}`);
}

async function mockFetch(url: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`来自 ${url} 的数据`), 100);
    });
}

// 执行异步循环
asyncLoop(); 