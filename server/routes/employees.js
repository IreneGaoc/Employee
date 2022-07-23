import express from 'express';
import {getAllEmployee, createEmployee, updateEmployee, removeEmployee} from '../controllers/employees.js';

const router = express.Router();
router.get('/', getAllEmployee);
router.post('/add',  createEmployee);
router.patch('/edit:id', updateEmployee);
router.delete('/:id', removeEmployee);

export default router;