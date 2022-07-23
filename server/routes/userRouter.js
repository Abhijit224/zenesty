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
    console.log(req.body.User.firstName)
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
                            "FirstName": result.firstName,
                            "LastName": result.lastName,
                            "Mobile": result.userMobile,
                            "Email": result.userEmail
                        }
                        const Token = jwt.sign(userData, process.env.Access_Token_Secret)
                        res.status(200).send(JSON.stringify(Token))
                    }

                })

            }
        })

})
module.exports = router