const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  //   res.sendFile(path.join(process.cwd(),"Views","form.html")); after ejs remove this line and add the below
//   res.render('form',{user:"zain"});

// by query param
res.render('form',{user:req.query.name || "zain" }); 

});

router.post("/submit", (req, res) => {
  res.send(req.body);
});
module.exports = router;
