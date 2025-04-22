const User=require('../models/userModel')
class UserService{
    constructor(){}

    async getall(){
        const users=await User.find({})
        return users
    }
    async filterById(id){
        const user=await User.find({_id:id})
        return user
    }
    async update(id,data){
        return await User.findByIdAndUpdate({_id:id},data)
    }
    async delete(id){
        return await User.findByIdAndDelete(id);
    }

    async create(data){
        const user=new User(data)
        return await user.save()
    }
}
module.exports=UserService