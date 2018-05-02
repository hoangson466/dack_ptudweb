var express = require('express');
var mongoose=require('mongoose');
var schema=mongoose.Schema;
var router = express.Router();

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

var usersSchema=new schema(
    {
        username: {type:String},
        password: {type:String},
        name:{type:String},
        email:{type:String},
        role_id: {type:Number}
    }
);
module.exports=mongoose.model('Users',usersSchema);