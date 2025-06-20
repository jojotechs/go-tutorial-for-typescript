# 条件语句 - 答案解析

## Go 语言实现

```go
package main

import (
	"fmt"
	"reflect"
)

func main() {
	// 基本 if-else 语句
	age := 18

	if age >= 18 {
		fmt.Println("成年人")
	} else {
		fmt.Println("未成年人")
	}

	// if-else if-else 语句
	score := 85

	if score >= 90 {
		fmt.Println("优秀")
	} else if score >= 80 {
		fmt.Println("良好")
	} else if score >= 70 {
		fmt.Println("中等")
	} else if score >= 60 {
		fmt.Println("及格")
	} else {
		fmt.Println("不及格")
	}

	// 逻辑运算符
	username := "admin"
	password := "123456"

	if username == "admin" && password == "123456" {
		fmt.Println("登录成功")
	} else {
		fmt.Println("用户名或密码错误")
	}

	// 或运算符
	role := "user"

	if role == "admin" || role == "moderator" {
		fmt.Println("有管理权限")
	} else {
		fmt.Println("普通用户")
	}

	// 非运算符
	isLoggedIn := false

	if !isLoggedIn {
		fmt.Println("请先登录")
	} else {
		fmt.Println("欢迎使用")
	}

	// Go 没有三元运算符，使用 if-else 替代
	temperature := 25
	var weather string
	if temperature > 20 {
		weather = "温暖"
	} else {
		weather = "寒冷"
	}
	fmt.Printf("天气：%s\n", weather)

	// 复杂条件的函数封装
	grade := getGrade(score)
	fmt.Printf("等级：%s\n", grade)

	// switch 语句（Go 不需要 break）
	day := 3

	switch day {
	case 1:
		fmt.Println("星期一")
	case 2:
		fmt.Println("星期二")
	case 3:
		fmt.Println("星期三")
	case 4:
		fmt.Println("星期四")
	case 5:
		fmt.Println("星期五")
	case 6, 7: // 多个 case 可以合并
		fmt.Println("周末")
	default:
		fmt.Println("无效的日期")
	}

	// switch 语句 - 字符串匹配
	fruit := "apple"

	switch fruit {
	case "apple":
		fmt.Println("苹果 - 红色")
	case "banana":
		fmt.Println("香蕉 - 黄色")
	case "orange":
		fmt.Println("橙子 - 橙色")
	default:
		fmt.Println("未知水果")
	}

	// 条件短路（Go 也支持短路求值）
	user := struct {
		name     string
		isActive bool
	}{"Alice", true}

	// 逻辑与短路
	if user.isActive {
		fmt.Printf("用户 %s 是活跃的\n", user.name)
	}

	// 逻辑或短路的替代方案
	var defaultName string
	if user.name != "" {
		defaultName = user.name
	} else {
		defaultName = "匿名用户"
	}
	fmt.Printf("用户名：%s\n", defaultName)

	// Go 中处理可选值的方式
	config := struct {
		timeout *int
		retries int
		debug   *bool
	}{
		timeout: nil,
		retries: 0,
		debug:   nil,
	}

	timeout := getTimeoutOrDefault(config.timeout, 5000)
	retries := getRetriesOrDefault(config.retries, 3)
	debug := getDebugOrDefault(config.debug, false)

	fmt.Printf("配置：timeout=%d, retries=%d, debug=%t\n", timeout, retries, debug)

	// 嵌套结构访问（需要手动检查）
	response := struct {
		data *struct {
			user *struct {
				profile *struct {
					name string
				}
			}
		}
	}{
		data: &struct {
			user *struct {
				profile *struct {
					name string
				}
			}
		}{
			user: &struct {
				profile *struct {
					name string
				}
			}{
				profile: &struct {
					name string
				}{
					name: "John",
				},
			},
		},
	}

	userName := getNestedUserName(response)
	fmt.Printf("用户名：%s\n", userName)

	// 类型断言（类似类型守卫）
	processValue("hello")
	processValue(42)
	processValue(3.14)
}

func getGrade(score int) string {
	if score >= 90 {
		return "A"
	} else if score >= 80 {
		return "B"
	} else if score >= 70 {
		return "C"
	} else {
		return "D"
	}
}

func getTimeoutOrDefault(timeout *int, defaultValue int) int {
	if timeout != nil {
		return *timeout
	}
	return defaultValue
}

func getRetriesOrDefault(retries int, defaultValue int) int {
	if retries == 0 {
		return defaultValue
	}
	return retries
}

func getDebugOrDefault(debug *bool, defaultValue bool) bool {
	if debug != nil {
		return *debug
	}
	return defaultValue
}

func getNestedUserName(response interface{}) string {
	// 这里简化处理，实际项目中建议使用结构体
	return "John" // 简化示例
}

func processValue(value interface{}) {
	switch v := value.(type) {
	case string:
		fmt.Printf("字符串长度：%d\n", len(v))
	case int:
		fmt.Printf("整数平方：%d\n", v*v)
	case float64:
		fmt.Printf("浮点数平方：%.2f\n", v*v)
	default:
		fmt.Printf("未知类型：%s\n", reflect.TypeOf(v))
	}
}
```

## 关键差异对比

| 特性 | TypeScript | Go |
|-----|-----------|-----|
| if 语句 | `if (condition) {}` | `if condition {}` (无括号) |
| 三元运算符 | `condition ? a : b` | 无，使用 if-else |
| switch | 需要 `break` | 自动 break，使用 `fallthrough` 继续 |
| 逻辑运算符 | `&&`, `\|\|`, `!` | `&&`, `\|\|`, `!` (相同) |
| 空值合并 | `??` | 无，手动检查 nil |
| 可选链 | `?.` | 无，手动检查 nil |
| 类型守卫 | `value is Type` | 类型断言 `value.(Type)` |

## 学习要点

1. **Go 条件语句特点**：
   - if 语句不需要括号
   - 支持在条件前声明变量：`if x := getValue(); x > 0 {}`
   - switch 自动 break，不会 fall through

2. **没有的特性**：
   - 无三元运算符（使用 if-else 替代）
   - 无空值合并运算符（手动检查 nil）
   - 无可选链（手动检查嵌套结构）

3. **switch 语句增强**：
   - 可以 switch 任何类型
   - 可以不带表达式（等价于 switch true）
   - 支持类型 switch：`switch v := x.(type)`

4. **类型断言**：
   - 使用 `value.(Type)` 进行类型断言
   - 使用 `value, ok := x.(Type)` 安全断言
   - Type switch 用于处理多种类型

5. **nil 处理**：
   - 使用指针表示可空值
   - 手动检查 nil 而非自动处理
   - 更显式的空值处理 