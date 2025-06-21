package main

import "fmt"

func demonstrateScope() {
	localVar := "局部变量"
	const LOCAL_CONSTANT = "局部常量"

	fmt.Printf("函数内部: %s, %s", localVar, LOCAL_CONSTANT)
}

func main() {
	// 在这里实现与 example.ts 相同的逻辑
	// 提示：Go 使用 var 声明变量，const 声明常量
	var userName string = "Alice"
	age := 25
	isActive := true
	const PI = 3.14159
	const APP_NAME = "MY APP"

	// 变量赋值
	userName = "BOB"
	age = 30

	fmt.Printf("APP: %s, PI: %f, 用户名: %s, 年龄: %d, 活跃状态: %t", APP_NAME, PI, userName, age, isActive)

	demonstrateScope()
}
