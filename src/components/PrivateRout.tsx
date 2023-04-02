// import React, { useEffect } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const PrivateRoute = ({ component: Component, path, ...rest }) => {
//   const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

//   useEffect(() => {
//     if (isLoading || isAuthenticated) {
//       return;
//     }
//     const fn = async () => {
//       await loginWithRedirect({
//         appState: {targetUrl: window.location.pathname}
//       });
//     };
//     fn();
//   }, [isLoading, isAuthenticated, loginWithRedirect, path]);

//   const render = props =>
//     isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />;

//   return <Route {...rest} path={path} render={render}/>;
// };

// export default PrivateRoute;