var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首頁' });
});

router.get('/alexTest',function(req,res,next){
  res.render('alexTest')
})

module.exports = router;
