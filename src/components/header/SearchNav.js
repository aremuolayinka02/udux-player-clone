import React from "react";
import styled from "styled-components";
import LeftArrow from "../../assets/icons/left_arrow.svg";
import RightArrow from "../../assets/icons/right_arrow.svg";
import SearchSVG from "../../assets/icons/icon_search.svg";

//media query import
import { devices } from "../../utils/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  background-color: transparent;

  @media only screen and (${devices.mobile}) {
    display: none;
  }
`;

const DirectionArrows = styled.img`
  width: 38px;
  height: 31px;
  margin-left: 10px;
  cursor: pointer;

  @media only screen and (${devices.mobile}) {
    display: none;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  z-index: 10;
  left: 10px;
  top: 10px;

  @media only screen and (${devices.mobile}) {
    display: none;
  }
`;

const SearchInput = styled.input`
  max-width: 471px;
  border: 1px solid #d9d9d9;
  background-color: transparent;
  font-family: "Bw Modelica";
  color: #d9d9d9;
  padding: 10px 40px 10px 40px;
  font-size: 1rem;

  @media only screen and (${devices.mobile}) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  margin-left: 15px;

  @media only screen and (${devices.mobile}) {
    display: none;
  }
`;

export const SearchNav = () => {
  return (
    <Wrapper>
      <div>
        <DirectionArrows src={LeftArrow} alt="left arrow" />
        <DirectionArrows src={RightArrow} alt="right arrow" />
      </div>

      <SearchContainer>
        {/* Used `img` because it is cleaner for svg imports */}
        <SearchIcon src={SearchSVG} alt="search icon" />
        <SearchInput />
      </SearchContainer>
    </Wrapper>
  );
};

export default SearchNav;
