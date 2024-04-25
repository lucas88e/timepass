const dateMiddleware = (req,res,next)=>{
    const now = new Date()
    const hours = now.getHours();
    const minutes = now.getMinutes()
    const formatoHora = `${hours}:${minutes}`;
    req.dateType = ` ${formatoHora}`;
    next();
  }
module.exports = dateMiddleware

