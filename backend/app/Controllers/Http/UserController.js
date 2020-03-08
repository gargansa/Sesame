'use strict'
const User = use('App/Models/User')
//const Drive = use('Drive')

class UserController {

    async createUser({ request, auth, response }) {
      const {username, password, email }=request.post()
      console.log('in usercontroller')
        let user = await User.create(
            {
                username,
                password
            })
            //console.log(user)
            //const token = await auth.generate(user)
            
            response.json({
                //message: `${user.username} added to the database`,
                message: 'Added to the database',
                //data: token,
            })
            console.log(response)

    }

}
module.exports = UserController