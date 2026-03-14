import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Contact = () => {
    const {phoneNo, name} = useContext(AppContext);
  return (
    <>
      <h1>Contact</h1>
      <h3>Name:{name}</h3>
      <h3>Phone:{phoneNo}</h3>
    </> 
  );
};
export default Contact;