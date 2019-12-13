'user strict';
var sql = require('../../../config/mysql');

module.exports = {
    getAll: function (req, res, next) {
        sql.query("Select * from workers", function (err, result) {

            if(err) {
                console.log("error: ", err);
                res.json({status:"error", message: err});
            }
            else{
              console.log('Emp : ', result);  
              res.json({status:"success", message: "Emp list found!!!", data:{emps: result}});
            
            }
        }); 
  
    

   }

 }
