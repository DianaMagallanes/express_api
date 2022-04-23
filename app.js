const express = require('express')

const app = express()
app.use(express.json()) //indicando que usare json
const port=3000

//HTTP METHODS
app.get('/v1/explorers', (req,res) =>{
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id:1, name:"Diana1"}
    const explorer2 = {id:1, name:"Diana2"}
    const explorer3 = {id:1, name:"Diana3"}
    const explorer4 = {id:1, name:"Diana4"}
    const explorers = [explorer1,explorer2,explorer3,explorer4]
    res.status(200).json(explorers)
})

//inicializando app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})