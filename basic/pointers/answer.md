# 指针 (Pointers) - 答案和详解

## 概念对比

| 概念 | TypeScript | Go |
|------|-----------|-----|
| 基本类型 | 值传递 `let a = b` | 值传递 `var a = b` |
| 对象/结构体 | 引用传递 `let obj2 = obj1` | 需要显式指针 `var ptr = &struct` |
| 可选属性 | `email?: string` | `email *string` |
| 空值检查 | `!== undefined` | `!= nil` |
| 内存地址 | 不可访问 | `&variable` 获取地址 |

## 完整实现

```go
package main

import "fmt"

func main() {
	fmt.Println("=== Go 指针概念学习 ===")

	// 1. 基本类型和指针
	fmt.Println("\n1. 基本类型和指针:")
	var num1 int = 42
	var num2 int = num1 // 值复制
	num2 = 100
	fmt.Printf("num1: %d, num2: %d\n", num1, num2) // num1: 42, num2: 100

	// 指针操作
	var numPtr *int = &num1    // 取 num1 的地址
	fmt.Printf("num1 的地址: %p\n", numPtr)
	fmt.Printf("指针指向的值: %d\n", *numPtr) // 解引用

	*numPtr = 200 // 通过指针修改值
	fmt.Printf("通过指针修改后 num1: %d\n", num1) // num1: 200

	// 2. 结构体和指针
	fmt.Println("\n2. 结构体和指针:")
	type Person struct {
		name string
		age  int
	}

	person1 := Person{name: "Alice", age: 25}
	person2 := person1 // 值复制
	person2.age = 30
	fmt.Printf("person1.age: %d, person2.age: %d\n", person1.age, person2.age) // 25, 30

	// 结构体指针
	personPtr := &person1
	personPtr.age = 35 // Go 自动解引用，等价于 (*personPtr).age = 35
	fmt.Printf("通过指针修改后 person1.age: %d\n", person1.age) // 35

	// 3. 切片是引用类型（内部包含指针）
	fmt.Println("\n3. 切片的引用特性:")
	slice1 := []int{1, 2, 3}
	slice2 := slice1 // 复制切片头，但共享底层数组
	slice2[0] = 100
	fmt.Printf("slice1: %v, slice2: %v\n", slice1, slice2) // [100 2 3], [100 2 3]

	// 4. 函数参数 - 值传递 vs 指针传递
	fmt.Println("\n4. 函数参数传递:")
	
	modifyValue := func(n int) {
		n = 999 // 只修改局部变量
	}
	
	modifyPointer := func(n *int) {
		*n = 999 // 修改指针指向的值
	}
	
	modifyStruct := func(p Person) {
		p.name = "Modified" // 只修改副本
	}
	
	modifyStructPointer := func(p *Person) {
		p.name = "Modified" // 修改原始结构体
	}

	testNum := 50
	testPerson := Person{name: "Bob", age: 20}

	fmt.Printf("修改前 - testNum: %d, testPerson: %+v\n", testNum, testPerson)
	
	modifyValue(testNum)
	modifyStruct(testPerson)
	fmt.Printf("值传递后 - testNum: %d, testPerson: %+v\n", testNum, testPerson)
	
	modifyPointer(&testNum)
	modifyStructPointer(&testPerson)
	fmt.Printf("指针传递后 - testNum: %d, testPerson: %+v\n", testNum, testPerson)

	// 5. 可选属性 - 使用指针表示
	fmt.Println("\n5. 可选属性:")
	type OptionalPerson struct {
		name  string
		email *string // 指针表示可选，nil = 没有值
		phone *string
	}

	// 辅助函数创建字符串指针
	stringPtr := func(s string) *string { return &s }

	user1 := OptionalPerson{
		name:  "Charlie",
		email: nil, // 没有邮箱
		phone: nil, // 没有电话
	}

	user2 := OptionalPerson{
		name:  "David",
		email: stringPtr("david@example.com"),
		phone: stringPtr("123-456-7890"),
	}

	printUser := func(user OptionalPerson) {
		fmt.Printf("姓名: %s\n", user.name)
		
		if user.email != nil {
			fmt.Printf("邮箱: %s\n", *user.email)
		} else {
			fmt.Println("邮箱: 未提供")
		}
		
		if user.phone != nil {
			fmt.Printf("电话: %s\n", *user.phone)
		} else {
			fmt.Println("电话: 未提供")
		}
		fmt.Println("---")
	}

	printUser(user1)
	printUser(user2)

	// 6. 指针的零值是 nil
	fmt.Println("\n6. 指针的零值:")
	var ptr *int
	if ptr == nil {
		fmt.Println("指针为 nil")
	}

	// 7. new() 函数分配内存
	fmt.Println("\n7. new() 函数:")
	newPtr := new(int) // 分配 int 类型的内存，返回指针
	*newPtr = 42
	fmt.Printf("new() 创建的指针: %p, 值: %d\n", newPtr, *newPtr)

	// 8. 指针数组和数组指针
	fmt.Println("\n8. 指针数组 vs 数组指针:")
	
	// 指针数组：数组的每个元素都是指针
	a, b, c := 1, 2, 3
	ptrArray := []*int{&a, &b, &c}
	fmt.Printf("指针数组: %v\n", ptrArray)
	fmt.Printf("解引用: %d, %d, %d\n", *ptrArray[0], *ptrArray[1], *ptrArray[2])
	
	// 数组指针：指向整个数组的指针
	arr := [3]int{10, 20, 30}
	arrPtr := &arr
	fmt.Printf("数组指针指向: %v\n", *arrPtr)
	(*arrPtr)[0] = 100 // 通过指针修改数组
	fmt.Printf("修改后数组: %v\n", arr)
}
```

## 核心概念总结

### 1. 指针基础
- **声明**: `var ptr *int` 
- **取地址**: `ptr = &variable`
- **解引用**: `value = *ptr`
- **零值**: `nil`

### 2. 指针 vs 值
```go
// 值传递 - 复制数据
func byValue(n int) { n = 100 }

// 指针传递 - 传递地址
func byPointer(n *int) { *n = 100 }
```

### 3. 结构体指针
```go
type Person struct { name string }
p := Person{name: "Alice"}
ptr := &p
ptr.name = "Bob" // 自动解引用，等价于 (*ptr).name = "Bob"
```

### 4. 可选属性模式
```go
type User struct {
    name  string
    email *string // nil 表示没有值
}

// 检查是否有值
if user.email != nil {
    fmt.Println(*user.email)
}
```

### 5. 常见用法

#### 创建字符串指针的辅助函数
```go
func stringPtr(s string) *string { return &s }
```

#### 检查并使用可选值
```go
func getEmail(email *string) string {
    if email != nil {
        return *email
    }
    return "未提供"
}
```

## 注意事项

1. **空指针解引用会panic**: 确保在解引用前检查 `!= nil`
2. **结构体字段自动解引用**: `ptr.field` 等价于 `(*ptr).field`
3. **切片、映射、通道本身就是引用类型**: 不需要指针就能共享数据
4. **指针不支持算术运算**: Go 不是 C，指针不能 +1、-1

## 什么时候使用指针？

1. **需要修改参数值时**: 函数需要修改传入的变量
2. **大结构体传递时**: 避免复制大量数据，提高性能
3. **可选字段时**: 用 `*string` 表示可能为空的字段
4. **实现可变性时**: 让多个变量引用同一个数据

通过指针，Go 在保持类型安全的同时，提供了对内存的精确控制能力！ 