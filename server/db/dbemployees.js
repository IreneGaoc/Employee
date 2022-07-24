import mysql from 'mysql';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE
}); 

const initializesql = async() =>{
    let queries = fs.readFileSync('data.sql', { encoding: "UTF-8" }).split(";\n");
    for (let query of queries) {
        query = query.trim();
        if (query.length !== 0 && !query.match(/\/\*/)) {
          connection.query(query, function (err, _) {
            if (err) {
              console.log("Failed importing database");
            } else {
              console.log(`Importing Mysql Database  - Query:${query}`);
            }
          });
        }
      }
}
connection.connect((err) => {
    // initializesql();
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

export const getOne = async(id) => {
    const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM Employees WHERE EmployeeId = ?";
        const values = [id]
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