// TypeScript 引用类型示例
// 虽然 TypeScript 没有指针概念，但有引用类型
export {};

console.log("=== TypeScript 引用类型概念 ===");

// 基本类型（值类型）
let num1: number = 42;
let num2: number = num1; // 复制值
num2 = 100;
console.log(`num1: ${num1}, num2: ${num2}`); // num1: 42, num2: 100

// 对象类型（引用类型）
interface Person {
    name: string;
    age: number;
}

let person1: Person = { name: "Alice", age: 25 };
let person2: Person = person1; // 复制引用，指向同一个对象
person2.age = 30;
console.log(`person1.age: ${person1.age}, person2.age: ${person2.age}`); // 都是 30

// 数组也是引用类型
let arr1: number[] = [1, 2, 3];
let arr2: number[] = arr1; // 复制引用
arr2.push(4);
console.log(`arr1: [${arr1.join(", ")}], arr2: [${arr2.join(", ")}]`); // 都是 [1, 2, 3, 4]

// 函数参数传递
function modifyObject(obj: Person): void {
    obj.name = "Modified";
}

function modifyNumber(n: number): void {
    n = 999; // 这不会影响外部变量
}

let testPerson: Person = { name: "Bob", age: 20 };
let testNumber: number = 50;

console.log("\n=== 函数参数传递 ===");
console.log(`修改前 - testPerson: ${JSON.stringify(testPerson)}, testNumber: ${testNumber}`);

modifyObject(testPerson); // 传递引用
modifyNumber(testNumber); // 传递值

console.log(`修改后 - testPerson: ${JSON.stringify(testPerson)}, testNumber: ${testNumber}`);

// 可选属性和 null/undefined
interface OptionalPerson {
    name: string;
    email?: string; // 可选
    phone: string | null; // 可能为null
}

let user1: OptionalPerson = {
    name: "Charlie",
    phone: null
};

let user2: OptionalPerson = {
    name: "David", 
    email: "david@example.com",
    phone: "123-456-7890"
};

console.log("\n=== 可选属性处理 ===");
function printUser(user: OptionalPerson): void {
    console.log(`姓名: ${user.name}`);
    
    if (user.email !== undefined) {
        console.log(`邮箱: ${user.email}`);
    } else {
        console.log("邮箱: 未提供");
    }
    
    if (user.phone !== null) {
        console.log(`电话: ${user.phone}`);
    } else {
        console.log("电话: 未提供");
    }
    console.log("---");
}

printUser(user1);
printUser(user2); 