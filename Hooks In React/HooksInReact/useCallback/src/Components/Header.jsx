import React from "react";

const Header = ({ headerFn }) => {
  console.log("header");
  // headerFn();
  return (
    <>
      <h1>useCallback Hook</h1>
    </>
  );
};
export default React.memo(Header); // React.memo is a higher order component that memoizes the result of a component and only re-renders it when its props change. It is used to optimize performance by preventing unnecessary re-renders of a component when its props have not changed. In this case, we are using React.memo to memoize the Header component, which means that it will only re-render when its props (headerFn) change. This can help improve performance by preventing unnecessary re-renders of the Header component when the App component re-renders due to state changes.

