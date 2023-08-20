const database=require('../modules/logindetailsschema');
const deleteaccountcontrollers=async (req,res)=>{
const id= req.params.id;
await database.deleteOne({_id:id});
res.status(200).send('Deleted sucessfully done');

}

module.exports=deleteaccountcontrollers;