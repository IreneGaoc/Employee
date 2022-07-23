import express from 'express';
import cors from 'cors';
import employeeRouter from './routes/employees.js'
import bodyparser from 'body-parser';

const port = 3000
const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use('/', employeeRouter);
app.listen(port, () => {
	console.log(`Listening at http://<ip address>:${port}`)
})