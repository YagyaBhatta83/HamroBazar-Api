const express = require('express');
const path = require("path");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const products = require('../models/products');
const router = express.Router();

router.route('/')

router.get("/", (req, res)=>{
    products.find({}, (err,allprod)=>{
        if(err){
            let err = new Error("No product found !");
            err.status = 401;
            return next(err);
        }
        res.json({
            allprod
        });
    });
});

router.post("/new", auth.verifyUser, (req, res) => {
    var CreatedBy = {
        id: req.user._id,
        email: req.user.email
      };
      image.mv(
        path.resolve(__dirname, "..", "public/product", image.name),
        errors => {
            const user = Products.create({
              name: req.body.name,
              image: req.body.name,
              price: req.body.price,
              CreatedBy: CreatedBy
            });
            res.json({ status: "Product added!" });
        }
      );
})

module.exports = router;