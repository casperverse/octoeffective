const router = require('express').Router();
const async = require('async');
const Gig = require('../models/gig')
const User = require('../models/user')



router.route('/')
.get((req, res, next) => {
    res.render('main/home');
});


router.route('/about')
.get((req, res, next) => {
    res.render('main/about');
});



module.exports = router;
