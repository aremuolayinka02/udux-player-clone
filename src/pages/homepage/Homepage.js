import React from "react";
import styled from "styled-components";
import HomepageBanner from "../../components/homepage/HomepageBanner";
import PlaylistGrid from "../../components/homepage/PlaylistGrid";

//Import media query
import { devices } from "../../utils/theme";

const HomepageWrapper = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.color.background};
  margin-top: 87px;
  width: 100%;

  @media only screen and (${devices.mobile}) {
    margin-bottom: 74px;
  }
`;

const Container = styled.div`
  margin-left: 295px;
  margin-right: 10px;
  margin-top: 3px;
  margin-bottom: 10px;
  border: 1.5px solid ${(props) => props.theme.color.secondaryBG};
  padding: 7px 0px 7px 7px;

  @media only screen and (${devices.mobile}) {
    margin: 5px;
  }
`;

export const Homepage = () => {
  return (
    <HomepageWrapper>
      <Container>
        <HomepageBanner />
        <PlaylistGrid playlistHeader="Welcome Back!" />
        <PlaylistGrid playlistHeader="Cheers to the Weekend " />
      </Container>
    </HomepageWrapper>
  );
};

export default Homepage;
