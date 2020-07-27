const Music = require("../model/mongoSchema");
const add = (args) => {
    const newItem = new Music(args)
    return  newItem.save();
}
const update = (args) => {
    return Music.findByIdAndUpdate({ _id: args.id }, args)
}
const dlt = (args) => {
    return Music.findByIdAndDelete({ _id: args.id })
}
const playlist = (args)=>{
    return Music.find({})
}
const mySong = (args)=>{
    return Music.findOne({_id:args.id})
}

module.exports = {add,update,dlt,playlist,mySong}