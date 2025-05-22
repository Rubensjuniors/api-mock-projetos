const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Configurações
const port = process.env.PORT || 10000
const delay = 1000 // delay de 1 segundo

// Middlewares
server.use(middlewares)
server.use(jsonServer.bodyParser)

// Adiciona delay para simular uma API real
server.use((req, res, next) => {
  setTimeout(next, delay)
})

// Rotas personalizadas
server.get('/lrhub/expenses', (req, res) => {
  const expenses = router.db.get('lrhub.expenses').value()
  res.json(expenses)
})

// Usa o router padrão do JSON Server
server.use(router)

// Inicia o servidor
server.listen(port, () => {
  console.log(`JSON Server rodando em http://localhost:${port}`)
  console.log('\nRecursos disponíveis:')
  console.log(`http://localhost:${port}/clients`)
  console.log(`http://localhost:${port}/lrhub/expenses`)
})
