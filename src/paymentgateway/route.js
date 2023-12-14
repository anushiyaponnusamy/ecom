const express = require('express');
const validationMiddleware = require('../../middleware');
const controller = require('./controller');
const router = express.Router();
router.post('/success', validationMiddleware.validateToken, (req, res, next) =>
    controller
        .success(req)
        .then((data) => res.status(200).send(data))
        .catch((err) => next(err))
);


router.post('/orders', (req, res, next) =>
    controller
        .orders(req)
        .then((data) => res.status(200).send(data))
        .catch((err) => next(err))
);
// router.post("/success", validationMiddleware.validateToken, async (req, res) => {
//     try {
//         // getting the details back from our font-end
//         console.log("success", res)


//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// router.post("/orders", validationMiddleware.validateToken, async (req, res) => {
//     try {
//         const instance = new Razorpay({
//             key_id: process.env.RAZORPAY_KEY_ID,
//             key_secret: process.env.RAZORPAY_SECRET,
//         });

//         const options = {
//             amount: req.body.amount * 100, // amount in smallest currency unit
//             currency: "INR",
//             receipt: "receipt_order_74394",
//         };

//         const order = await instance.orders.create(options);

//         if (!order) return res.status(500).send("Some error occured");

//         res.json(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

module.exports = router;