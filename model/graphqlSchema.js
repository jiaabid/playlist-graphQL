const { buildSchema } = require("graphql")

const playlistSchema = buildSchema(`
        type Query{
            getPlaylist:[music]
            song(id:ID!):music
        }
        type Mutation{
            addSong(song_title:String!,singer:String!,release_Date:String!):music
            updatePlaylist(id:ID!,song_title:String!,singer:String!,release_Date:String!):music
            deleteSong(id:ID!):music
        }
        type music{
            id:ID
            song_title:String
            singer:String
            release_Date:String
        }
`)

module.exports = playlistSchema