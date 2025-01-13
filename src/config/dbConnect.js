const { default: mongoose } = require("mongoose");


export const dbConnect = async () =>{
    try {

        if(mongoose.connection.readyState >= 1){
            console.log("Database is already connected!");
            return;
            
        }
        
        let connection = await mongoose.connect(process.env.MONGO_URL)
        if(connection){
            console.log("Database Connected Successfully!");
            
        }
    } catch (error) {
        console.log("Error in connecting Database!");
        
    }
}

