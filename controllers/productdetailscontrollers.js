const database = require('../modules/productaddschema');
const productdetailscontrollers = async (req, res) => {
    try {
        const id=req.params.id;
        const finddata=await database.findOne({_id:id});
        res.status(200).send(finddata);


    }
    catch (error) {
        console.log(error);
    }
}
module.exports = productdetailscontrollers;