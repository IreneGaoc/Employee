import express from 'express';
import cors from 'cors';

import employeeRouter from './routes/employees.js'

const port = 3000
const app = express()

app.use(cors());
app.use('/employees', employeeRouter);
app.listen(port, () => {
	console.log(`Listening at http://<ip address>:${port}`)
})