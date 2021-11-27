const dotenv = require('dotenv');
const { MongoClient } = require("mongodb");

// Connection URI

dotenv.config({ path: './config.env'});
const mongoUrl = process.env.DATABASE_URL;


let connection 

async function connectDB() {
    if (connection) return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl,{
            useNewUrlParser: true
        })
        connection = client.db('ProyectoDB')
    } catch (error) {
        console.error('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }
    return connection
}
module.exports= connectDB