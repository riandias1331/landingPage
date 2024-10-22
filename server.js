const express = require('express')
const app = express()
const port = 3333
const path = require('path')

const routes = require('./routes')
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views')) // define o caminho das views (arquivos que renderizam na tela)
app.set('view engine', 'ejs') // define o EJS como engine para renderizar HTML

app.use(express.static(path.resolve(__dirname, 'public')));


app.listen(port, () => {
    console.log('Server is Running')
})
