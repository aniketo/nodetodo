const mong = require("mongoose");

const TodoSchema=new mong.Schema({
    todo:{
        type:String,
        required:true,

    }
});

module.exports=new mong.model("Todo",TodoSchema);
