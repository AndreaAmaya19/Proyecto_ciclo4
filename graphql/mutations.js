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
    },
    createProyecto: async (root, { input }) => {
        const defaults = {
            estado_proyecto: "Inactivo",
            fase: "EnDesarrollo"
        }
        const newProyect = Object.assign(defaults, input)
        let db
        let proyecto
        try {
            db = await connectDB()
            usuario = await db.collection('proyectos').insertOne(newProyect)


        } catch (error) {
            console.error(error)
        }
        return newProyect
    },
    addPeople: async (root, {proyectoID, usuarioID}) => {
        let db 
        let proyecto 
        let usuario

        try {
            db = await connectDB();
            proyecto = await db.collection('proyectos').findOne({
                _id: ObjectId(proyectoID)
            })
            usuario = await db.collection('usuarios').findOne({  
                _id: ObjectId(usuarioID)
            })

            if(!proyecto || !usuario) throw new Error('Usuario o Proyecto NO existe')
            await db.collection('proyectos').updateOne(
                { _id: ObjectId(proyectoID)},
                { $addToSet: {inscritos: ObjectId(usuarioID)}}
            )
        } catch (error) {
            console.error(error);
        }
        return proyecto;
    }


}
