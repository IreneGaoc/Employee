import express from 'express';
import {getAll, addEmployee, editEmployee, deleteEmployee} from '../db/dbemployees.js';
const router = express.Router();

export const getAllEmployee = async (req, res) => {    
    try{
        res = await getAll();
        res.send({res:res})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}
export const createEmployee = async (req, res) => {
    try{
        res = await addEmployee();
        res.send({res:res})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, salary } = req.body;
    try{
        res = await editEmployee(id, firstname, lastname, salary);
        res.send({res:res})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export const removeEmployee = async (req, res) => {
    const { id } = req.params;
    try{
        res = await deleteEmployee(id);
        res.send({res:res})
    }catch(err){
		console.log(err);
		res.send({res:'error'});
    }
}

export default router;
