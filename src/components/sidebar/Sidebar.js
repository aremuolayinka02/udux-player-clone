import React from "react";
import styled from "styled-components";
import SidebarLink from "./SidebarLink";
import CategorySubHeading from "./CategorySubHeading";
import SubCategory from "./SubCategory";

//Import media query
import { devices } from "../../utils/theme";

//Imported Icons to be used on the Sidebar
import BackgroundSVG from "../../assets/icons/sidebar_bg.svg";
import Home from "../../assets/icons/home_icon.svg";
import Discover from "../../assets/icons/discover_icon.svg";
import Library from "../../assets/icons/your_library.svg";
import LikedSongs from "../../assets/icons/liked_songs_icon.svg";
import RecentlyPlayed from "../../assets/icons/recently_played_icon.svg";
import CreatePlaylist from "../../assets/icons/create_playlist_icon.svg";
import PlaylistIcon from "../../assets/icons/playlists_icon.svg";
import SearchIcon from "../../assets/icons/icon_search.svg";

const Container = styled.div`
  @media screen and (${devices.desktop}) {
    display: inline-block;
    position: fixed;
    margin-top: 87px;
    max-height: 100%;
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: #fbba12 #fbba12;

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.background};
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fbba12;
      border-radius: 6px;
      border: 3px solid #fbba12;
    }
  }

  @media screen and (${devices.mobile}) {
    display: none;
  }
`;

const SidebarWrapper = styled.div`
  background-image: url(${BackgroundSVG});
  background-color: ${(props) => props.theme.color.background};
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 285px;
  padding-bottom: 150px;

  @media screen and (${devices.mobile}) {
    display: none;
  }
`;

const HorizontalLine = styled.hr`
  border: 0.1px solid #282828;
  width: 220px;
`;

export const Sidebar = () => {
  const topLinks = [
    {
      iconSrc: Home,
      text: "Home",
      defaultColor: true,
    },
    {
      iconSrc: Discover,
      text: "Discover",
      defaultColor: true,
    },
  ];

  const middleLinks = [
    {
      iconSrc: Library,
      text: "Your Library",
      defaultColor: true,
    },
    {
      iconSrc: LikedSongs,
      text: "Liked Songs",
      defaultColor: false,
    },
    {
      iconSrc: RecentlyPlayed,
      text: "Recently Played",
      defaultColor: true,
    },

    {
      iconSrc: CreatePlaylist,
      text: "Create Playlist",
      defaultColor: true,
    },
  ];

  const subCategories = [
    "Riffs & Runs",
    "African Heat",
    "Gidi Nights",
    "Running out of Playlist na....",
    "Saturday was a Good Day",
    "Gidi Nights",
  ];

  return (
    <Container>
      <SidebarWrapper>
        {
          //Iterate the first links before the the horizontal break
          //I used a default color props to make changing the link/text color of an active link easier
          topLinks.map((navLink, index) => (
            <SidebarLink
              iconSrc={navLink.iconSrc}
              text={navLink.text}
              defaultColor={navLink.defaultColor}
              key={index}
            />
          ))
        }
        <HorizontalLine />
        {middleLinks.map((navLink, index) => (
          <SidebarLink
            iconSrc={navLink.iconSrc}
            text={navLink.text}
            defaultColor={navLink.defaultColor}
            key={index}
          />
        ))}

        {/* The SubHeading */}
        <CategorySubHeading
          iconSrc={PlaylistIcon}
          rightIcon={SearchIcon}
          text="My Playlists"
        />
        <HorizontalLine />

        {
          // This will loop over the array of sub-categories twice
          [1, 2].map((item) =>
            subCategories.map((text, index) => (
              <SubCategory text={text} key={index} />
            ))
          )
        }
      </SidebarWrapper>
    </Container>
  );
};

export default Sidebar;
