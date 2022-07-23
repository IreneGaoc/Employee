import React, { useState, useEffect } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get("http://localhost:3000");
            setData(response.data.res)
        };
        try {
            fetchdata()
        }
        catch (err) {
            console.log("Unable to fetch data")
        }
    }, []);
    return (
        <Container fluid="md">
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
                                <link to={`/${item.EmployeeId}`}>
                                <Button>Edit</Button></link>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <Button variant="outline-success">Add Employee</Button>
        </Container>
    );
    ;
}

export default Home;