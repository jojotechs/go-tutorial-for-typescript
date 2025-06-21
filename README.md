# Go 语言学习指南 - 从 TypeScript 到 Go

## 项目简介

本项目是专为熟悉 TypeScript 的前端工程师设计的 Go 语言学习指南。通过对比 TypeScript 和 Go 的语法差异，帮助你快速掌握 Go 语言的核心概念。

## 学习目标

- ✅ 理解 Go 语言的核心概念和语法
- ✅ 掌握 Go 的类型系统和并发编程模型
- ✅ 学会构建和部署 Go 应用
- ✅ 开发个人项目和工具

## 项目结构

```
demo/
├── README.md                    # 项目说明
└── basic/                       # 基础语法部分
    ├── variables-constants/     # 变量和常量
    │   ├── example.ts          # TypeScript 示例
    │   ├── demo.go             # Go 练习模板
    │   └── answer.md           # 答案和说明
    ├── data-types/             # 数据类型
    │   ├── example.ts
    │   ├── demo.go
    │   └── answer.md
    ├── pointers/               # 指针概念 ⭐ 新增
    │   ├── example.ts
    │   ├── demo.go
    │   └── answer.md
    ├── functions/              # 函数
    │   ├── example.ts
    │   ├── demo.go
    │   └── answer.md
    ├── conditionals/           # 条件语句
    │   ├── example.ts
    │   ├── demo.go
    │   └── answer.md
    └── loops/                  # 循环语句
        ├── example.ts
        ├── demo.go
        └── answer.md
```

## 使用方法

### 1. 学习流程

每个学习模块包含三个文件：

- **`example.ts`** - TypeScript 示例代码，展示你已经熟悉的语法
- **`demo.go`** - Go 语言练习模板，你需要填写实现
- **`answer.md`** - 完整的 Go 实现和详细说明

### 2. 学习步骤

1. 📖 **阅读 TypeScript 示例** - 理解要实现的功能
2. 💻 **编写 Go 代码** - 在 `demo.go` 中实现相同逻辑
3. 🏃 **运行测试** - 使用 `go run demo.go` 验证结果
4. 📚 **查看答案** - 对比 `answer.md` 中的标准实现
5. 🔄 **重复练习** - 直到熟练掌握

### 3. 运行代码

```bash
# 进入任意模块目录
cd basic/variables-constants

# 运行 Go 代码
go run demo.go

# 或者先编译再运行
go build demo.go
./demo
```

## 基础部分学习内容

### 1. 变量和常量 (`variables-constants/`)

学习 Go 中的变量声明、常量定义和作用域概念。

**关键差异：**
- Go 有三种变量声明方式
- 支持类型推断
- 零值概念

### 2. 数据类型 (`data-types/`)

了解 Go 的基本类型、结构体、切片和接口。

**关键差异：**
- 结构体 vs 接口
- 数组 vs 切片
- 混合类型数组实现

### 3. 指针 (`pointers/`) ⭐ 新增

掌握 Go 的指针概念，理解内存地址和引用。

**关键差异：**
- 显式指针 vs 引用类型
- 内存地址操作
- 可选属性实现
- 值传递 vs 指针传递

### 4. 函数 (`functions/`)

掌握 Go 的函数定义、多返回值和并发模型。

**关键差异：**
- 多返回值
- 无可选参数
- goroutine + channel

### 5. 条件语句 (`conditionals/`)

学习 Go 的条件控制和类型断言。

**关键差异：**
- 无三元运算符
- switch 自动 break
- 类型断言

### 6. 循环语句 (`loops/`)

理解 Go 的循环模式和并发处理。

**关键差异：**
- 只有 for 循环
- range 关键字
- 并发循环

## 快速对比

| 特性 | TypeScript | Go |
|-----|-----------|-----|
| 变量声明 | `let name: string` | `var name string` 或 `name := value` |
| 函数定义 | `function name(): type` | `func name() type` |
| 数组 | `number[]` | `[]int` |
| 对象 | `interface` | `struct` |
| 可选属性 | `email?: string` | `email *string` |
| 指针 | 不支持 | `*int`, `&variable` |
| 异步 | `async/await` | `goroutine + channel` |
| 错误处理 | `try/catch` | 返回 `error` |

## 下一步计划

完成基础部分后，我们将继续学习：

- **中等难度**：面向对象、错误处理、HTTP 服务
- **高级内容**：数据库操作、Web 框架、部署

## 学习建议

1. **循序渐进** - 按顺序完成每个模块
2. **多实践** - 每个概念都要亲手编写代码
3. **对比思考** - 思考 Go 和 TypeScript 的设计哲学差异
4. **查阅文档** - 遇到问题查看 [Go 官方文档](https://golang.org/doc/)

## 获取帮助

- [Go 官方教程](https://tour.golang.org/)  
- [Go 标准库文档](https://golang.org/pkg/)
- [Go by Example](https://gobyexample.com/)

开始你的 Go 语言学习之旅吧！🚀 