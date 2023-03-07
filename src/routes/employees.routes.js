import {Router}  from 'express'
import {getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployes,
    getEmployee} from '../controllers/employees.controller.js'

const  router = Router()
 
router.get('/employees/:id',getEmployee)

router.get('/employees',getEmployees)

router.post('/employees',createEmployees)

router.patch('/employees/:id',updateEmployees)

router.delete('/employees/:id',deleteEmployes)
 

export default router