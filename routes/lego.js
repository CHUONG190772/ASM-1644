const express = require("express");
const LegoModel = require("../models/LegoSchema");
const router = express.Router();


router.get("/", (req, res) => {
    LegoModel.find((err, data) => {
        if (!err) {
            res.render("lego/index", { legos: data });
        }
    });
});
router.get("/api", (req, res) => {
    LegoModel.find((err, data) => {
        if (!err) {
            res.json(data);
        }
    });
});

router.get("/add", (req, res) => {
    res.render("lego/add");
});

router.post("/add", (req, res) => {
    var lego = new LegoModel(req.body);
    lego.save((err) => {
        if (!err) {
            console.log("Add lego succeed !");
            res.redirect("/lego");
        }
    });
});

router.get("/delete/:id", (req, res) => {
    LegoModel.findByIdAndDelete(req.params.id, (err) => {
        if (!err) {
            console.log("Delete lego succeed !")
            res.redirect("/lego")
        }
    })
})

module.exports = router;
