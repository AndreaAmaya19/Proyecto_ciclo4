'use strict'

const connectDB = require('../db/db')
const { ObjectId } = require('mongodb')


module.exports = {
    createUsuario: async (root, { input }) => {
        const defaults = {
            estado: "Pendiente",
            rol: "Usuario"
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
    },
    editUser: async (root, { _id, input }) => {
        let db
        let usuario
        try {
            db = await connectDB()
            await db.collection('usuarios').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            )
            usuario = await db.collection('usuarios').findOne(
                { _id: ObjectId(_id) }
            )
        } catch (error) {
            console.error(error)
        }
        return usuario
    }

}
