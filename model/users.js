/**
 * Created by Administrator on 5/2/2018.
 */
var mongoose=require('mongoose');
var passport=require('passport');
var schema=mongoose.Schema;
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