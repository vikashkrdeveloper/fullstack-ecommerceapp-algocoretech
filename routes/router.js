const express = require('express');
const route = express.Router();
const homecontrollers = require('../controllers/home');
const registercontrollers = require('../controllers/register');
const logincontrollers = require('../controllers/logincontrollers');
const cartcontrollers = require('../controllers/cartcontrollers');
const userprofilecontrollers = require('../controllers/userprofilecontrollers');
const allproductgetcontrollers = require('../controllers/allproductgetcontrollers');
const resetpasswordcontrollers = require('../controllers/resetpasswordcontrollers');
const authdatamiddleware = require('../middleware/authdatamiddleware');
const authcontrollers = require('../controllers/authcontrollers');
const productbuycontrollers = require('../controllers/productbuycontrollers');
const logoutcontrollers = require('../controllers/logoutcontrollers');
const productbuyingcontrollers=require('../controllers/productbuyingcontrollers');
const cardsetcontrollers = require('../controllers/cardsetcontrollers');
const cartlistcontrollers = require('../controllers/cartlistcontrollers');
const editprofilecontrollers=require('../controllers/editprofilecontrollers');
const addproductcontrollers = require('../controllers/addproductcontrollers')
const productdeletecountcontrollers = require('../controllers/productdeletecountcontrollers');
const admindashboardcontrollers = require('../controllers/admindashboardcontrollers');
const changeusernamecontrollers = require('../controllers/changeusernamecontrollers');
const profileupdatecontrollers = require('../controllers/profileupdatecontrollers');
const cartmiddleware = require('../middleware/cartmiddleware');
const userprofilemiddleware = require('../middleware/userprofilemiddleware');
const cartdeletecountcontrollers = require('../controllers/cartdeletecountcontrollers');
const admindashboardmiddleware = require('../middleware/admindashboardmiddleware');
const deleteaccountcontrollers = require('../controllers/deleteaccountcontrollers');
const profilepasswordchangecontrollers = require('../controllers/profilepasswordchangecontrollers');
const productdetailscontrollers = require('../controllers/productdetailscontrollers');
route.get('/', homecontrollers);
route.get('/cart/user', cartmiddleware, cartcontrollers);
route.get('/user/profile', userprofilemiddleware, userprofilecontrollers);
route.get('/authdata', authdatamiddleware, authcontrollers);
route.get('/logout', logoutcontrollers);
route.get('/all/products', allproductgetcontrollers);
route.get('/product/:id', productdetailscontrollers);
route.get('/cart/list/:id', cartlistcontrollers);
route.get('/allproduct/buying/details', productbuyingcontrollers);
route.get('/admin/dashbord', admindashboardmiddleware, admindashboardcontrollers);
route.post('/register', registercontrollers)
route.post('/login', logincontrollers);
route.post('/product/buy/payment/details', productbuycontrollers);
// route.post('/addproduct', addproductcontrollers)
route.post('/cart/set/:id', cardsetcontrollers);
route.put('/resetpassword', resetpasswordcontrollers)
route.put('/profile/passsword/change/:id', profilepasswordchangecontrollers)
route.put('/changeusername/:id', changeusernamecontrollers)
route.put('/profile/update/:id', profileupdatecontrollers)
route.put('/editproduct/:id', editprofilecontrollers)
route.delete('/profile/delete/:id', deleteaccountcontrollers)
route.delete('/admin/product/delete/:id', productdeletecountcontrollers)
route.delete('/cart/product/delete/:id', cartdeletecountcontrollers)
const multer=require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
route.post('/addproduct', upload.single('image'), addproductcontrollers)





module.exports = route;