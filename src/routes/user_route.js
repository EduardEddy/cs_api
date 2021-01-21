const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user/user_controller')

router.get( '/users', userCtrl.index )
/*router.get('/', function(req, res) {
    res.send('hello world');
 });*/
/* GET users listing. */
/*router.get( '/users', [verificate, adminVerify], userRoute.list )
router.post( '/users', userRequestRules(), validate, userRoute.create )
router.put( '/users', verificate, userRoute.updatedd )*/

module.exports = router;