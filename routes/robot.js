const express = require("express");
const RobotModel = require("../models/RobotSchema");
const router = express.Router();


router.get("/", (req, res) => {
  RobotModel.find((err, data) => {
    if (!err) {
      res.render("robot/index", { robots: data });
    }
  });
});

router.get("/api", (req, res) => {
  RobotModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  });
});

router.get("/add", (req, res) => {
  res.render("robot/add");
});

router.post("/add", (req, res) => {
  var robot = new RobotModel(req.body);
  robot.save((err) => {
    if (!err) {
      console.log("Add robot succeed !");
      res.redirect("/robot");
    }
  });
});

router.get("/detail/:id", (req, res) => {
  //lấy giá trị id của document gửi từ url
  var robot_id = req.params.id;
  //tìm kiếm document trong collection theo id
  RobotModel.findById(robot_id, (err, data) => {
    if (!err) {
      //render ra file detail chứa dữ liệu của document
      res.render("robot/detail", { robot: data });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  RobotModel.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      console.log("Delete robot succeed !")
      res.redirect("/robot")
    }
  })
})

router.get("/edit/:id", (req, res) => {
  RobotModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.render("robot/edit", { robot: data })
    }
  })
})

router.post("/edit/:id", (req, res) => {
  RobotModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (!err) {
      console.log("Edit robot succeed !")
      res.redirect("/robot")
    }
  })
})

module.exports = router;
