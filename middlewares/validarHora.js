// const express= require("express")
// const app = express()
// const router = express.Router()
// ;
// function hora(req,res,next){
//     const now = new Date()
//     const hours = now.getHours()
//         if (hours>12){
//             next()
// }   else{
//     res.status(404).send("Error")
// }
// }

// app.use((req,res,next)=>{
    //     req.currentTime = new Date();
    //     next()
    // })
    
    // const hora = (req,res,next)=>{
    //     const tiempo = req.currentTime.getHours();
    //     if(tiempo>=12 && tiempo<24){
    //         res.redirect("/endroute")
    //     }
    //     else{
    //         res.redirect("/error")
    //     }
    // }
    
    // module.exports = {hora}

    // const validarHora = (req, res, next) => {
    //     const currentTime = req.dateType.getHours();
    //     if (currentTime >= 12 && currentTime < 24) {
    //         next();
    //     } else {
           
    //         res.status(404).send(`<h1>Bienvenido</h1><p>La hora actual es: ${req.dateType}</p><p>Aún no es la hora, espera hasta las 24:00<button>Entrar</button></p>`);
    //     }
    // };
    // module.exports = validarHora