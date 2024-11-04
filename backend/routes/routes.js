import express from 'express'
import {Createuser,Getuser} from '../controller/userController.js'

const routers = express.Router()

routers.post('/create',Createuser)
routers.post('/get',Getuser)


export default routers