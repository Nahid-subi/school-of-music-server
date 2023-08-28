const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('music is Dancing')
})

app.listen(port, () => {
    console.log(`music is dancing on port ${port}`)
})