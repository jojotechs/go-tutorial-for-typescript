package main

import "fmt"

func greet(name string) string {
	return "Hello, " + name + "!"
}

// not allowed when out of the function
// add := func(a int, b int) int { return a+b}

func introduce(name string, age *int) string {
	if age != nil {
		return fmt.Sprintf("我是 %s, 今年 %d 岁", name, *age)
	}
	return fmt.Sprintf("我是 %s", name)
}

func main() {
	// 在这里实现与 example.ts 相同的逻辑
	fmt.Println(greet("golang"))
	fmt.Println(introduce("Leo", nil))

	age := 24
	fmt.Println(introduce("Lynn", &age))
}
