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