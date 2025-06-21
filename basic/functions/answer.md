# 函数 - 答案解析

## Go 语言实现

```go
package main

import (
	"fmt"
	"time"
)

// 基本函数声明
func greet(name string) string {
	return fmt.Sprintf("Hello, %s!", name)
}

// 多个参数的函数
func add(a, b int) int {
	return a + b
}

// 简单表达式函数（Go 没有箭头函数，但可以赋值给变量）
var multiply = func(x, y int) int {
	return x * y
}

// 可选参数的替代方案：函数重载或结构体参数
func introduce(name string) string {
	return fmt.Sprintf("我是 %s", name)
}

func introduceWithAge(name string, age int) string {
	return fmt.Sprintf("我是 %s，今年 %d 岁", name, age)
}

// 默认参数的替代方案：函数重载
func createUser(name string) map[string]string {
	return map[string]string{"name": name, "role": "user"}
}

func createUserWithRole(name, role string) map[string]string {
	return map[string]string{"name": name, "role": role}
}

// 可变参数
func sum(numbers ...int) int {
	total := 0
	for _, num := range numbers {
		total += num
	}
	return total
}

// 多返回值
func getNameAndAge() (string, int) {
	return "Alice", 25
}

// 命名返回值
func divide(a, b int) (quotient, remainder int) {
	quotient = a / b
	remainder = a % b
	return // 自动返回命名的返回值
}

// 函数作为参数（高阶函数）
func processData(data []int, processor func(int) int) []int {
	result := make([]int, len(data))
	for i, item := range data {
		result[i] = processor(item)
	}
	return result
}

func double(x int) int {
	return x * 2
}

// 递归函数
func factorial(n int) int {
	if n <= 1 {
		return 1
	}
	return n * factorial(n-1)
}

// 模拟异步操作（Go 使用 goroutine）
func fetchData(url string) <-chan string {
	ch := make(chan string)
	go func() {
		// 模拟异步操作
		time.Sleep(1 * time.Second)
		ch <- fmt.Sprintf("数据来自 %s", url)
	}()
	return ch
}

func main() {
	// 函数调用示例
	fmt.Println(greet("Go"))
	fmt.Println(add(5, 3))
	fmt.Println(multiply(4, 6))
	fmt.Println(introduce("Bob"))
	fmt.Println(introduceWithAge("Alice", 30))
	fmt.Println(createUser("John"))
	fmt.Println(createUserWithRole("Jane", "admin"))
	fmt.Println(sum(1, 2, 3, 4, 5))

	// 多返回值
	name, age := getNameAndAge()
	fmt.Printf("姓名: %s, 年龄: %d\n", name, age)

	// 命名返回值
	q, r := divide(10, 3)
	fmt.Printf("10 ÷ 3 = %d 余 %d\n", q, r)

	// 高阶函数
	numbers := []int{1, 2, 3, 4, 5}
	fmt.Println(processData(numbers, double))

	fmt.Printf("5的阶乘: %d\n", factorial(5))

	// 异步操作
	result := <-fetchData("https://api.example.com")
	fmt.Println(result)
}
```

## 关键差异对比

| 特性 | TypeScript | Go |
|-----|-----------|-----|
| 函数声明 | `function name(params): type {}` | `func name(params) type {}` |
| 箭头函数 | `(x, y) => x + y` | 函数字面量 `func(x, y int) int { return x + y }` |
| 可选参数 | `name?: string` | 函数重载或结构体参数 |
| 默认参数 | `role = "user"` | 函数重载 |
| 可变参数 | `...numbers: number[]` | `numbers ...int` |
| 多返回值 | `[string, number]` | `(string, int)` |
| 异步 | `async/await` | `goroutine + channel` |

## 学习要点

1. **Go 函数特性**：
   - 支持多返回值（常用于错误处理）
   - 可变参数使用 `...type` 语法
   - 函数是一等公民，可以赋值给变量

2. **没有的特性**：
   - 无可选参数（使用函数重载替代）
   - 无默认参数（使用函数重载替代）
   - 无箭头函数（使用函数字面量）

3. **命名返回值**：
   - 可以为返回值命名
   - 裸 `return` 返回命名的返回值
   - 提高代码可读性

4. **并发模型**：
   - 使用 `goroutine` 替代 Promise
   - 使用 `channel` 进行通信
   - "不要通过共享内存来通信，而要通过通信来共享内存"

5. **错误处理**：
   - 通常返回 `(result, error)` 格式
   - 显式错误处理，无异常机制 

## TypeScript 可选参数 vs Go 替代方案

### 1. 简单可选参数

**TypeScript:**
```typescript
function introduce(name: string, age?: number): string {
    if (age !== undefined) {
        return `我是 ${name}，今年 ${age} 岁`;
    }
    return `我是 ${name}`;
}

// 调用
introduce("Bob");        // ✅ 只传必需参数
introduce("Alice", 30);  // ✅ 传可选参数
```

**Go 替代方案 - 函数重载:**
```go
func introduce(name string) string {
    return fmt.Sprintf("我是 %s", name)
}

func introduceWithAge(name string, age int) string {
    return fmt.Sprintf("我是 %s，今年 %d 岁", name, age)
}

// 调用
introduce("Bob")              // ✅ 基础版本
introduceWithAge("Alice", 30) // ✅ 带年龄版本
```

### 2. 多个可选参数

