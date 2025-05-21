const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3000

server.use(middlewares)

server.use((req, res, next) => {
  setTimeout(next, 1000)
})

server.use(router)

server.listen(port, () => {
  console.log(`JSON Server rodando na porta ${port}`)
})
