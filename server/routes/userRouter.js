const router = require('express').Router()
const bcrypt = require('bcrypt')
const salt = bcrypt.genSalt(10)
const jwt = require('jsonwebtoken')
const User = require('../DatabseModal/userModel')


router.get('', (req, res) => {
 res.send('User Router')
})
router.get('/register/:checkemail', async (req, res) => {
 await User.findOne({ userEmail: req.params.checkemail })
  .then((result) => {
   if (result) {
    res.status(200).send(JSON.stringify(result))
   }
  })
  .catch((error) => {
   console.log(error)
  })
})

router.post('/register', (req, res) => {
 const hashPassword = bcrypt.hashSync(req.body.User.userPassword1, 10)
 console.log(req.body.User)
 newUser = new User({
  firstName: req.body.User.firstName,
  lastName: req.body.User.lastName,
  userEmail: req.body.User.userEmail,
  userMobile: req.body.User.userMobile,
  userAddress: req.body.User.userAddress,
  userPassword: hashPassword
 })
  .save()
  .then((result) => {
   if (result) {
    res.status(200).send(JSON.stringify('enroll successfully'))
   }
  })

})

router.post('/authentication', async (req, res) => {
 await User.findOne({ userEmail: req.body.email })
  .then((result) => {
   if (!result) {
    res.status(404).send('user not found')
   }
   else {
    bcrypt.compare(req.body.pass, result.userPassword, (err, hash) => {
     if (err) {
      res.status(304).send('password not match')
     }
     if (hash === false) {
      res.status(404).send('password not match')
     }
     else {
      
      const userData = {
       "id": result._id,
       "FirstName": result.firstName,
       "LastName": result.lastName,
       "Mobile": result.userMobile,
       "Email": result.userEmail,
       "Address":result.userAddress
      }
      const Token = jwt.sign(userData, process.env.Access_Token_Secret)
      res.status(200).send(JSON.stringify(Token))
     }

    })

   }
  })

})
module.exports = router