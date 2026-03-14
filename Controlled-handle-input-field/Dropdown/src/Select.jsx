import { useState } from "react";
import "./App.css";

function Select() {
  const [paymentMode, setPaymentMode] = useState("");
  console.log(paymentMode);

  return (
    <>
      <select
        name=""
        id=""
        value={paymentMode}
        onChange={(e) => setPaymentMode(e.target.value)}
      >
        <option value="">Select Payment Mode</option>
        <option value="upi">UPI</option>
        <option value="card">CARD</option>
        <option value="cod">COD</option>
      </select>
    </>
  );
}

export default Select;
