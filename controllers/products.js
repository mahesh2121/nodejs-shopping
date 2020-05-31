const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product',
    path: '/admin/add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    products: Product.fetchAll(),
    title: 'Shop',
    path: '/',
  });
};
