const express = require('express');
const router = express.Router();
const graduates = require('../_data/graduates');
const projects = require('../_data/projects');

router.get('/api/graduates', (req, res) => {
    res.status(200).send(graduates);
})

router.get('/api/projects', (req, res) => {
    res.status(200).send(projects)
})

router.get('*', (req, res) => {
    res.status(400).send(`<div style="color:red;"> 404: oh noes, there's nothing in here the page you're trying to reach does not exist <br> 🙄 Check the address or <a href="https://twitter.com/IrolehVincent">report an error to the developer</a> </div>`);
})

module.exports = router;