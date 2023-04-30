import styled from "styled-components";
import { ReactComponent as User } from "../../../Assets/Svg/User3.svg";
import { ThemeProps } from "../../../Theme/theme";

export const UserPictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  margin-top: -40px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    margin-top: -20px;
  }
`;

export const StyledUser = styled(User)`
  width: 65%;
  height: 65%;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 50%;
    height: 50%;
  }
`;

export const UserName = styled.span`
  border-radius: 15px;
  border: 4px solid black;
  width: fit-content;
  height: 45px;
  margin-top: 10px;
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  padding: 2px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #df6c4f;
  font-weight: bold;
  user-select: none;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.verySmallError};
    height: 34px;
  }
`;
