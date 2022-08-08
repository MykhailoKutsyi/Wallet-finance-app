import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  LogoBox,
  LogoutBox,
  LogoutText,
  LogoutBtnY,
  LogoutBtnN,
  BtnBox,
  LogoutBackdrop,
} from './ModalLogout.styled';
import Logo from '../Logo/Logo';
import { useDispatch } from 'react-redux';
import { toggleModalLogout } from '../../redux/global/global-slice';
import { logOut } from 'redux/session/session-operations';
import { refresh } from 'redux/finance/finance-slice';
const ModalRoot = document.querySelector('#modal-root');

const ModalLogout = () => {
  const dispatch = useDispatch();

  const onClose = () => dispatch(toggleModalLogout());

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleLogOut = async () => {
    try {
      await dispatch(logOut());
      dispatch(refresh());

      onClose();
    } catch (error) {}
  };
  return createPortal(
    <LogoutBackdrop onClick={onBackdropClick}>
      <LogoutBox>
        <LogoBox>
          <Logo />
        </LogoBox>
        <LogoutText>Do you really want to leave the page?</LogoutText>

        <BtnBox>
          <LogoutBtnY type="button" onClick={handleLogOut}>
            Yes
          </LogoutBtnY>
          <LogoutBtnN type="button" onClick={() => onClose()}>
            No
          </LogoutBtnN>
        </BtnBox>
      </LogoutBox>
    </LogoutBackdrop>,
    ModalRoot
  );
};

export default ModalLogout;