**TypeScript:**
```typescript
function buildProfile(name: string, age?: number, city?: string, job?: string): string {
    let profile = `姓名: ${name}`;
    if (age !== undefined) profile += `, 年龄: ${age}`;
    if (city !== undefined) profile += `, 城市: ${city}`;
    if (job !== undefined) profile += `, 职业: ${job}`;
    return profile;
}
```

**Go 替代方案 - 结构体参数:**
```go
type ProfileConfig struct {
    Name string  // 必需参数
    Age  *int    // 可选参数（指针）
    City *string // 可选参数（指针）
    Job  *string // 可选参数（指针）
}

func buildProfile(config ProfileConfig) string {
    profile := fmt.Sprintf("姓名: %s", config.Name)
    if config.Age != nil {
        profile += fmt.Sprintf(", 年龄: %d", *config.Age)
    }
    if config.City != nil {
        profile += fmt.Sprintf(", 城市: %s", *config.City)
    }
    if config.Job != nil {
        profile += fmt.Sprintf(", 职业: %s", *config.Job)
    }
    return profile
}
```

### 3. 函数式选项模式 (Options Pattern)

**TypeScript:**
```typescript
function sendMessage(
    message: string, 
    recipient: string, 
    priority?: 'low' | 'medium' | 'high', 
    timestamp?: Date
): void {
    console.log(`发送消息: "${message}" 给 ${recipient}`);
    if (priority) console.log(`优先级: ${priority}`);
    if (timestamp) console.log(`时间: ${timestamp.toISOString()}`);
}
```

**Go 替代方案 - 函数式选项:**
```go
type MessageOption func(*MessageConfig)

type MessageConfig struct {
    Priority  string
    Timestamp *time.Time
}

func WithPriority(priority string) MessageOption {
    return func(config *MessageConfig) {
        config.Priority = priority
    }
}

func WithTimestamp(timestamp time.Time) MessageOption {
    return func(config *MessageConfig) {
        config.Timestamp = &timestamp
    }
}

func sendMessage(message, recipient string, options ...MessageOption) {
    config := &MessageConfig{}
    for _, option := range options {
        option(config)
    }
    // ... 实现逻辑
}

// 调用方式
sendMessage("Hello", "用户A")
sendMessage("紧急通知", "管理员", WithPriority("high"))
sendMessage("会议提醒", "团队", WithPriority("medium"), WithTimestamp(time.Now()))
```

### 4. 复杂配置对象

**TypeScript:**
```typescript
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
    // ... 实现
}
```

**Go 替代方案 - 选项构建器:**
```go
type HttpRequestOptions struct {
    Method  string
    Headers map[string]string
    Timeout time.Duration
    Retries int
}

type HttpRequestOption func(*HttpRequestOptions)

func WithMethod(method string) HttpRequestOption {
    return func(opts *HttpRequestOptions) {
        opts.Method = method
    }
}

func WithHeaders(headers map[string]string) HttpRequestOption {
    return func(opts *HttpRequestOptions) {
        opts.Headers = headers
    }
}

func httpRequest(url string, options ...HttpRequestOption) chan string {
    config := &HttpRequestOptions{
        Method:  "GET",                    // 默认值
        Headers: make(map[string]string),  // 默认值
        Timeout: 5 * time.Second,          // 默认值
        Retries: 3,                        // 默认值
    }

    for _, option := range options {
        option(config)
    }
    // ... 实现
}
```

## 核心模式对比

| 模式 | TypeScript | Go | 适用场景 |
|------|------------|-----|----------|
| 简单可选参数 | `param?: type` | 函数重载 | 1-2个可选参数 |
| 多个可选参数 | 多个`?` | 结构体参数 | 3-5个可选参数 |
| 复杂配置 | 可选接口 | Options Pattern | 复杂配置对象 |
| 链式调用 | 方法链 | 函数式选项 | 构建器模式 |

## 最佳实践建议

### TypeScript -> Go 思维转换

1. **1-2个可选参数** → 使用函数重载
   ```go
   func process(data string) result
   func processWithOption(data string, option string) result
   ```

2. **3-5个可选参数** → 使用结构体参数
   ```go
   type Config struct {
       Required string
       Optional1 *string
       Optional2 *int
   }
   func process(config Config) result
   ```

3. **复杂配置对象** → 使用Options Pattern
   ```go
   type Option func(*Config)
   func WithSetting(value string) Option { ... }
   func process(required string, options ...Option) result
   ```

4. **库API设计** → 优先使用Options Pattern
   - 向后兼容性更好
   - 代码更易读
   - 类型安全

### 关键差异总结

| 特性 | TypeScript | Go |
|------|------------|-----|
| 可选参数语法 | `param?: type` | 无原生支持 |
| 默认参数 | `param = defaultValue` | 无原生支持 |
| 参数个数 | 可变（可选参数） | 固定（必须传递） |
| 类型检查 | 编译时 | 编译时 |
| 运行时开销 | 小 | 取决于实现方式 |
| 代码复杂度 | 低 | 中等 |
| 可读性 | 高 | 高（Options Pattern） |

### 学习重点

1. **Go没有可选参数** - 这是语言设计的选择，强调明确性
2. **多种替代方案** - 根据复杂度选择合适的模式
3. **Options Pattern** - Go社区的最佳实践，广泛使用
4. **类型安全** - 所有方案都保持编译时类型检查
5. **向后兼容** - Options Pattern支持未来添加新选项

记住：Go追求简洁和明确，虽然没有语法糖，但通过设计模式可以实现相同的功能！ 