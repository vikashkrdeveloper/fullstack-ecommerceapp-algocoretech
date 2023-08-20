const database = require('../modules/productaddschema');
const allproductgetcontrollers = async (req, res) => {
    try {

        const alldata=await database.find();
        res.status(200).send(alldata);

    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }

}
module.exports = allproductgetcontrollers;