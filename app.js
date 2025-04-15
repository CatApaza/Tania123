const express=require('express')
const app=express()
const useRouter=require('./routers/userRouters')
const morgan=require('morgan')
const userLogin=require('./middlewares/userLogin')

app.use(express.json())
app.get('/',(req,res)=>{
    console.log('Servidor creado con express.js')
    res.send("Accediendo usuarios con Id:" + req.params.id)
})

app.use('/users',useRouter)
app.use(morgan('dev'))
app.use(userLogin)


app.listen(3000,()=>{
    console.log('Aplicacion con express ejecutandose en el puerto 3000')
})