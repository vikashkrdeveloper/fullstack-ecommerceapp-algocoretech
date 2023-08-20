const database = require('../modules/Productbuyuserschema');
const productbuycontrollers = async (req, res) => {
    try {
        const { price, paymentmethod, producttitle, gstform, deliverychargeform, _id, email, username, name, deliveryaddress, phone } = req.body;
        if (price && paymentmethod && producttitle && deliverychargeform && _id, email && username && name && deliveryaddress && phone) {

            const insertdata = new database({ totalprice: price, paymentmethod: paymentmethod, productname: producttitle, productid: _id, deliverycharge: deliverychargeform, gstcharge: gstform,  email, username, name, deliveryaddress, phone });

            await insertdata.save();
            res.status(200).send('Order Placed');

        }
        else {

            res.status(404).send('Some techical issue');
        }


    }
    catch (error) {
        res.status(404).send('Some techical issue');
    }
}
module.exports = productbuycontrollers;