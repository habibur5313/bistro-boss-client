import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxios from "../../../../CustomHooks/useAxios";
import useCart from "../../../../CustomHooks/useCart";
import useAuth from "../../../../CustomHooks/useAuth";

const CheakOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const [cart] = useCart();
  const { user } = useAuth();
  const price = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axiosSecure.post("/create-checkout-session", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      setError(confirmError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setSuccess(
          `payment Successfully.your transaction id : ${paymentIntent.id}`
        );
        const payment = {
                    email : user.email,
                    price,
                    transactionId : paymentIntent.id,
                    date : new Date(),
                    cartIds : cart.map(item => item._id),
                    menuIds : cart.map(item => item.CartId),
                    status : 'pending'
        };
        const res = await axiosSecure.post('/payments',payment)
        console.log(res.data);
        
      }
    }
  };
  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn mt-10 btn-primary"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        <p className="text-green-600">{success}</p>
      </form>
    </div>
  );
};

export default CheakOutForm;
