// TypeScript 条件语句示例

// 基本 if-else 语句
const age: number = 18;

if (age >= 18) {
    console.log("成年人");
} else {
    console.log("未成年人");
}

// if-else if-else 语句
const score: number = 85;

if (score >= 90) {
    console.log("优秀");
} else if (score >= 80) {
    console.log("良好");
} else if (score >= 70) {
    console.log("中等");
} else if (score >= 60) {
    console.log("及格");
} else {
    console.log("不及格");
}

// 逻辑运算符
const username: string = "admin";
const password: string = "123456";

if (username === "admin" && password === "123456") {
    console.log("登录成功");
} else {
    console.log("用户名或密码错误");
}

// 或运算符
const role: string = "user";

if (role === "admin" || role === "moderator") {
    console.log("有管理权限");
} else {
    console.log("普通用户");
}

// 非运算符
const isLoggedIn: boolean = false;

if (!isLoggedIn) {
    console.log("请先登录");
} else {
    console.log("欢迎使用");
}

// 三元运算符
const temperature: number = 25;
const weather: string = temperature > 20 ? "温暖" : "寒冷";
console.log(`天气：${weather}`);

// 复杂的三元运算符
const grade: string = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`等级：${grade}`);

// switch 语句
const day: number = 3;

switch (day) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    case 4:
        console.log("星期四");
        break;
    case 5:
        console.log("星期五");
        break;
    case 6:
    case 7:
        console.log("周末");
        break;
    default:
        console.log("无效的日期");
}

// switch 语句 - 字符串匹配
const fruit: string = "apple";

switch (fruit) {
    case "apple":
        console.log("苹果 - 红色");
        break;
    case "banana":
        console.log("香蕉 - 黄色");
        break;
    case "orange":
        console.log("橙子 - 橙色");
        break;
    default:
        console.log("未知水果");
}

// 条件短路
const user = { name: "Alice", isActive: true };

// 逻辑与短路
user.isActive && console.log(`用户 ${user.name} 是活跃的`);

// 逻辑或短路
const defaultName = user.name || "匿名用户";
console.log(`用户名：${defaultName}`);

// 空值合并运算符（ES2020）
const config = {
    timeout: null,
    retries: 0,
    debug: undefined
};

const timeout = config.timeout ?? 5000;
const retries = config.retries ?? 3;
const debug = config.debug ?? false;

console.log(`配置：timeout=${timeout}, retries=${retries}, debug=${debug}`);

// 可选链（ES2020）
const response = {
    data: {
        user: {
            profile: {
                name: "John"
            }
        }
    }
};

const userName = response?.data?.user?.profile?.name;
console.log(`用户名：${userName}`);

// 类型守卫
function isString(value: any): value is string {
    return typeof value === "string";
}

function processValue(value: string | number) {
    if (isString(value)) {
        // TypeScript 知道这里 value 是 string
        console.log(`字符串长度：${value.length}`);
    } else {
        // TypeScript 知道这里 value 是 number
        console.log(`数字平方：${value * value}`);
    }
}

processValue("hello");
processValue(42); 