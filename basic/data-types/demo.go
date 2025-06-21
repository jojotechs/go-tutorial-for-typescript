package main

import (
	"fmt"
	"reflect"
)

// 定义接口类型来表示混合类型
type StringOrNumber interface {
	string | int | float64
}

func main() {
	// 在这里实现与 example.ts 相同的逻辑
	// 提示：Go 的基本类型包括 string, int, float64, bool
	// 使用 struct 定义结构体，slice 表示动态数组

	// 基本数据类型
	var message string = "Hello World"
	var count int = 42
	var price float64 = 19.99
	var isComplete bool = false

	// 数组和切片
	var numbers = [5]int{1, 2, 3, 4, 5}
	fruits := []string{"apple", "banana", "orange"}

	// 混合类型数组的几种实现方式

	// 方式1：使用 interface{} 类型（空接口，可以存储任何类型）
	mixed := []interface{}{"test", 123, "hello", 456}

	// 方式2：使用泛型（Go 1.18+）
	mixedGeneric := []any{"test", 123, "hello", 456} // any 是 interface{} 的别名

	// 方式3：定义专门的类型来处理混合值
	type MixedValue struct {
		Type  string // "string" 或 "number"
		Value interface{}
	}

	mixedStructs := []MixedValue{
		{Type: "string", Value: "test"},
		{Type: "number", Value: 123},
		{Type: "string", Value: "hello"},
		{Type: "number", Value: 456},
	}

	// 输出示例
	fmt.Printf("消息: %s\n", message)
	fmt.Printf("数量: %d, 价格: %.2f, 完成: %t\n", count, price, isComplete)
	fmt.Printf("数字数组: %v\n", numbers)
	fmt.Printf("水果切片: %v\n", fruits)

	// 输出混合类型数组
	fmt.Printf("混合数组(interface{}): %v\n", mixed)
	fmt.Printf("混合数组(any): %v\n", mixedGeneric)

	// 遍历混合数组并处理不同类型
	fmt.Println("遍历混合数组:")
	for i, item := range mixed {
		switch v := item.(type) {
		case string:
			fmt.Printf("  [%d] 字符串: %s\n", i, v)
		case int:
			fmt.Printf("  [%d] 整数: %d\n", i, v)
		default:
			fmt.Printf("  [%d] 未知类型: %v (类型: %s)\n", i, v, reflect.TypeOf(v))
		}
	}

	// 输出结构化混合数组
	fmt.Println("结构化混合数组:")
	for i, item := range mixedStructs {
		fmt.Printf("  [%d] %s: %v\n", i, item.Type, item.Value)
	}

	// 类型安全的函数示例
	fmt.Println("类型安全操作:")
	processItem := func(item interface{}) {
		switch v := item.(type) {
		case string:
			fmt.Printf("处理字符串: %s (长度: %d)\n", v, len(v))
		case int:
			fmt.Printf("处理整数: %d (平方: %d)\n", v, v*v)
		default:
			fmt.Printf("无法处理的类型: %T\n", v)
		}
	}

	for _, item := range mixed {
		processItem(item)
	}

	// 结构化数据
	type Person struct {
		name string
		age  int
		// 可选属性
		email *string
	}

	email := "john@example.com"
	user := Person{
		name:  "John Doe",
		age:   32,
		email: &email,
	}

	fmt.Printf("用户姓名:%s 用户年龄: %d 用户邮箱: %s\n", user.name, user.age, *user.email)

	// 元祖类型
	coordinate := [2]int{10, 20}
	userInfo := [3]string{"Alice", "25", "true"}

	fmt.Printf("坐标: %v\n", coordinate)
	fmt.Printf("用户信息: %v\n", userInfo)

	// 枚举类型
	type Status string

	const (
		StatusPending  Status = "pending"
		StatusApproved Status = "approved"
		StatusRejected Status = "rejected"
	)

	currentStatus := StatusPending

	fmt.Printf("Status: %s\n", currentStatus)

	// 函数类型
	calculateArea := func(width int, height int) int {
		return width * height
	}

	area := calculateArea(10, 20)
	fmt.Printf("面积: %d\n", area)

	// 类型别名
	type UserRole string

	const (
		UserRoleAdmin UserRole = "admin"
		UserRoleUser  UserRole = "user"
		UserRoleGuest UserRole = "guest"
	)

	role := UserRoleAdmin

	fmt.Printf("Role: %s\n", role)

	// null 和 undefined
	var optionalValue *string = &message
	var undefinedValue *string = nil

	fmt.Printf("Optional Value: %s\n", *optionalValue)
	fmt.Printf("Undefined Value: %v\n", undefinedValue)

	// 输出示例
	fmt.Printf("消息: %s\n", message)

}
