const express = require('express');
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})

app.get('/resume', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/files/Siddhant Prajapati.pdf'))
})

app.listen(PORT, ()=> {
    console.log('Server is running on port ', PORT)
})