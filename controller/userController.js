exports.getAllUsers=(req,res)=>{
    console.log('Accediendo a todos los usuarios')
}

exports.getUser=(req,res)=>{
    console.log(req.query.enabled)
    console.group('Accediendo a usuario con id:'+req.params.id)
}

exports.createUser = ( req, res ) => {
    let data=req.body
    const { nombre, apellido, email, telefono } = data
    console.log(nombre, apellido, email,telefono)
}

exports.updateUser = ( req, res ) => {
    let data=req.body
    const { nombre, apellido, email, telefono } = data
    console.log( nombre, apellido, email, telefono )
    console.log( req.params.id )
    console.log(nombre, apellido, email, telefono)
}

exports.deleteUser = ( req, res ) => {
    console.log(req.params.id)
}