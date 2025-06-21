export {}
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

// ========== 可选参数训练区域 ==========

// 1. 简单可选参数
function introduce(name: string, age?: number): string {
    if (age !== undefined) {
        return `我是 ${name}，今年 ${age} 岁`;
    }
    return `我是 ${name}`;
}

// 2. 多个可选参数
function buildProfile(name: string, age?: number, city?: string, job?: string): string {
    let profile = `姓名: ${name}`;
    if (age !== undefined) profile += `, 年龄: ${age}`;
    if (city !== undefined) profile += `, 城市: ${city}`;
    if (job !== undefined) profile += `, 职业: ${job}`;
    return profile;
}

// 3. 混合必需和可选参数
function sendMessage(message: string, recipient: string, priority?: 'low' | 'medium' | 'high', timestamp?: Date): void {
    console.log(`发送消息: "${message}" 给 ${recipient}`);
    if (priority) console.log(`优先级: ${priority}`);
    if (timestamp) console.log(`时间: ${timestamp.toISOString()}`);
}

// 4. 可选参数 + 默认参数混合
function createAccount(username: string, email?: string, role: string = 'user', isActive: boolean = true): object {
    const account = { username, role, isActive };
    if (email) {
        (account as any).email = email;
    }
    return account;
}

// 5. 可选回调函数
function processAsync(data: string[], onComplete?: (result: string[]) => void, onError?: (error: string) => void): void {
    try {
        const result = data.map(item => item.toUpperCase());
        onComplete?.(result); // 可选链调用
    } catch (error) {
        onError?.('处理失败');
    }
}

// 6. 复杂对象的可选属性
interface HttpRequestOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: Record<string, string>;
    timeout?: number;
    retries?: number;
}

function httpRequest(url: string, options?: HttpRequestOptions): Promise<string> {
    const config = {
        method: options?.method || 'GET',
        headers: options?.headers || {},
        timeout: options?.timeout || 5000,
        retries: options?.retries || 3
    };
    
    console.log(`发送 ${config.method} 请求到 ${url}`);
    console.log(`配置:`, config);
    
    return Promise.resolve(`来自 ${url} 的响应`);
}

// 7. 可选参数的函数重载
function formatNumber(value: number): string;
function formatNumber(value: number, decimals?: number): string;
function formatNumber(value: number, decimals?: number, currency?: string): string;
function formatNumber(value: number, decimals: number = 2, currency?: string): string {
    let formatted = value.toFixed(decimals);
    if (currency) {
        formatted = `${currency} ${formatted}`;
    }
    return formatted;
}

// 8. 可选泛型参数
function createList<T>(items?: T[]): T[] {
    return items || [];
}

// ========== 原有内容保持不变 ==========

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

// ========== 可选参数使用示例 ==========
console.log('=== 可选参数训练示例 ===');

// 1. 简单可选参数测试
console.log(introduce("Bob"));                    // 只传必需参数
console.log(introduce("Alice", 30));              // 传可选参数

// 2. 多个可选参数测试
console.log(buildProfile("张三"));                 // 只传必需参数
console.log(buildProfile("李四", 25));             // 传一个可选参数
console.log(buildProfile("王五", 30, "北京"));      // 传两个可选参数
console.log(buildProfile("赵六", 28, "上海", "工程师")); // 传所有参数

// 3. 消息发送测试
sendMessage("Hello", "用户A");                     // 基础用法
sendMessage("紧急通知", "管理员", "high");           // 带优先级
sendMessage("会议提醒", "团队", "medium", new Date()); // 完整参数

// 4. 账户创建测试
console.log(createAccount("john123"));                           // 默认值
console.log(createAccount("jane456", "jane@example.com"));       // 带邮箱
console.log(createAccount("admin", "admin@example.com", "admin", false)); // 完整参数

// 5. 异步处理测试
processAsync(
    ["hello", "world"],
    (result) => console.log("处理完成:", result),
    (error) => console.log("错误:", error)
);

// 6. HTTP 请求测试
httpRequest("https://api.example.com/users");                    // 默认配置
httpRequest("https://api.example.com/data", {                    // 自定义配置
    method: "POST",
    headers: {"Content-Type": "application/json"},
    timeout: 10000
});

// 7. 数字格式化测试
console.log(formatNumber(123.456));              // 默认2位小数
console.log(formatNumber(123.456, 1));           // 1位小数
console.log(formatNumber(123.456, 2, "¥"));      // 带货币符号

// 8. 泛型列表测试
console.log(createList<string>());               // 空列表
console.log(createList<number>([1, 2, 3]));      // 有初始值的列表

// ========== 原有示例保持不变 ==========
console.log('\n=== 原有示例 ===');
console.log(greet("TypeScript"));
console.log(add(5, 3));
console.log(multiply(4, 6));
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