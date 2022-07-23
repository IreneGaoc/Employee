import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Add = () => {

    const [usrdata, setusrData] = useState({
        firstname: '',
        lastname: '',
        salary: ''
    });
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const navigate  = useNavigate();
    const Submit = async (e) => {
        e.preventDefault();
        if (!usrdata.firstname || !usrdata.lastname || !usrdata.salary){
            setError("Please make sure you filled out all the fields.")
        }
        else if (isNaN(usrdata.salary)){
            setError("Please make sure the salary must be numbers.")
        }
        else{
            try{
                await axios.post("http://localhost:3000/add", usrdata)
                setSuccess("Sucessfully added a new Employee!")
                await new Promise(r => setTimeout(r, 2000))
                navigate("/");
            }catch (error) {
                console.log("Unable to add new user")
            }
            
        }
    }
    const handleInput = (e) => {
        setusrData({...usrdata, [e.target.name]: e.target.value})
    }
    return (
        <Container fluid="md">
            {success && <Alert variant = "success">{success}</Alert>}
            {error && <Alert variant = "danger">{error}</Alert>}
            <Form onSubmit={Submit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstname" value={usrdata.firstname} type="text" 
                    onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastname" value={usrdata.lastname} type="text"
                    onChange={handleInput} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formSalary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control name="salary" value={usrdata.salary} type="text"
                    onChange={handleInput} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
    ;
}

export default Add;