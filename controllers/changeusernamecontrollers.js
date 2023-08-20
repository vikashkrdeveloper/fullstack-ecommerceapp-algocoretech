const database = require('../modules/logindetailsschema')
const changeusernamecontrollers = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, newusername } = req.body;
        const finduser = await database.findOne({ _id: id });
        if (username && newusername) {
            if (finduser) {
                if (finduser.username===username) {
                    const newuserfind = await database.findOne({username: newusername })
                    if (newuserfind) {
                        res.status(403).send('User name already exist')
                    }
                    else {
                        await database.updateOne({ _id: id }, { username: newusername });
                        res.status(200).send('UserName Update Sucessfully');
                    }
                }
                else {
                    res.status(406).send('Username are not matched pleased valid user name')
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
module.exports = changeusernamecontrollers;