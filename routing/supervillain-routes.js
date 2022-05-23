const router = require('express').Router();

const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors())

const res = require('express/lib/response');
const { send } = require('express/lib/response');
///////

router.get("/findAll", (req, res) => {
    res.send("great success")
})

router.get("/findSupervillains/:name", (req, res) => {
    console.log(req);
    console.log(req.params);
    res.send("found");
})


router.post("/newSuper", (req, res) => {
    const body = req.body;
    console.log(body)
    res.send("well done")
});

router.patch("/update/:id", (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(200).send(`Great job ${req.params.id}`);
})

router.put("/change", (req, res) => {
    console.log("Changed it");
    res.send("Deal with it")
});

router.delete("/delete/:id", (req, res) => {
    res.send("welcome to delete");
    console.log(req.params.id);
});

router.get("/error", (req, res, next)=>{
    throw new Error ("ERRORRRRRRORRR");
});


module.exports = router;
