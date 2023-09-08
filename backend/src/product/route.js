const express = require('express');
const controller = require('./controller');
const validationMiddleware = require('../../middleware');

const router = express.Router();

router.post('/create-product', validationMiddleware.validateToken, validationMiddleware.validateAdmin, (req, res, next) =>
  controller
    .createproduct(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);


router.get('/getAllProduct', validationMiddleware.validateToken, (req, res, next) =>
  controller
    .getAllProduct()
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.post('/update-product', validationMiddleware.validateToken, validationMiddleware.validateAdmin, (req, res, next) =>
  controller
    .updateproduct(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/getProductById/:id', (req, res, next) =>
  controller
    .getProductById(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/getProductBySlug/:slug', (req, res, next) =>
  controller
    .getProductBySlug(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/deleteproductById/:id', (req, res, next) =>
  controller
    .deleteproductById(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/getProductPhotoById/:id',
  validationMiddleware.validateToken,
  validationMiddleware.validateAdmin, (req, res, next) =>
  controller
    .getProductPhotoById(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

module.exports = router;