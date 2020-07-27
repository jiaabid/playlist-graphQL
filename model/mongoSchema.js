const mongoose = require("mongoose");
const MusicSchema = mongoose.Schema({
    song_title: String,
    singer: String,
    release_Date: String
})

const Music = mongoose.model("playlist", MusicSchema);
module.exports = Music