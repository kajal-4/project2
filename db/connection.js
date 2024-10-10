const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://kajal_pauly:kajal898@busdb.4zj6q.mongodb.net/BusDB?retryWrites=true&w=majority&appName=BusDB")
.then(()=>{
    console.log("db connected")
})
.catch((error)=>
console.log(error)
);