import express from 'express'
import {Createuser,Getuser,Updateuser,Deleteuser} from '../controller/userController.js'

const routers = express.Router()

routers.post('/create',Createuser)
routers.get('/get',Getuser)
routers.put('/update/:id',Updateuser)
routers.delete('/delete/:id',Deleteuser)

export default routers