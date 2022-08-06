import Logo from '../Logo/Logo.jsx';
import sprite from 'images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import sessionSelectors from '../../redux/session/session-selectors';
import globalSelectors from '../../redux/global/global-selectors';
import { toggleModalLogout } from '../../redux/global/global-slice';
import ModalLogout from 'components/ModalLogout/ModalLogout.jsx';
import {
  Header,
  RightSideGroup,
  UserName,
  ExitBtn,
  BtnIconWrapper,
  BtnSpan,
} from './AppBar.styled';

const AppBar = () => {
  const dispatch = useDispatch();

  // const name = useSelector(sessionSelectors.getUserName);
  const isLogoutModalOpen = useSelector(globalSelectors.getIsModalLogout);

  return (
    <Header>
      <Logo />
      <RightSideGroup>
        {/* <UserName>{name}</UserName> */}
        <UserName>Somebody</UserName>

        <ExitBtn onClick={() => dispatch(toggleModalLogout())}>
          <BtnIconWrapper>
            <use href={`${sprite}#icon-exit`} />
          </BtnIconWrapper>
          <BtnSpan>Exit</BtnSpan>
        </ExitBtn>
      </RightSideGroup>
      {isLogoutModalOpen && <ModalLogout />}
    </Header>
  );
};

export default AppBar;
