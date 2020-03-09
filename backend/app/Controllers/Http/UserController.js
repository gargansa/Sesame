'use strict'
const User = use('App/Models/User')
//const Drive = use('Drive')
const Encryption = use('Encryption')


class UserController {

    async createUser({ request, auth, response }) {
      const {username, password, email }=request.post()
      console.log('in usercontroller')
      const encrypted = Encryption.encrypt('hello world')
      console.log(encrypted)
      const unencrypted = Encryption.decrypt(encrypted)
      console.log(unencrypted)
        let user = await User.create(
            {
                username,
                password
            })
            response.json({
                message: `${user} Added to the database`,
            })
            console.log(response)

    }


    async loginUser({ request, auth, response }) {
        const {username }=request.get()
              response.json({
                  message: `${username}`,
                  
              })
              console.log(response)
  
      }

}
module.exports = UserController