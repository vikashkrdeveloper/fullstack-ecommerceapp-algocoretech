const database=require('../modules/addtocartuserschema');
const cartlistcontrollers = async (req, res) => {
    try {
        const id=req.params.id;
        const data=await database.find({userid:id});
        res.status(200).send(data);

    }
    catch (error) {
        console.log("Some technical issue");
    }

}
module.exports = cartlistcontrollers;