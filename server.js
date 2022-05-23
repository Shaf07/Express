const express = require('express');
const app = express();
const cors = require('cors');
const supervillainRoute = require('./routing/supervillain-routes.js')
const mongoose = require('./persistence/database.js')

app.use(cors())
app.use(express.json());
app.use(supervillainRoute);

const myServer = app.listen(5015, () => {
    console.log("the server is up")
})

const res = require('express/lib/response');


app.use((err, req, res, next)=> {
    console.log(err.stack);
    console.log("Post failed");
    next();
});

