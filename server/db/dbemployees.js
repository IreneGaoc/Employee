import mysql from 'mysql';

export const connect = async () => {
    const connection = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        port:process.env.DB_PORT,
        database:process.env.DB_DATABASE,

    }) 
    let client = await connection.connect((err) => {
    if (client) {
        console.log("Successfully connected");
    }
    else {
        console.log("Error");
    }
    });
    return client;
}

export const getAll = async() => {



    return res;
}

export const addEmployee = async() => {



    return res;
}

export const editEmployee = async(id) => {



    return res;
}

export const deleteEmployee = async(id) => {



    return res;
}