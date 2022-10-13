import React from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import SearchNav from "./SearchNav";

const HeaderWrapper = styled.div`
  display: flex;
  height: 97px;
  background-color: #000000;
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
