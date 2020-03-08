'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/createUser', "UserController.createUser") //create user 
Route.get('/getUser', "UserController.getUser") //read user (needs auth)
Route.put('/updateUser', "UserController.updateUser") //update user (needs auth)
Route.delete('/deleteUser', "UserController.deleteUser") //delete user (needs auth)
Route.post('/loginUser', "UserController.login")
Route.post('/uploadImage', "UserController.uploadImage")
Route.put('updateUserPicture', "UserController.updateUserProfile")
