const database = require('../modules/logindetailsschema');
const hashinngpasswordfunction=require('../helpers/hash')
const resetpasswordcontrollers = async (req, res) => {
    try {
        const { email, newpassword, conformpassword } = req.body;
        const finddata = await database.findOne({ email });
        if (email && newpassword && conformpassword) {
            if (finddata) {
                if (newpassword === conformpassword) {
                    const hashingpassword= await hashinngpasswordfunction(newpassword);
                    const updatedata=await database.updateOne({email},{password:hashingpassword})
                    res.status(200).send('Resetpassword done')

                }
                else {

                    res.status(400).send('New password and confirmpassword are not matched')
                }
            }
            else {
                res.status(401).send('Email id not exist please signup')
            }
        }
        else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        res.status(404).send('Some technical issue');
    }

}

module.exports = resetpasswordcontrollers;