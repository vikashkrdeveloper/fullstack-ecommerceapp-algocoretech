const  logoutcontrollers=(req,res)=>{
res.clearCookie('jwttokens',{path:'/'});
res.status(200).send('Logout done');
}
module.exports=logoutcontrollers;