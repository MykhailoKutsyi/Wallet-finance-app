// export default function ProtectedRoute() {
//   return <>ProtectedRoute</>;
// }
// import PropTypes from 'prop-types'
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import sessionSelectors from 'redux/session/session-selectors';

export default function PrivateRoute({ children }) {
  // const isAuth = useSelector(sessionSelectors.getIsAuth);
  // console.log(isAuth);
  // return isAuth ? children : <Navigate to="/login" />;
  return children;
}

PrivateRoute.propTypes = {
  // children: PropTypes.object.isRequired,
};
