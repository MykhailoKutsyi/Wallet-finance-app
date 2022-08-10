import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectors from 'redux/session/session-selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectors.getIsAuth);
  return <>{isAuth ? <Navigate to="/" /> : children}</>;
};

export default PublicRoute;
