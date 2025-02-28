const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors(
    {
        origin:'http://localhost:3000',
        credentials:true
    }
))
const PORT = 5000;

app.listen(PORT,()=>
{
    console.log("app is running on port 5000");
})