import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const prirceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IhLaZFlW1D9o01yQTvGlMsvLK3VOHGz5EUAtf9wd1vXoBziHcgH2GxovyROA3ghG5dsbpas4BDiTGz1fjZ3e2HU00i2748CxM";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Crwn Lothing Ltd"
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      currency="GBP"
      amount={prirceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
