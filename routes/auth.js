const express = require('express');
const { check, body }  = require('express-validator/check');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', 
    [
        body('email')
            .isEmail()
            .withMessage('wrong email.'),
        body('password','Wrong password')
            .isLength({ min: 5})
            .isAlphanumeric()
    ], 
    authController.postLogin
);

router.post(
    '/signup', 
    [
        check('email')
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, {req}) =>{
/*                 if (value === 'test@test.com'){
                    throw new Error('Not allow');
                }
                return true; */
                return User.findOne({ email: value }).then(userDoc => {
                  if (userDoc) {
                    return Promise.reject(
                        'E-Mail exists already, please pick a different one.'
                    );
                  }
                });
            }), 
        body('password', 'Wrong password setup')
            .isLength({ min: 5})
            .isAlphanumeric(),
        body('confirmPassword').custom( (value , {req})=>{
            if (value !== req.body.password){
                throw new Error('Not Match!');
            }
            return true;
        })
    ],
    authController.postSignup
);

router.post('/logout', authController.postLogout);

router.get('/reset', authController.getReset);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;