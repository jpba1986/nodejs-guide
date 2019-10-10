const User = require('../models/user');

exports.getLogin = (req, res, next) => {
        res.render('auth/login', {
          path: '/login',
          pageTitle: 'Login',
          isAuthenticated: false
        });
  };
  
exports.postLogin = (req, res, next) => {
      User.findById('5d974ae6c85e472b80598b12')
        .then(user => {
          req.session.isLoggedIn = true;    
          req.session.user = user;
          req.session.save(err=>{
            console.log(err);
            res.redirect('/');          
          });
        })
        .catch(err => console.log(err));

};

exports.postLogout = (req, res, next) => {
  req.session.destroy(()=>{
    res.redirect('/'); 
  });
};