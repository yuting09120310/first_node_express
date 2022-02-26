const { text } = require('body-parser');
var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', async function(req, res){
  var result = await db.promise().query(`SELECT * FROM user_info`);
  var data = result[0];
  res.send(data)
})

router.post('/create', function(req, res){
  const{username , password} = req.body;
  if(username && password){
    db.promise().query(`INSERT INTO user_info (name,password) VALUES ('${username}' , '${password}')`);
    res.status(201).send({msg: '創建成功'});
  }
})

router.get('/search/:name', async function(req, res){
  var result = await db.promise().query(`SELECT * FROM user_info WHERE name='${req.params.name}'`);
  var get_Data = result[0];
  res.send(get_Data)
  get_Data.forEach(el => {
    console.log(el.name , el.password)
  });
})


module.exports = router;
