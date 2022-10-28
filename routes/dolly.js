const express = require("express");
const DollyModel = require("../models/DollySchema");
const router = express.Router();


router.get("/", (req, res) => {
  DollyModel.find((err, data) => {
    if (!err) {
      res.render("dolly/index", { dollys: data });
    }
  });
});

router.get("/api", (req, res) => {
  DollyModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  });
});

router.get("/add", (req, res) => {
  res.render("dolly/add");
});

router.post("/add", (req, res) => {
  var dolly = new DollyModel(req.body);
  dolly.save((err) => {
    if (!err) {
      console.log("Add dolly succeed !");
      res.redirect("/dolly");
    }
  });
});

router.get("/detail/:id", (req, res) => {
  //lấy giá trị id của document gửi từ url
  var dolly_id = req.params.id;
  //tìm kiếm document trong collection theo id
  DollyModel.findById(dolly_id, (err, data) => {
    if (!err) {
      //render ra file detail chứa dữ liệu của document
      res.render("dolly/detail", { dolly: data });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  DollyModel.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      console.log("Delete dolly succeed !")
      res.redirect("/dolly")
    }
  })
})

router.get("/edit/:id", (req, res) => {
  DollyModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.render("dolly/edit", { dolly: data })
    }
  })
})

router.post("/edit/:id", (req, res) => {
  DollyModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (!err) {
      console.log("Edit dolly succeed !")
      res.redirect("/dolly")
    }
  })
})

module.exports = router;
