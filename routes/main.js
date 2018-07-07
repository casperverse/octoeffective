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

router.get('/marketing', (req, res, next) => {
    res.render('main/marketing');
});

router.get('/compras-conjuntas-marketing-publicidad', (req, res, next) => {
  res.render('cashflow/compras-conjuntas-marketing-publicidad');
});

router.get('/intercambios-recursos-marketing', (req, res, next) => {
  res.render('cashflow/intercambios-recursos-marketing');
});

router.get('/venta-recursos-asociados', (req, res, next) => {
  res.render('cashflow/venta-recursos-asociados');
});

module.exports = router;
