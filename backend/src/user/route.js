const express = require('express');
const controller = require('./controller');
const validationMiddleware = require('../../middleware');

const router = express.Router();

router.post('/signUp', (req, res, next) =>
  controller
    .signUp(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.post('/login', (req, res, next) =>
  controller
    .login(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.post('/updateById', validationMiddleware.validateToken, (req, res, next) =>
  controller
    .updateById(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/getAllUsers', (req, res, next) =>
  controller
    .getAllUsers()
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/getUserByUserId/:userId', (req, res, next) =>
  controller
    .getUserByUserId(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

router.get('/deleteUserByUserId/userId', (req, res, next) =>
  controller
    .deleteUserByUserId(req)
    .then((data) => res.status(200).send(data))
    .catch((err) => next(err))
);

module.exports = router;