# 变量和常量 - 答案解析

## Go 语言实现

```go
package main

import "fmt"

func main() {
	// 变量声明 - 方式1：完整声明
	var userName string = "Alice"
	var age int = 25
	var isActive bool = true

	// 变量声明 - 方式2：类型推断
	var userName2 = "Alice"
	var age2 = 25
	var isActive2 = true

	// 变量声明 - 方式3：短变量声明（推荐）
	userName3 := "Alice"
	age3 := 25
	isActive3 := true

	// 常量声明
	const PI = 3.14159
	const APP_NAME = "My App"

	// 可变变量
	userName = "Bob"
	age = 30

	// 输出结果
	fmt.Printf("用户名: %s, 年龄: %d, 活跃状态: %t\n", userName, age, isActive)
	fmt.Printf("常量 PI: %f, 应用名称: %s\n", PI, APP_NAME)

	// 不同作用域的变量
	demonstrateScope()

	// 变量重新赋值
	counter := 0
	counter = counter + 1
	counter += 5
	fmt.Printf("计数器: %d\n", counter)
}

func demonstrateScope() {
	localVar := "局部变量"
	const LOCAL_CONSTANT = "局部常量"
	
	fmt.Printf("函数内部: %s, %s\n", localVar, LOCAL_CONSTANT)
}
```

## 关键差异对比

| 特性 | TypeScript | Go |
|-----|-----------|-----|
| 变量声明 | `let name: string = "value"` | `var name string = "value"` 或 `name := "value"` |
| 常量声明 | `const PI: number = 3.14` | `const PI = 3.14` |
| 类型推断 | 可选，但推荐显式类型 | 自动推断，`:=` 简化语法 |
| 字符串插值 | `\`Hello ${name}\`` | `fmt.Printf("Hello %s", name)` |

## 学习要点

1. **Go 的三种变量声明方式**：
   - `var name type = value` - 完整形式
   - `var name = value` - 类型推断
   - `name := value` - 短变量声明（仅函数内部）

2. **常量特点**：
   - Go 中常量在编译时确定
   - 不需要显式类型声明
   - 常量名通常大写

3. **零值概念**：
   - Go 中变量有默认零值
   - string: ""，int: 0，bool: false

4. **格式化输出**：
   - `%s` - 字符串
   - `%d` - 整数
   - `%t` - 布尔值
   - `%f` - 浮点数 