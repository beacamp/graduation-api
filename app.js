const express = require('express');
const app = express();
const router = require('./routes/index');

app.use(router);



const port = process.env.PORT || 7000;
app.listen(port, ()=> {
    console.log(`Server up on port ${port}`);
});
