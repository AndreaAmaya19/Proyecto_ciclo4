const connectDB = require('../db/db')



module.exports = {
   
       getUsuarios: async () => {
        let db
        let usuarios = []
        try{
          db = await connectDB()
          usuarios = await db.collection('usuarios').find().toArray()
        } catch (error){
          console.error(error)
        }
        return usuarios;
      }
     
    }