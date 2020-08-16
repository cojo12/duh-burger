const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js")

router.get('/', (req, res) => {
  burger.selectAll(function (data) {
    let hbObject = {
      burger: data
    };
    res.render('index', hbObject);
  });
});

router.post('/burger', (req, res) => {
  burger.insertOne(
    ['burger_name',],
    [req.body.burger_name,],
    function(result){
      res.status(200).end();
    });
});

router.put('/burgers/:id', (req, res) => {
  let condition = req.params.id
  console.log("condition", condition)
  burger.updateOne(
    {inhaled: true},
    condition,
    function (result) {
      res.status(200).end();
    })
});

module.exports = router;