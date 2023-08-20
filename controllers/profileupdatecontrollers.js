const database = require('../modules/logindetailsschema');
const profileupdatecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { address, district, pincode, phone, deliveryaddress, alternatephone } = req.body;
        if (address && district && pincode && phone && deliveryaddress && alternatephone) {
            const userphone = await database.findOne({ phone })
            if (userphone) {
                res.status(402).send('Phone number already exist')

            }
            else {
                await database.updateOne({ _id: id }, { address, district, pincode, phone, deliveryaddress, alternatephone });
                res.status(200).send('Update sucessfully');
            }

        }
        else {
            res.status(500).send('All field require')
        }

    }
    catch (error) {
        console.log(error)
        res.status(407).send('Some technical issue');
    }

}
module.exports = profileupdatecontrollers;