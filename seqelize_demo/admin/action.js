const Product = require("../model/Product");

exports.addProduct = (req, res, next) => {
  console.log("Body", req.body);
  let title = req.body.title;
  let price = req.body.price;
  Product.create({
    title: title,
    price: price
  })
    .then(result => {
      console.log("Product created", result);
      res.status(201).json(result);
    })
    .catch(error => {
      res.json(error);
      console.log("Product creation failed", error);
    });
};

exports.getAll = (req, res, next) => {
  let limit = req.query.limit;
  let offset = req.query.offset;
  Product.findAll()
    .then(result => {
      console.log("Product findAll", result);
      res.status(200).json(result);
    })
    .catch(error => {
      res.json(error);
      console.log("Product findAll failed", error);
    });
};

exports.getProduct = (req, res, next) => {
  let id = req.params.productId;

  Product.findByPk(id)
    .then(result => {
      console.log("getProduct findByPk", result, id);
      res.status(200).json(result);
    })
    .catch(error => {
      res.json(error);
      console.log("Product findAll failed", error);
    });
};
