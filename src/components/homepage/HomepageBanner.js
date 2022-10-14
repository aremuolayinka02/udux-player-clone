import React from "react";
import styled from "styled-components";

//Image imports
import BannerImage from "../../assets/images/homepage_banner.png";
import OmayLayImage from "../../assets/icons/omay_lay_icon.svg";
import UduxIcon from "../../assets/icons/udux_icon.svg";

const BannerContainer = styled.div`
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
`;

const OmayLay = styled.img`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 14em;
`;

const Udux = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 5em;
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
