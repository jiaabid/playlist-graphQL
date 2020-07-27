const controller = require("./playlist");

const root = {
    getPlaylist: controller.playlist,
    song: controller.mySong,
    addSong: controller.add,
    updatePlaylist: controller.update,
    deleteSong: controller.dlt
}
module.exports = root