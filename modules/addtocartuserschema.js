const database = require('../db/connection');

const addtocartuserschema = new database.Schema({
    email: {
        type: String,
        trim: true
    },
    userid: {
        type: String,
        trim: true
    },
    producttitle: {
        type: String,
        trim: true
    },
    discription: {
        type: String,
        trim: true
    },
    productimage: {
        data: Buffer,
        contentType:String
    },
    category: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true

    }

}, { timestamps: true })
const addtocartusermodel=database.model('cartdata',addtocartuserschema)

module.exports = addtocartusermodel;