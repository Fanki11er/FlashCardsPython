import { ReactComponent as Logo } from "../../../Assets/Svg/Logo.svg";
import { ReactComponent as TransparentLogo } from "../../../Assets/Svg/TransparentLogo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeProps } from "../../../Theme/theme";

const StyledLogo = styled(Logo)`
  height: 150px;
  margin: 25px 0 0 25px;
  user-select: none;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 100px;
    width: 140px;
  }
`;

export default StyledLogo;

export const Test = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const StyledTransparentLogo = styled(TransparentLogo)`
  width: 20%;
  height: 80%;
`;
