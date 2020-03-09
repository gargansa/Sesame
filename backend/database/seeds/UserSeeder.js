const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run () {
    const users = await Database.table('users')
    console.log(users)
    const user = await Factory
  .model('App/Models/User')
  .create()
  }
  
}

module.exports = UserSeeder