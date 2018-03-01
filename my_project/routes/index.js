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
router.post('/enter', function(req, res, next) {
	var username=req.body.username;
	var psw=req.body.psw;
	UserModel.find({username:username,psw:psw},function(err,docs){
		 if(!err&&docs.length>0){
		 	console.log("登陆成功");
		 	res.send("登陆成功");
		 }else{
		 	console.log("登陆失败,请检查用户名和密码");
		 	res.send("登陆失败,请检查用户名和密码");
		 }
	})
});

module.exports = router;
