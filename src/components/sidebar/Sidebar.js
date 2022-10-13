import React from "react";
import styled from "styled-components";
import BackgroundSVG from "../../assets/icons/sidebar_bg.svg";
import SidebarLink from "./SidebarLink";
import CategorySubHeading from "./CategorySubHeading";
import SubCategory from "./SubCategory";

//Imported Icons to be used on the Sidebar
import Home from "../../assets/icons/home_icon.svg";
import Discover from "../../assets/icons/discover_icon.svg";
import Library from "../../assets/icons/your_library.svg";
import LikedSongs from "../../assets/icons/liked_songs_icon.svg";
import RecentlyPlayed from "../../assets/icons/recently_played_icon.svg";
import CreatePlaylist from "../../assets/icons/create_playlist_icon.svg";
import PlaylistIcon from "../../assets/icons/playlists_icon.svg";
import SearchIcon from "../../assets/icons/icon_search.svg";

const Wrapper = styled.div`
  background-image: url(${BackgroundSVG});
  background-color: #000000;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 295px;
  padding-bottom: 30px;
`;

const HorizontalLine = styled.hr`
  border: 0.1px solid #282828;
  width: 230px;
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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Sidebar;
