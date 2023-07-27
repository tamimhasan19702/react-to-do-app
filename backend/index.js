const app = require('./app')
const PORT = 1000


app.listen(PORT,() => {
    console.log(`Server is Running at http://localHost:${PORT} `)
})