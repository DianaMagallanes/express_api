const express = require('express')
const req = require('express/lib/request')

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

app.get('/v1/explorers/:id', (req,res) =>{
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name:"Diana"}
    res.status(200).json(explorer)
})

app.post('v1/explorers',(req,res) =>{    
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un usuario
    res.status(201).json({message:"Created"})
})

//inicializando app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})