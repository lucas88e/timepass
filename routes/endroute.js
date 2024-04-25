const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send(`<h1>Bienvenido</h1><p>La hora actual es:${req.dateType}</p><p><button id="btn"><a href ="/endroute">Entrar</a></button></p>
    `)
})
router.get("/endroute",(req,res)=>{
    res.send("<h1>Ruta Final</h1><p>Bienvenido a la ruta final!</p></p>")
})

router.use((req,res)=>{
    res.status(404).send(`<h1>Bienvenido </h1><p>La hora actual es: ${req.dateType}</p><p>
    Aún no es la hora, espera hasta las 24:00<button>Entrar</button></p>`)
  })
 
  module.exports =router