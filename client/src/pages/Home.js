import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Confirm from '../components/Modal/Confirm';
import Alert from 'react-bootstrap/Alert';

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

    const modal = (id) =>{
        setId(id);
        setTitle("Warning");
        setMessage("Are you sure you want to delete this employee?");
        setShow(true);
    }

    const deleteEmployee = async (id) => {
        try {
            setShow(false);
            await axios.delete(`http://localhost:3000/${id}`);
            setSuccess("Sucessfully deleted")
            fetchdata();
        }
        catch (err) {
            setError("Unable to delete user");
        }
    }

    return (
        <Container fluid="md">
        {success && <Alert variant = "success">{success}</Alert>}
        {error && <Alert variant = "danger">{error}</Alert>}
        <Confirm id={id} title={title} message={message} show={show} hide={hide} confirm={deleteEmployee} />
        <Table striped >
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Salary}</td>
                            <td>Edit</td>
                            <td>
                                <Link to={`/${item.EmployeeId}`}>
                                    <Button>Edit</Button>
                                </Link>
                                <Button onClick={() => { modal(item.EmployeeId)}}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <Link to="/add">
            <Button variant="outline-success">Add Employee</Button>
        </Link>
        </Container>
    );
    ;
}

export default Home;