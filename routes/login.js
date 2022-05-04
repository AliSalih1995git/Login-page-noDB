var express = require("express");
var router = express.Router();



/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.login) {
    res.redirect("/home");
    
  }else
  res.render("login", { "value":req.session.loginError});
  req.session.loginError=false
});
router.post("/login", function (req, res) {
  const myEmail = "al@gmail.com";
  const myPassword = "al123";
  console.log(req.body);
  if (myEmail == req.body.email && myPassword == req.body.pw) {
    req.session.user = req.body;
    req.session.login = true;
    res.redirect("/home");
  } else {
    req.session.loginError = true;
    res.redirect("/");
  }
});

router.get("/signup", function (req, res) {
  res.render("signup", { login: true });
});
router.post("/signup", function (req, res) {
  console.log(req.body);
  res.send("Account created");
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});



module.exports = router;
