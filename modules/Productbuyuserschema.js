const database = require('../db/connection');

const Productbuyuserschema = new database.Schema({
    email: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    deliveryaddress: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    productid: {
        type: String,
        trim: true
    },
    productname: {
        type: String,
        trim: true
    },
    paymentmethod: {
        type: String,
        trim: true
    },
    totalprice: {
        type: Number,
        trim: true

    },
    gstcharge: {
        type: Number,
        trim: true

    },
    deliverycharge: {
        type: Number,
        trim: true

    }

}, { timestamps: true })
const addtocartusermodel = database.model('productbuy', Productbuyuserschema)

module.exports = addtocartusermodel;