const mongoose=require('mongoose')
const colors=require('colors')

//mongoDB connection
const connectDb=async()=>{ 
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect to database ${mongoose.connection.host}`.white.bgMagenta)
    } catch (error) {
        console.log('Database Connection Error'.bgRed.white)
    }
}

module.exports=connectDb;