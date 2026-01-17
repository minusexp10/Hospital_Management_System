const express = require('express')
const router = express.Router()
const {signup, login, get_patients, add_patients} = require('../controller/authController')

// const {auth} = require('../middlewares/authMiddleware')

router.post('/signup' , signup)
router.post('/login', login)
router.get('/get_patients', get_patients)
router.post('/add_patient', add_patients)

// router.get('/me', auth , (req, res) =>{
//     res.status(200).json({message:"granted", user:req.user})
// })

// router.get('/profile', auth , profile)

module.exports = router;