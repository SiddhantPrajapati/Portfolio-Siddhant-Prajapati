const express = require('express');
const path = require('path')

const app = express()
const PORT = 3000

//below given line is used public dictory for rrendering content
app.use(express.static(path.join(__dirname, '../public')));

//render index.html file in the root path
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})

//below path is used for render internship certificate
app.get('/achivement/internship', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/files/Internship_Certificate.pdf'))
})

//below path show resume
app.get('/resume', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/files/Siddhant Prajapati.pdf'))
})

//below path show the hackerrank profile
app.get('/achivement/Hackerrank-profile', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/images/Hackerrank-profile.jpg'))
})

//below path is used to show ISRO Certification
app.get('/achivement/ISROCertificate', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/files/ISRO_Certificate.pdf'))
})

//below path is used to show certificate of Research paper
app.get('/achivement/ResearchPaper', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../contents/files/Reserch_Paper_Certificate.pdf'))
})

app.listen(PORT, ()=> {
    console.log('Server is running on port ', PORT)
})