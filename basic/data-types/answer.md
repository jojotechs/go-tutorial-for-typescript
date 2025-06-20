# 数据类型 - 答案解析

## Go 语言实现

```go
package main

import "fmt"

// 结构体定义（类似 TypeScript 接口）
type Person struct {
	Name  string
	Age   int
	Email string // Go 中没有可选字段，使用空字符串表示未设置
}

// 枚举类型（Go 中使用 iota 或常量）
type Status string

const (
	StatusPending  Status = "pending"
	StatusApproved Status = "approved"
	StatusRejected Status = "rejected"
)

func main() {
	// 基本数据类型
	var message string = "Hello, World!"
	var count int = 42
	var price float64 = 19.99
	var isCompleted bool = false

	// 数组和切片
	numbers := []int{1, 2, 3, 4, 5}                    // 切片
	fruits := []string{"apple", "banana", "orange"}    // 切片
	mixed := []interface{}{"test", 123, "hello", 456}  // 空接口切片

	// 结构体实例
	user := Person{
		Name:  "John Doe",
		Age:   28,
		Email: "john@example.com",
	}

	// 数组（固定长度）
	var coordinate [2]int = [2]int{10, 20}
	
	// 多个变量（类似元组）
	userName, userAge, userActive := "Alice", 25, true

	// 枚举使用
	currentStatus := StatusPending

	// 接口类型（类似联合类型）
	var userId interface{} = "user123"
	var productId interface{} = 456

	// 函数调用
	area := calculateArea(5, 10)

	// 指针（类似 null）
	var optionalValue *string = nil
	validValue := "test"
	optionalValue = &validValue

	// 输出示例
	fmt.Printf("消息: %s\n", message)
	fmt.Printf("数量: %d, 价格: $%.2f\n", count, price)
	fmt.Printf("数组: %v\n", numbers)
	fmt.Printf("用户: %s, 年龄: %d\n", user.Name, user.Age)
	fmt.Printf("坐标: (%d, %d)\n", coordinate[0], coordinate[1])
	fmt.Printf("用户信息: %s, %d, %t\n", userName, userAge, userActive)
	fmt.Printf("状态: %s\n", currentStatus)
	fmt.Printf("面积: %d\n", area)
	
	if optionalValue != nil {
		fmt.Printf("可选值: %s\n", *optionalValue)
	}
}

func calculateArea(width, height int) int {
	return width * height
}
```

## 关键差异对比

| 特性 | TypeScript | Go |
|-----|-----------|-----|
| 基本类型 | `string, number, boolean` | `string, int, float64, bool` |
| 数组 | `number[]` | `[]int` (切片) 或 `[5]int` (数组) |
| 对象 | `interface Person {}` | `type Person struct {}` |
| 可选属性 | `email?: string` | 使用指针 `*string` 或空值 |
| 枚举 | `enum Status {}` | `type Status string` + 常量 |
| 联合类型 | `string \| number` | `interface{}` 或类型断言 |
| null/undefined | `null, undefined` | `nil` (仅指针、接口、切片等) |

## 学习要点

1. **Go 的类型系统**：
   - 静态类型，编译时检查
   - 结构化类型（struct）而非基于类的继承
   - 接口是隐式实现的

2. **数组 vs 切片**：
   - 数组：`[5]int` 固定长度
   - 切片：`[]int` 动态长度，更常用

3. **零值**：
   - 每种类型都有零值
   - `string`: ""，`int`: 0，`bool`: false，指针: `nil`

4. **指针概念**：
   - Go 有指针但无指针运算
   - 用于表示可空值和传递引用

5. **接口类型**：
   - `interface{}` 可以存储任何类型
   - 类似 TypeScript 的 `any` 但类型安全 