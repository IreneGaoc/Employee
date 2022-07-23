import express from 'express';
import {getAllEmployee, createEmployee, updateEmployee, removeEmployee, getOneEmployee} from '../controllers/employees.js';

const router = express.Router();
router.get('/', getAllEmployee);
router.get('/:id', getOneEmployee);
router.post('/add',  createEmployee);
router.patch('/edit/:id', updateEmployee);
router.delete('/:id', removeEmployee);

export default router;