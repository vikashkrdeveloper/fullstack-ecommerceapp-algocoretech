const database = require('../modules/addtocartuserschema');
const getdatadatabase = require('../modules/productaddschema');
const cardsetcontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { email, userid } = req.body;
        if (email && userid) {
            const findproduct = await getdatadatabase.findOne({ _id: id });
            const { producttitle, discription, productimage, category, price, country } = findproduct

            const insertdata = database({ email,userid, producttitle, discription, productimage, category, price });
            await insertdata.save();
            res.status(200).send('Add Sucessfully');
        }
        else {
            res.status(500).send('Some technical issue');

        }

    }
    catch (error) {
        res.status(408).send('Some technical issue');
    }
}
module.exports = cardsetcontrollers;