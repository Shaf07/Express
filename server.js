const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors())


const res = require('express/lib/response');




app.use(express.json());

const myServer = app.listen(5015, () => {
    console.log("the server is up")
})

app.get("/findSupervillains/:name", (req, res) => {
    console.log(req);
    console.log(req.params);
    res.send("found");
})

app.get("/findAll", (req, res) => {
    res.send("great success")
})

app.post("/newSuper", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("well done")
});

app.patch("/update/:id", (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).send(`Great job ${req.params.id}`);
})

app.put("/change", () => {
    console.log("Changed it")
});

app.delete("/delete/:id", (req, res) => {
    res.send("welcome to delete");
    console.log(req.params.id);
});