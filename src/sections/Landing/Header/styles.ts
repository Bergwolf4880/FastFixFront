import styled from "@emotion/styled";
import { HeaderBg } from "../../../assets";
import { FastFixLogo } from "../../../assets";

export const HeaderWrapper = styled.div`
  margin-bottom: 50px;
`;

export const HeaderComponent = styled.header`
  display: flex;
  width: 100%;
  background-image: url(${HeaderBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  justify-content: space-between;
`;

export const HeaderMotto = styled.div`
  display: flex;
  font-size: 2.8vh;
  padding: 10vh 0 0 30vw;
  color: white;
`;

export const HeaderText = styled.div`
  font-size: 3vh;
  width: fit-content;
  color: white;
  white-space: nowrap;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  gap: 5vw;
  padding: 10vh 2vw 0 0;
  font-size: 30px;
  color: white;
`;

export const SeparationLine = styled.div`
  position: absolute;
  right: 0;
  width: 80%;
  height: 1vh;
  background-color: orange;
`;

export const HeaderLogoContainer = styled.div`
  width: 150px;
  height: 150px;
  //------------------------
  position: relative;
  right: 150px;
  bottom: 160px;
`;

export const HeaderLogo = styled.img`
  width: 250px;
  height: 250px;
`;
HeaderLogo.defaultProps = { src: FastFixLogo };