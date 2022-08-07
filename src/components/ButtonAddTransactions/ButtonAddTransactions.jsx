import { BtnAddTransactions } from './ButtonAddTransactions.styled';
import { toggleModalAddTransaction } from 'redux/global/global-slice';
import { useDispatch } from 'react-redux';
import Icon from 'components/Icon/Icon';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <BtnAddTransactions
      type="button"
      onClick={() => dispatch(toggleModalAddTransaction())}
    >
      <Icon id={'#icon-plus'} width={20} height={20} />
    </BtnAddTransactions>
  );
};

export default ButtonAddTransactions;
