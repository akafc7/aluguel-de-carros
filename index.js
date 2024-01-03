import connectDatabase from './database/db.js';
import express from 'express';
import dotenv from 'dotenv';
import carRoute from './routes/car.route.js'
import userRoute from './routes/user.route.js'
import aluguelRoute from './routes/aluguel.route.js';

dotenv.config();

const port = 3000;
const app = express();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute)
app.use("/car", carRoute)
app.use("/aluguel", aluguelRoute)

app.listen(port, () => console.log(`Server running on port: ${port}`))