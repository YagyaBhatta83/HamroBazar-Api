const express = require('express');
const path = require("path");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const product = require('../models/product');
const router = express.Router();

// router.route('/')

router.get("/", (req, res)=>{
    product.find({}, (err,allprod)=>{
        if(err){
            let err = new Error("No product found !");
            err.status = 401;
            return next(err);
        }
        console.log(allprod);
        res.json({
            allprod
        });
    });
});

router.post("/new", auth.verifyUser, (req, res) => {
    const { image } = req.files;


    var CreatedBy = {
        id: req.user._id,
        username: req.user.username
      };
      image.mv(
        path.resolve(__dirname, "..", "public/product", image.name),
        errors => {
            const user = product.create({
              name: req.body.name,
              image: `/product/${image.name}`,
              price: req.body.price,
              condition: req.body.condition,
              CreatedBy: CreatedBy
            });
            res.json({ status: "Product added!" });
        }
      );
})

module.exports = router;