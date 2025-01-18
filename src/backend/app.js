import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the Blockchain-Based Digital Identity Verification System!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
