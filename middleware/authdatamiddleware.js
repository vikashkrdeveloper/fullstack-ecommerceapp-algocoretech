const jwt = require('jsonwebtoken');
const database = require('../modules/logindetailsschema');
const authdatamiddleware=async (req,res,next)=>{
    try {
        const token = req.cookies.jwttokens;
        const verifytoken = await jwt.verify(token, process.env.SECERT_KEY);
        const rootUser = await database.findOne({ _id: verifytoken._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = token;
        req.rootUser = rootUser;
        req.Userid = rootUser._id;
        next();
    }
    catch (error) {
        res.status(408).send('Admin not login');
    }
}
module.exports=authdatamiddleware;