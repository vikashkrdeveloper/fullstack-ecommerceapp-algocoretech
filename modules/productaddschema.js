const database = require('../db/connection');
const productaddschema = new database.Schema({
    producttitle: {
        type: String,
        trim: true
    }, discription: {
        type: String,
        trim: true
    }, productimage: {
        data: Buffer,
        contentType:String,
    }, category: {
        type: String,
        trim: true

    }, subcategory: {
        type: String,
        trim: true

    }, price: {
        type: Number,
        trim: true

    }, country: {
        type: String,
        trim: true

    }
}, { timestamps: true });

const productaddmodels = database.model('productdetails', productaddschema);
module.exports = productaddmodels;