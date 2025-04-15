const userLogin=(rep,res,next)=>{
    let issLogin=true
    if(!issLogin){
        return rsort.status(401).json({'message':"Usuario no logeado"})
    }
    next()
}
module.exports=userLogin