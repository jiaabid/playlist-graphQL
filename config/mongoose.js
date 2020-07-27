const mongoose = require("mongoose");

const con =mongoose.connect("mongodb://127.0.0.1:27017/playlist",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}); 
