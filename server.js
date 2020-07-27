const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
require("./config/mongoose");
const schema = require("./model/graphqlSchema");
const resolver = require("./controller/resolver");
const Music = require("./model/mongoSchema");
const addCheck = async()=>{
    try{
        const item = new Music({song_title:"hello",singer:"swift",release_Date:"2020/10/21"})
        await item.save()
    }catch(err){
        console.log(err)
    }
   
}
// addCheck()
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.listen(4400, () => console.log("server started!"))
