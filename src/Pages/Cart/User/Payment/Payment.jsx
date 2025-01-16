import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheakOutForm from "./CheakOutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51QfeQcG01kWL4rRaQ75WuUQEGfhA7KluV4TNvISCXVYv5yORnmgJSL0t5BzP3aX3gjxJz8nF3aMjZvsrnk02USrg002n0cWdHX");
const Payment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheakOutForm />
      </Elements>
    </div>
  );
};

export default Payment;
