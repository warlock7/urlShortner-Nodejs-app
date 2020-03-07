const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const con = await mongoose.connect('mongodb connection url', {
            useNewUrlParser: true, useUnifiedTopology: true
        })

        console.log("MongoDB Connected")
    }
    catch(err) {
        console.log(`Error: ${err.message}`)
        process.exit(1)
    }
}

module.exports = connectDB