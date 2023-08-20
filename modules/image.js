const database = require('../db/connection');

const imageuserschema = new database.Schema({
    imageData:{
    },// Store image data as binary
    contentType: String, // Store content type (e.g., 'image/jpeg')

}, { timestamps: true })
const imageusermodel=database.model('imagedata',imageuserschema)

module.exports = imageusermodel;