import React from "react";
import styled from "styled-components";

//media query import
import { devices } from "../../utils/theme";

//svg imports
import FooterSVG from "../../assets/icons/footer_bg.svg";
import Home from "../../assets/icons/home_icon.svg";
import Discover from "../../assets/icons/discover_icon.svg";
import Library from "../../assets/icons/your_library.svg";
import PlaylistIcon from "../../assets/icons/playlists_icon.svg";

const FooterWrapper = styled.div`
  @media (${devices.mobile}) {
    display: block;
    height: 75px;
    width: 100%;
    position: fixed;
    background-color: ${(props) => props.theme.color.background};
    background-image: url(${FooterSVG});
    bottom: 0;
    z-index: 10;
  }

  @media (${devices.desktop}) {
    display: none;
  }
`;

const MenuBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.img`
  width: 30px;
  height: 30px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <MenuBox>
        <Menu src={Home} alt="menu icon" />
        <Menu src={Discover} alt="menu icon" />
        <Menu src={Library} alt="menu icon" />
        <Menu src={PlaylistIcon} alt="menu icon" />
      </MenuBox>
    </FooterWrapper>
  );
};

export default Footer;
