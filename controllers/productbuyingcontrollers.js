const  database=require('../modules/Productbuyuserschema');
const productbuyingcontrollers = async(req,res) => {
    try {
        const allproductadata= await database.find();
        res.status(200).send(allproductadata);

    }
    catch (error) {
        console.log('Some technical issue');
    }

}
module.exports = productbuyingcontrollers;