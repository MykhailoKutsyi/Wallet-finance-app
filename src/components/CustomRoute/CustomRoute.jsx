// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from 'redux/session/session-selectors';

const CustomRoute = () => {
  const isAuth = useSelector(selectors.getIsAuth);
  return <>{isAuth ? <Navigate to="/home" /> : <Navigate to="/login" />}</>;
};

export default CustomRoute;
