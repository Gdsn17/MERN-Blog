const mongoose = require('mongoose')

const dbUrl = process.env.dbUrl 

mongoose.connect(dbUrl ,
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    //useFindAndModify : false,
    //useCreateIndex : true
})

mongoose.connection.on('connected',()=>
{
    console.log(`Mongoose connected !`)
});
mongoose.connection.on('disconnected',()=>
{
    console.log(`Mongoose disconnected !`)
});
mongoose.connection.on('error',(err)=>
{
    console.log(`Error while connecting ${err}`)
});