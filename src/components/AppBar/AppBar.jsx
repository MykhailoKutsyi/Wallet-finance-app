import Logo from '../Logo/Logo.jsx';
import sprite from "../../images/sprite.svg";
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Header, RightSideGroup, UserName, ExitBtn, BtnIconWrapper, BtnSpan } from './AppBar.styled';


const AppBar = () => {

    const name = useSelector(authSelectors.getUserName);

    return (
            <Header>
                <Logo />
                <RightSideGroup>
                <UserName>
                    {name}
                </UserName>
                <ExitBtn
                    onClick={() => console.log("click!!!")} // заглушка, замість цього буде діспатч, який змінюватиме у store стан модалки
                >
                    <BtnIconWrapper >
                            <use href={`${sprite}#icon-exit`} />
                    </BtnIconWrapper>
                    <BtnSpan>
                        Exit
                    </BtnSpan>
                    </ExitBtn>
                </RightSideGroup>
            </Header >
    )
};

export default AppBar;