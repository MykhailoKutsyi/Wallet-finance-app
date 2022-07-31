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
import { logOut } from 'redux/session/session-operations';
const ModalRoot = document.querySelector('#modal-root');

export default function ModalLogaut({ onClose }) {
  const dispatch = useDispatch();

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
  }, [onClose]);

  const handleLogOut = () => {
    dispatch(logOut());
    onClose();
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
}
