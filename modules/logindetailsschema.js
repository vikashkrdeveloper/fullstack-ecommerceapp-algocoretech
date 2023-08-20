const database = require('../db/connection');
const jwt = require('jsonwebtoken');
const registerschema = new database.Schema({

    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        unique: true,
        trim: true
    },
    alternatephone: {
        type:Number,
        trim: true
    },
    address: {
        type: String,
        lowercase: true,
        trim: true
    },
    deliveryaddress: {
        type: String,
        lowercase: true,
        trim: true
    },
    district: {
        type: String,
        lowercase: true,
        trim: true
    },
    pincode: {
        type: Number,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: Number,
        trim: true,
        default: 0
    },
    tokens: [
        {
            token: {
                type: String,
                trim: true
            }
        }
    ]


}, { timestamps: true })


registerschema.methods.genratetokens = async function () {
    const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECERT_KEY);
    this.tokens = this.tokens.concat({ "token": token });
    await this.save();
    return token;

}

const modelregisterdetails = database.model('registrations', registerschema);

module.exports = modelregisterdetails;
