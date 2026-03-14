import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Footer = () => {
    const {phoneNo, name} = useContext(AppContext);
  return (
    <>
      <h1>Footer</h1>
      <h3>Phone:{phoneNo}</h3>
      <h3>Name:{name}</h3>
    </>
  );
};
export default Footer;