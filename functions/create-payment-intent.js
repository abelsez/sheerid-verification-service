const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount, deal_id, customer_email } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, 
      currency: "usd",
      metadata: {
        deal_id: deal_id,
        customer_email: customer_email,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

