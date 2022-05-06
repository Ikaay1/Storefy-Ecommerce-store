const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const stripe = require("stripe")("sk_test_51Kj1ccLtXe5tfbwl3rX1Uzuuiu3TjP40AJL29QSTTA6UYooYAvuazU1QNqynLfV69Mlunq1NEWFNSwj0UxP1n23n00xIhanhxQ");

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;