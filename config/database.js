
const mongoose = require("mongoose");

const connectDatabase = () =>{

    mongoose.connect("mongodb://localhost:27017/rurbanweb",{useNewUrlParser:true}).then((data)=>{

        console.log(`mongodb connected with server:${data.connection.host}`);
        
        });
     
};

module.exports = connectDatabase




