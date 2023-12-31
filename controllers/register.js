const database = require('../modules/logindetailsschema');
const hashingpasswordfunction=require('../helpers/hash');
const register = async (req, res) => {
    try {
        const { name, email, username, phone, password, conformpassword } = req.body;
        const findemail = await database.findOne({ email });
        const findusername = await database.findOne({ username });
        const findphone = await database.findOne({ phone });
        if (name && email && username && phone && password && conformpassword) {

            if (findemail) {
                res.status(400).send('Email id already exist');
            }
            else {
                if (findusername) {
                    res.status(401).send('Username already exist');

                }
                else {
                    if (findphone) {
                        res.status(402).send('Phone Number already exist');

                    }
                    else {
                        if (password === conformpassword) {
                            const hashingpassword=await hashingpasswordfunction(password);
                            const inserdata = new database({ name, email, username, phone, password:hashingpassword });
                            await inserdata.save();
                            res.status(200).send('Registration Sucessfully');

                        } else {
                            res.status(403).send('Password and conformpassword are not matched');


                        }


                    }
                }
            }

        }
        else {
            res.status(500).send('All field require');
        }


    }
    catch (error) {
        res.status(404).send('Ooops Page not found');
    }
}

module.exports = register;