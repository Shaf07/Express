const router = require('express').Router();

const express = require('express');
const app = express();


const cors = require('cors');

const supervillain = require('../persistence/supervillain'); // ../ takes you back a folder first

const res = require('express/lib/response');
const { send } = require('express/lib/response')



router.get("/", (req, res, next) => {
    res.send("it works")
})
app.use(cors())

;
///////

router.post("/newSuper", (req, res, next) => {
    const newSuper = req.body;
    const supervillainObj = new supervillain(newSuper);
    supervillainObj.save()
        .then((result) => {
            res.status(201).send(`${result.name} has been added to database`);
    }).catch((error) => {
        next(error);
    })
});


router.post("/newMultipleSupers", (req, res, next) => {
    const data = req.body;
    data.forEach((supervillainData) => {
        const supervillainObj = new supervillain(supervillainData);
        supervillainObj.save()
        .then((result) => {
            console.log(`${result.name} has been added to database`);
    }).catch((error) => {
        next(error);
    });
    res.status(201).send("All data entries successful");
    })
})


router.get("/getById/:id", (req, res, next) => {
    const id = req.params.id;
    supervillain.findById(id, (error, supervillain) => {
    res.status(200).send(supervillain);
    });
});

router.get("/findAll", async (req, res) => {
    try { 
        const superList = await supervillain.find();
        res.json(superList);
    } catch (error) {
        res.status(500);
    }
});

router.put("/change/:id", (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    supervillain.findByIdAndUpdate(id, data, (error, supervillain) => {
        res.status(200).send("Thanks");
    });
});

router.delete("/delete/:id", (req, res, next) => {
    supervillain.findByIdAndDelete(req.params.id, (error) => {
    res.status(202).send("welcome to delete");
    })
});


router.get("/findSupervillains/:name", (req, res, next) => {
    const name = req.params.name;
    supervillain.find({name: `${name}`}, (error, supervillain) => {
        res.status(200).send(supervillain);
    }) 
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
