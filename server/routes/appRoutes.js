import express from 'express'
import appControllers from '../controllers/appControllers.js'
import cartControllers from '../controllers/cartController.js'


const router = express.Router()


router.route('/register').post(appControllers.register)
router.route('/login').post(appControllers.login)
router.route('/refresh').post(appControllers.validateAuth)
router.route('/cart').post(cartControllers.addCart)
// Get walkers
router.route('/walkers').get(appControllers.getWalkers)





export default router




















// router.route('/').get(appControllers.getAllContacts)
// router.route('/addcontact').post(appControllers.addContact)
// router.route('/deletecontact').post(appControllers.deleteContact)
// router.route('/updatecontact').patch(appControllers.updateContact)
// router.route('/searchcontact').post(appControllers.searchContact)
