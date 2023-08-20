const database = require('../modules/productaddschema');
const addproductcontrollers = async (req, res) => {
    try {
        const { producttitle, discription,category, subcategory, price, country } = req.body;
        const uploadedImage = req.file;
      
        
        if (producttitle && discription  && category && subcategory && price && country) {

            const insertdata =new database({ producttitle, discription, productimage:{data: uploadedImage.buffer,contentType:uploadedImage.mimetype}, category, subcategory, price, country });
            await insertdata.save()
            res.status(200).send('Add sucessfuly')

        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }

}
module.exports = addproductcontrollers;
