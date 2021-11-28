'use strict'

const connectDB = require('../db/db')


module.exports = {
    createUsuario: async (root, {input}) => {
       const defaults = {
        estado:"pendiente"
       }
    const newUser = Object.assign(defaults, input)
    let db
    let usuario
    try {
        db = await connectDB()
        usuario = await db.collection('usuarios').insertOne(newUser)
         
        
    } catch (error) {
        console.error(error)
    }
    return newUser
}

}
