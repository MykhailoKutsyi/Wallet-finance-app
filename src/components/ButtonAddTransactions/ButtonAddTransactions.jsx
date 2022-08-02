import sprite from 'images/sprite.svg';
import {
  BtnAddTransactions,
  BtnIconWrapper,
} from './ButtonAddTransactions.styled';
import { toggleModalAddTransaction } from 'redux/global/global-slice';
import { useDispatch } from 'react-redux';

const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <BtnAddTransactions
      type="button"
      onClick={() => dispatch(toggleModalAddTransaction())}
    >
      <BtnIconWrapper>
        <use href={`${sprite}#icon-plus`} />
      </BtnIconWrapper>
    </BtnAddTransactions>
  );
};

export default ButtonAddTransactions;
