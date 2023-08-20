const database = require('../modules/logindetailsschema');
const hashingpasswordfunction = require('../helpers/hash');
const comparepasswordfunction = require('../helpers/comparepassword');
const profilepasswordchangecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const {  password, newpassword, newconformpassword } = req.body;
        if (newpassword && newconformpassword) {
            const finddata = await database.findOne({_id:id });
            if (finddata) {
                const hashpassword = finddata.password;
                const comparepassword = await comparepasswordfunction(password, hashpassword);

                if (comparepassword) {
                    if (newpassword === newconformpassword) {
                        const hashingpassword = await hashingpasswordfunction(newpassword);
                        await database.updateOne({ _id: id }, { password: hashingpassword });
                        res.status(200).send('Password change sucessfully');
                    }
                    else {
                        res.status(408).send('New password and New conformpassword are not matched')
                    }
                }
                else {
                    res.status(406).send('Password Woring Pleased given valid password')

                }


            }
            else {
                res.status(405).send('Some technical issue')
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
module.exports = profilepasswordchangecontrollers;