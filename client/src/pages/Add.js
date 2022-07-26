import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Add = () => {

    const [usrdata, setusrData] = useState({
        firstname: '',
        lastname: '',
        salary: ''
    });
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getOneEmployee(id);
        }
    }, [id])

    const getOneEmployee = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/${id}`)
            let data = response.data.res[0]
            setusrData({
                firstname: data.FirstName,
                lastname: data.LastName,
                salary: data.Salary
                }
            )
        } catch (error) {
            setError("Unable to fetch that user")
        }
    }

    const addNewEmployee = async (usrdata) => {
        try {
            await axios.post("http://localhost:5000/add", usrdata)
            setSuccess("Sucessfully added a new employee!")
            await new Promise(r => setTimeout(r, 2000))
            navigate("/");
        } catch (error) {
            setError("Unable to add new user")
        }
    }

    const updateOneEmployee = async (id) => {
        try {
            await axios.patch(`http://localhost:5000/edit/${id}`, usrdata)
            setSuccess("Updated successfully!")
            await new Promise(r => setTimeout(r, 2000))
            navigate("/");
        } catch (error) {
            setError("Unable to update the user")
        }
    }

    const Submit = async (e) => {
        e.preventDefault();
        const salary_new = parseInt(usrdata.salary);
        if (!usrdata.firstname || !usrdata.lastname || !usrdata.salary) {
            setError("Please make sure you filled out all the fields.")
        }
        else if (isNaN(usrdata.salary)) {
            setError("Please make sure the salary must be numbers.")
        }
        else if (salary_new <= 0){
            setError("Please make sure the salary must be positive numbers.")
        }
        else {
            if (!id) {
                addNewEmployee(usrdata);
            }
            else {
                updateOneEmployee(id);
            }

        }
    }
    const handleInput = (e) => {
        setusrData({ ...usrdata, [e.target.name]: e.target.value })
    }
    return (
        <Container fluid="md" className='mt-5 col-md-3'>
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Card border="secondary" >
                <Card.Header>
                    {id ? <h3 className="text-center m-4">Update employee</h3> : <h3 className="text-center m-4">Add employee</h3>}
                </Card.Header>
                <Form onSubmit={Submit} className='mt-5 md-4 m-4'>
                    <Form.Group className="mb-3" controlid="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstname" value={usrdata.firstname} type="text"
                            onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlid="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastname" value={usrdata.lastname} type="text"
                            onChange={handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlid="formSalary">
                        <Form.Label>Salary</Form.Label>
                        <InputGroup className="mb-3" controlid="formSalary">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control name="salary" value={usrdata.salary} type="text"
                                onChange={handleInput} />
                        </InputGroup >
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="d-grid gap-2">
                        <Button variant="secondary" >
                                cancel
                        </Button>
                        </div>

                        </Link>
                    </div>

                </Form>
            </Card>
        </Container>
    );
    ;
}

export default Add;