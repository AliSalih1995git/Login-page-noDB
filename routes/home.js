var express = require('express');
var router = express.Router();


const verifyLogin = (req, res, next) => {
    if (req.session.login) 
    next();
    else 
    res.redirect("/login");
  };
/* GET users listing. */



router.get("/", verifyLogin, (req, res) => {
    let product=[
      {
        name:"Sandwitch",
        description:"Subway fast food",
        price:"RS: 80",
        img:"https://b.zmtcdn.com/data/pictures/chains/2/19102382/9c9c5614ae656da63c55327768e32850_o2_featured_v2.jpg?output-format=webp",
        no:1
        
      },
      {
        name:"Dosha",
        description:"Arya Bavan Restuarent",
        price:"RS: 120",
        img:"https://b.zmtcdn.com/data/pictures/7/19462667/b14436b3247cab5f833fe2fa266735c7_o2_featured_v2.jpg?output-format=webp",
        no:2
      
      },
      {
        name:"Idli",
        description:"Hotel New",
        price:"RS: 90",
        img:"https://b.zmtcdn.com/data/pictures/8/20126138/0ca82a9d11f01b4e5be3780f8fd40a81_o2_featured_v2.jpg",
        no:3
      
      },
      {
        name:"Mandhi",
        description:"Kazhana Restuarent",
        price:"RS: 180",
        img:"https://content.jdmagicbox.com/comp/malappuram/x8/9999px483.x483.170607223955.i1x8/catalogue/daily-fresh-food-corner-malappuram-restaurants-lqj1qjt21u.jpg?clr=#2c2c3a?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A",
        no:4
      
      }
      
    ]
    res.render("home",{product});
  });

module.exports = router;
