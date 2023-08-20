const comparepasswordfunction = require('../helpers/comparepassword');
const database = require('../modules/logindetailsschema');
const logincontrollers = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finddata = await database.findOne({ email });
        if (email && password) {
            if (finddata) {
                const hashingpassword = finddata.password;
                const comparepassword = await comparepasswordfunction(password, hashingpassword);
                if (comparepassword) {
                    const token = await finddata.genratetokens();
                    res.cookie('jwttokens', token);
                    res.status(200).send('Login sucessfully');
                }
                else {
                    res.status(400).send('Invalid login details');

                }
            }
            else {
                res.status(400).send('Invalid login details');
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
module.exports = logincontrollers;