import { StyledTransparentLogo } from "../../Atoms/Logo/Logo";
import { FooterWrapper, InfoText, InfoWrapper } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoWrapper>
        <StyledTransparentLogo />
        <InfoText>
          {"2023 Created by: Krzysztof Dziedzic & Ewelina Woińska"}
        </InfoText>
      </InfoWrapper>
    </FooterWrapper>
  );
};

export default Footer;
