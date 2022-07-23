import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Confirm from '../components/Modal/Confirm';
import Alert from 'react-bootstrap/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Fab from '@mui/material/Fab';

const Home = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState(null)
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(null);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        try {
            const response = await axios.get("http://localhost:3000");
            setData(response.data.res)
        }
        catch (err) {
            console.log("Unable to fetch data")
        }
    };

    const hide = () => {
        setShow(false);
    };

    const modal = (id) => {
        setId(id);
        setTitle("Warning");
        setMessage("Are you sure you want to delete this employee?");
        setShow(true);
    }

    const deleteEmployee = async (id) => {
        try {
            setShow(false);
            await axios.delete(`http://localhost:3000/${id}`);
            fetchdata();
        }
        catch (err) {
            setError("Unable to delete user");
        }
    }

    return (
        <Container fluid="md" className='mt-5 text-center'>
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Confirm id={id} title={title} message={message} show={show} hide={hide} confirm={deleteEmployee} />
            <h3 className='mb-3'><b>Employee List</b></h3>
            <Table className="table table-sm table-hover">
                <thead className="bg-secondary text-white">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>$ {(item.Salary).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                <td>
                                    <Link to={`/${item.EmployeeId}`}>
                                        <Tooltip placement="top" title="Edit" followCursor>
                                            <IconButton>
                                                <BorderColorIcon color="secondary"/>
                                            </IconButton>
                                        </Tooltip>
                                    </Link>
                                    <Tooltip placement="top" title="Delete" followCursor>
                                        <IconButton  onClick={() => { modal(item.EmployeeId) }} >
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Link to="/add" style={{ textDecoration: 'none' }}>
                <Fab variant="extended" color="primary">
                    <PersonAddIcon sx={{ mr: 1 }} />
                    Add Employee
                </Fab>
            </Link>
        </Container>
    );
    ;
}

export default Home;