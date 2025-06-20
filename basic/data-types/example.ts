// TypeScript 数据类型示例
export {}; // 使文件成为模块，避免全局作用域冲突

// 基本数据类型
let message: string = "Hello, World!";
let count: number = 42;
let price: number = 19.99;
let isCompleted: boolean = false;

// 数组类型
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
let mixed: (string | number)[] = ["test", 123, "hello", 456];

// 对象类型 - 接口定义
interface Person {
    name: string;
    age: number;
    email?: string; // 可选属性
}

let user: Person = {
    name: "John Doe",
    age: 28,
    email: "john@example.com"
};

// 元组类型
let coordinate: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ["Alice", 25, true];

// 枚举类型
enum Status {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected"
}

let currentStatus: Status = Status.Pending;

// 联合类型
type ID = string | number;
let userId: ID = "user123";
let productId: ID = 456;

// 函数类型
function calculateArea(width: number, height: number): number {
    return width * height;
}

// 类型别名
type UserRole = "admin" | "user" | "guest";
let role: UserRole = "admin";

// null 和 undefined
let optionalValue: string | null = null;
let undefinedValue: undefined = undefined;

// 输出示例
console.log(`消息: ${message}`);
console.log(`数量: ${count}, 价格: $${price}`);
console.log(`数组: ${numbers.join(", ")}`);
console.log(`用户: ${user.name}, 年龄: ${user.age}`);
console.log(`坐标: (${coordinate[0]}, ${coordinate[1]})`);
console.log(`状态: ${currentStatus}`);
console.log(`面积: ${calculateArea(5, 10)}`); 