package main

import "fmt"

func main() {
	// 在这里实现与 example.ts 对应的 Go 指针概念
	// 练习目标：
	// 1. 理解值类型 vs 引用类型的区别
	// 2. 学习指针的声明、取地址、解引用
	// 3. 掌握指针在函数参数中的应用
	// 4. 理解指针如何实现可选属性

	fmt.Println("=== Go 指针概念学习 ===")

	// TODO: 基本类型和指针
	// 提示：使用 & 取地址，* 解引用
	var num1 int = 42
	// 创建 num1 的指针
	// 通过指针修改 num1 的值

	// TODO: 结构体和指针
	type Person struct {
		name string
		age  int
	}

	// 创建结构体实例
	// 创建指向结构体的指针
	// 通过指针修改结构体字段

	// TODO: 切片是引用类型
	// 理解切片的底层指针概念

	// TODO: 函数参数 - 值传递 vs 指针传递
	// 实现两个函数：一个接收值，一个接收指针

	// TODO: 可选属性 - 使用指针表示
	type OptionalPerson struct {
		name  string
		email *string // 指针表示可选
		phone *string
	}

	// 创建 OptionalPerson 实例
	// 处理 nil 指针

	// TODO: 指针的零值是 nil
	// 检查指针是否为 nil

	// TODO: new() 函数分配内存
	// 使用 new() 创建指针
}
