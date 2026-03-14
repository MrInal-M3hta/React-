import { createContext } from "react";

export const AppContext = createContext();

// const ContextProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   return (
//     <AppContext.Provider value={{ count, setCount }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
// export { ContextProvider };

const ContextProvider = (props) => {
  const phoneNo = "+91 1234567890";
  const name = "Mrinal Mehta";

  return (
    <AppContext.Provider value={{ phoneNo, name }}>
      {/* If we have to pass one variable inside value we use single curly bracket like this value = {phoneNo} */}
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
