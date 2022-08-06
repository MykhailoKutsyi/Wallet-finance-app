const getIsAuth = state => state.session.isAuth;

const getUserName = state => state.session.user.name;

const getUser = state => state.session.user;

const getTotalBalance = state => state.session.user.balance;

const sessionSelectors = { getIsAuth, getUserName, getUser, getTotalBalance };

export default sessionSelectors;
