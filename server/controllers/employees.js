import express from 'express';
import {getAll, addEmployee, editEmployee, deleteEmployee} from '../db/dbemployees.js';
const router = express.Router();

export const getAllEmployee = async (req, res) => {    
    try{
        const data = await getAll();
        res.send({res:data})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}
export const createEmployee = async (req, res) => {
    const { firstname, lastname, salary } = req.body;
    try{
        const data = await addEmployee(firstname, lastname, salary);
        res.send({res:data})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, salary } = req.body;
    try{
        const data = await editEmployee(id, firstname, lastname, salary);
        res.send({res:data})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export const removeEmployee = async (req, res) => {
    const { id } = req.params;
    try{
        const data = await deleteEmployee(id);
        res.send({res:data})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export default router;
