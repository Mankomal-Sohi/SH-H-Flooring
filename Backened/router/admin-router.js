const express=require('express');
const adminController= require("../controllers/admin-controller");
const router=express.Router();

router.route('/users').get(adminController.getAllUsers);
router.route('/requestinfo').get(adminController.getAllInfo);
module.exports=router;