const database = require('../modules/productaddschema');
const editprofilecontrollers = async (req, res) => {
    try {
        const id=req.params.id;
        const { producttitle, discription, productimage, category, subcategory, price, country } = req.body;
        if (producttitle && discription && productimage && category && subcategory && price && country) {
            await database.updateOne({_id:id},{ producttitle, discription, productimage, category, subcategory, price, country });
            res.status(200).send('Edit sucessfuly')

        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }

}
module.exports = editprofilecontrollers;