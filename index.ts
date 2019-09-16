// 引用Node内置包
const http = require('http')
const port = 3000

// 创建服务器
const server = http.createServer((req, res) => {
  // 返回什么内容
  res.end(`<h1>Yo</h1>`)
})

// 启动服务器
server.listen(port, error => {
  console.log(`http://localhost:${port}`)
})
