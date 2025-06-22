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
	num2 := num1
	num2 = 100
	fmt.Printf("num1: %d num2: %d\n", num1, num2)
	// 创建 num1 的指针
	var numPtr *int = &num1
	fmt.Printf("num1 address: %p\n", numPtr)
	fmt.Printf("numPtr value: %d\n", *numPtr)
	// 通过指针修改 num1 的值
	*numPtr = 200
	fmt.Printf("通过指针修改后 num1: %d\n", num1)

	// TODO: 结构体和指针
	type Person struct {
		name string
		age  int
	}

	// 创建结构体实例
	person1 := Person{
		name: "Joe",
		age:  33,
	}
	person2 := person1
	person2.age = 34
	fmt.Printf("person1 age: %d person2 age: %d\n", person1.age, person2.age)
	// 创建指向结构体的指针
	personPtr := &person1
	// 通过指针修改结构体字段
	personPtr.age = 44
	fmt.Printf("person1 age(modified by pointer): %d\n", person1.age)

	// TODO: 切片是引用类型
	arr1 := []int{1, 2, 3}
	arr2Ptr := &arr1
	*arr2Ptr = append(*arr2Ptr, 4)
	// 理解切片的底层指针概念
	fmt.Printf("arr1: %v arr2: %v\n", arr1, *arr2Ptr)

	// TODO: 函数参数 - 值传递 vs 指针传递
	// 实现两个函数：一个接收值，一个接收指针
	modifiedObject := func(obj Person) {
		obj.name = "New Name"
		fmt.Printf("obj new name: %s\n", obj.name) // new name
	}
	modifiedObject(person2)
	fmt.Printf("person1 new name: %s person2 new name: %s\n", person1.name, person2.name) // old name

	arr3 := []int{1, 2, 3}
	arr4 := arr3
	modifiedSlice := func(arr []int) {
		arr[1] = 111
	}
	modifiedSlice(arr4)
	fmt.Printf("arr3: %v arr4: %v\n", arr3, arr4) // 第二项都被改成了111
	fmt.Printf("上面例子表明，函数参数的值拷贝也遵循同样的赋值原则：基本类型（struct也是基本类型）是复制值，引用类型复制指针（切片、甚至指针本身，浅拷贝）\n")

	// TODO: 可选属性 - 使用指针表示
	type OptionalPerson struct {
		name  string
		email *string // 指针表示可选
		phone *string
	}

	// 创建 OptionalPerson 实例
	optionalPerson1 := OptionalPerson{
		name:  "Option 1 Kej",
		email: nil,
		phone: nil,
	}
	// 处理 nil 指针
	stringOpts := func(s string) *string { return &s }

	optionalPerson2 := OptionalPerson{
		name:  "Option 2 KK",
		email: stringOpts("KK@kk.com"),
		phone: stringOpts("020-3233233"),
	}

	// TODO: 指针的零值是 nil
	// 检查指针是否为 nil
	printPersonInfo := func(u OptionalPerson) {
		fmt.Printf("姓名: %s\n", u.name)
		if u.email != nil {
			fmt.Printf("email: %s\n", *u.email)
		} else {
			fmt.Printf("未提供邮箱\n")
		}

		if u.phone != nil {
			fmt.Printf("phone: %s\n", *u.phone)
		} else {
			fmt.Printf("未提供邮箱\n")
		}
	}
	printPersonInfo(optionalPerson1)
	printPersonInfo(optionalPerson2)

	// TODO: new() 函数分配内存
	fmt.Println("\n7. new() 函数:")
	// 使用 new() 创建指针
	// 创建保存某种类型值的指针
	newPtr := new(OptionalPerson)
	newPtr.email = stringOpts("ptr@ptr.com")
	printPersonInfo(*newPtr)
}
