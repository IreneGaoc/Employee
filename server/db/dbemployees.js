import mysql from 'mysql';

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,

}) 
connection.connect((err) => {
    if (err) {
        console.log("Error");
    }
});

export const getAll = async() => {
    const query = "SELECT * FROM Employees";
    connection.query(query, (err, rows) => {
        if (err){
            console.log(err);
        }
        else{
            return rows;
        }
    });
    return res;
}

export const addEmployee = async() => {
    const query = "INSERT INTO FROM Employees (FirstName, LastName, Salary) VALUES (?, ?, ?)";
    const values = [firstname, lastname, salary]
    connection.query(query, values, (err, rows) => {
        if (err){
            console.log(err);
        }
        else{
            return rows;
        }
    });
    return res;
}

export const editEmployee = async(id, firstname, lastname, salary) => {
    const query = "UPDATE Employees SET FirstName = ?, LastName = ?, Salary = ? WHERE EmployeeId = ? ";
    const values = [firstname, lastname, salary, id ];
    connection.query(query, values, (err, rows) => {
        if (err){
            console.log(err);
        }
        else{
            return rows;
        }
    });
    return res;
}

export const deleteEmployee = async(id) => {
    const query = "DELETE FROM Employees WHERE EmployeeId = ?";
    const values = [id];
    connection.query(query, values, (err, rows) => {
        if (err){
            console.log(err);
        }
        else{
            return rows;
        }
    });
    return res;
}