'use strict';

const connectDB = require('../db/db')
const { ObjectId } = require('mongodb')
const types = require('./types')

module.exports = {
    Proyecto: {
        inscritos: async ({ inscritos }) => {
            let db
            let inscritosData
            let ids
            try {
                db = await connectDB();
                ids = inscritos ? inscritos.map(id => ObjectId(id)) : []
                inscritosData = ids.length > 0
                    ? await db.collection('usuarios').find(
                        { _id: {$in: ids}}
                    ).toArray() 
                    : []

            } catch (error) {
                console.error(error);
            }
            return inscritosData;
        }
    }


}