import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
}); 
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});

export const getAll = async() => {
    const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM Employees";
        connection.query(query, (err, rows) => {
            if (err) {
                reject(new Error(err.message));
            }
            else{
                resolve(rows);
            }
        })
    });
    return response;
}

export const addEmployee = async(firstname, lastname, salary) => {
    const response = await new Promise((resolve, reject) => {
        const query = "INSERT INTO Employees (FirstName, LastName, Salary) VALUES (?, ?, ?)";
        const values = [firstname, lastname, salary]
        connection.query(query, values, (err, rows) => {
            if (err) {
                reject(new Error(err.message));
            }
            else{
                resolve(rows);
            }
        })
    });
    return response;
}

export const editEmployee = async(id, firstname, lastname, salary) => {
    const response = await new Promise((resolve, reject) => {
        const query = "UPDATE Employees SET FirstName = ?, LastName = ?, Salary = ? WHERE EmployeeId = ? ";
        const values = [firstname, lastname, salary, id];
        connection.query(query, values, (err, rows) => {
            if (err) {
                reject(new Error(err.message));
            }
            else{
                resolve(rows);
            }
            
        })
    });
    return response;
}

export const deleteEmployee = async(id) => {
    const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM Employees WHERE EmployeeId = ?";
        const values = [id];
        connection.query(query, values, (err, rows) => {
            if (err) {
                reject(new Error(err.message));
            }
            else{
                resolve(rows);
            }
        })
    });
    return response;
}