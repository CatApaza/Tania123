const express=require('express')
const app=express()
//const useRouter=require('./routers/userRouters')
const morgan=require('morgan')
//const userLogin=require('./middlewares/userLogin')
const path=require('path')
const connection=require('./database/connection')
const socket=require('socket.io')

app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
  

    res.render('index',data)

})


app.use(morgan('dev'))

const server=require('http').createServer(app)
const io=socket(server)
require('./socket')(io)


server.listen(3000,()=>{
    console.log('Aplicacion con express ejecutandose en el puerto 3000')
})