const connectDB = require('../db/db')
const {ObjectId} = require('mongodb');


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
      },
      getProyectos: async () => {
        let db
        let proyectos = []
        try{
          db = await connectDB()
          proyectos = await db.collection('proyectos').find().toArray()
        } catch (error){
          console.error(error)
        }
        return proyectos;
      }
     
    }