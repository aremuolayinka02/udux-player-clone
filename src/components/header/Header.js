import React from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import SearchNav from "./SearchNav";

const HeaderWrapper = styled.div`
  display: flex;
  position: fixed;
  background-color: ${(props) => props.theme.color.background};
  width: 100%;
  height: 87px;
  z-index: 10;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <ProfileNav />
      <SearchNav />
    </HeaderWrapper>
  );
};

export default Header;
