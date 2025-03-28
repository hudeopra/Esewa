import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './src/DB/db.js';
import { EsewaInitiatePayment, paymentStatus } from './src/controller/esewa.controller.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4550;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/initiate-payment", EsewaInitiatePayment);
app.post("/payment-status", paymentStatus);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

