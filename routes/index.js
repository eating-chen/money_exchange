var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db_option = {
    host: 'localhost',
    user: 'root',
    password: 'xxxxx',
    database:'money_change',
    port: '8889'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '貨幣轉換系統' });
});

router.post('/money', function(req, res, next) {
  var origin_money = req.body.origin;
  var origin_money_num = req.body.origin_money;
  var change_money = req.body.change;

  var query ='SELECT * FROM exchange where country="'+origin_money+'" or country="'+change_money+'"';
  var connection = mysql.createConnection(db_option);
  connection.query(query, function(err, rows, fields){
      var need_compute = 0;
      if(err) throw err;
      console.log(rows);
      if(origin_money == change_money){
        need_compute = origin_money_num;
      }else if(origin_money != change_money && origin_money == 'NT'){
        need_compute = parseFloat(origin_money_num)/parseFloat(rows[0].exchange_rate);
      }else if(origin_money != change_money && change_money == 'NT'){
        need_compute = parseFloat(origin_money_num)*parseFloat(rows[0].exchange_rate);
      }else if(origin_money != change_money && origin_money != 'NT' && change_money == 'NT'){
        for(var idx=0; idx < rows.length; idx++){
          if(origin_money == rows[idx].country && change_money != rows[idx].country){
            need_compute = origin_money_num*parseFloat(rows[idx].exchange_rate);
          }else if(change_money == rows[idx].country && origin_money != rows[idx].country){
            need_compute = parseFloat(need_compute)/parseFloat(rows[idx].exchange_rate);
          }
        }
      }
      var res_money = {
        money: need_compute
      };
      res.end(JSON.stringify(res_money));
  });
});

module.exports = router;
