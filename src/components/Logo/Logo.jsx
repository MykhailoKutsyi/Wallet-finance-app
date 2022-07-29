import sprite from "../../images/sprite.svg";
import { LogoWrapper, LogoIconWrapper, LogoSpan, LogoLink } from "./Logo.styled";

const Logo = () => {
    return (
        <LogoWrapper>
            <LogoLink
                // після налаштування Route буде додано посилання на домашню сторінку
                        href="#"
            >
                <LogoIconWrapper>
                    <use
                        href={`${sprite}#icon-wallet`}
                    />
                </LogoIconWrapper>
                <LogoSpan>
                    Wallet
                </LogoSpan>
            </LogoLink>
        </LogoWrapper>
    )
};

export default Logo;