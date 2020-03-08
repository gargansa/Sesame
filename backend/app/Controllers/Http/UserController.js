'use strict'
const User = use('App/Models/User')
const aws = require('aws-sdk')
const Drive = use('Drive')

class UserController {

     async updateUserProfile({request,response,auth}){
         try{
             let user = await auth.getUser()
             await user.save()
             response.send(user)
         }catch(e){
             response.send(e)
         }
     }


    async createUser({ request, auth, response }) {
      const {username, password }=request.post()
        let user = await User.create(
            {
                username,
                password
            })
            
            const token = await auth.generate(user)
            
            response.json({
                message: `${user.username} added to the database`,
                data: token,
            })

    }
    async getUser({ request, response, auth }) {
        try{
            let user = await auth.getUser()
            response.json({
                user: user
            })
            
        }catch(e){
            response.send(e)
        }
    }
    async updateUser({ request, response, auth }) {
        try{
            
            
            let user = await auth.getUser()

           
            const {username,password} = request.post()
            user.username = username
            user.password = password
            await user.save()
            response.json({
                updated_user: user
            })
        }catch(e){
            response.send(e)
        }
        
    }
    async deleteUser({ request, response, auth }) {
        
            let user = await auth.getUser()
            let x =await User.query()
            .with('user')
            
            .where('user_id', user.id)
            .fetch()

           
            
            // .delete()
            response.json({
                message: x,
                
            })
        
    }
    
    async login({ request, auth, response }) {
  
        const email = request.input("email")
        const password = request.input("password");
       
       try{
             if (await auth.attempt(email, password)) {
                await auth.attempt(email, password)
                let user = await User.findBy('email', email )
                let accessToken = await auth.generate(user)
                return response.json({ "message": "success", "access_token": accessToken })
             }
            
            }
        catch (e) {
            return response.status(400).json({ message: "failed to login" })
            // return e
             }
    }

}
module.exports = UserController