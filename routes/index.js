var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
  res.redirect('/posts');
});

router.use('/signup',require('./signup'));
router.use('/signin',require('./signin'));
router.use('/signout',require('./signout'));
router.use('/posts',require('./posts'));

// 404 page
router.use(function (req, res) {
    if (!res.headersSent) {
        res.status(404).render('404');
    }
});

module.exports = router;
