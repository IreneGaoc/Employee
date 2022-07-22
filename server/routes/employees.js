import express from 'express';
import {getAllEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees';

const router = express.Router();
router.get('/', getAllEmployee);
router.post('/',  createEmployee);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;