import React from "react";
import styled from "styled-components";

//media query import
import { devices } from "../../utils/theme";

//Image imports
import BannerImage from "../../assets/images/homepage_banner.png";
import OmayLayImage from "../../assets/icons/omay_lay_icon.svg";
import UduxIcon from "../../assets/icons/udux_icon.svg";

const BannerContainer = styled.div`
  position: relative;
  padding-right: 7px;
`;

const Banner = styled.img`
  width: 100%;

  @media screen and (${devices.mobileS}) {
    height: 8rem;
  }
`;

const OmayLay = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 14em;

  @media screen and (${devices.mobileS}) {
    display: none;
  }
`;

const Udux = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 5em;

  @media screen and (${devices.mobileS}) {
    display: none;
  }
`;

export const HomepageBanner = () => {
  return (
    <BannerContainer>
      <Banner src={BannerImage} alt="homepage banner" />
      <OmayLay src={OmayLayImage} alt="omay lay image" />
      <Udux src={UduxIcon} alt="udux image" />
    </BannerContainer>
  );
};

export default HomepageBanner;
