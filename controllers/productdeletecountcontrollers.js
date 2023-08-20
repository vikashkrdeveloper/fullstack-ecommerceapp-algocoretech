const database=require('../modules/productaddschema');
const productdeletecountcontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        await database.deleteOne({_id:id});
        res.status(200).send('Deleted sucessfully');

    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }
}
module.exports = productdeletecountcontrollers;