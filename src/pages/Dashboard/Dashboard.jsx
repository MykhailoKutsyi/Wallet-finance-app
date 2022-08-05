import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refresh } from 'redux/session/session-operations';
import Loader from 'components/Loader/Loader';
import globalSelectors from 'redux/global/global-selectors';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const isLoading = useSelector(globalSelectors.getIsLoading);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      Dashboard
      <ButtonAddTransactions />
    </>
  );
}
