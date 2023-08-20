const mongoose=require('mongoose');
const databaseaddress=process.env.DATABASE_ADDRESS;

mongoose.connect(databaseaddress)
.then(()=>{
    console.log('Database connected');
})
.catch(()=>{
    console.log('Database not connnected');
})

module.exports=mongoose;