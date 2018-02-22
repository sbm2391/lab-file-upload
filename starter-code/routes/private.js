var express = require('express');
var router = express.Router();
var multer = require("multer")
var Picture = require("../models/picture")
var upload = multer({ dest: './public/images/' });

/* GET home page. */
router.get('/upload', function(req, res, next) {
    res.render('profile/form_pic');
  })

.post('/upload', upload.single('photo'), function(req, res){
    const pic = new Picture({
      name: req.body.name,
      path: `/images/${req.file.filename}`,
      originalName: req.file.originalname
    });
    console.log(pic)
  
    pic.save((err) => {
      if(err) console.log(err);
      console.log("correcto")
      res.redirect('/');
    });
  });
  
//   router.get("/", (req,res)=>{
//     Picture.find()
//     .then(doc=>{
//       res.render("list_picture", {pictures:doc});
//     })
//     .catch(err=>{
//       console.log(err)
//     })
//   })
  module.exports = router;
  