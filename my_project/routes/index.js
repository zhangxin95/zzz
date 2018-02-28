var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'ECSHOP登录中心' });
});
router.get('/back', function(req, res, next) {
  res.render('back', { title: 'ECSHOP管理中心' });
});
router.get('/addgoods', function(req, res, next) {
  res.render('addgoods', { title: '' });
});
router.get('/goodslist', function(req, res, next) {
  res.render('goodslist', { title: '' });
});

module.exports = router;
