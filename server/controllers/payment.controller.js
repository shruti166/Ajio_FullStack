const stripe = require("stripe")(
  "sk_test_51MJwQKSF6OWyGK68KhpflcFYy5f8AEN2GWNdZy5QWPKeXNW5WVBOzDgGAOU1cPJUSA8DOIkIToZoL4wLalKeyBDK001ueXidVA"
);
const payment = async (body) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: body.name,
            },
            unit_amount: body.amount * 100,
          },
          quantity: "1",
        },
      ],

      success_url: `http://localhost:3000`,
      cancel_url: `http://localhost:3000`,
    });
    return { url: session.url };
  } catch (error) {
    return error;
  }
};
module.exports = payment;
