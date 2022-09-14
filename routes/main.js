

const router = require ('express').Router();
const {index, about,  contact, music, admin, login} = require('../controllers/mainControllers')

const accessAdmin = require('../middlewares/accessAdmin')
router
     .get('/', index)
     .get('/about', about)
     .get('/contact', contact)
     .get('/music', music)
     .get('/admin',accessAdmin,admin)
     .get('/login', login)



module.exports = router;