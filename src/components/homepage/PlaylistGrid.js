import React from "react";
import styled from "styled-components";
import SinglePlayListCard from "./playlist/SinglePlayListCard";

//Import media query
import { devices } from "../../utils/theme";

//Playlist Image Imports
import Playlist1 from "../../assets/icons/playlist_1.svg";
import Playlist2 from "../../assets/icons/playlist_2.svg";
import Playlist3 from "../../assets/icons/playlist_3.svg";

const Text = styled.h3`
  font-family: "Bw Modelica";
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin: 25px 0px 25px 0px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayListContainer = styled.div`
  margin: 25px 0px 25px 0px;
  display: flex;
  padding-bottom: 10px;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: thin;
  scrollbar-color: #fbba12 #fbba12;

  &::-webkit-scrollbar {
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    background: #000000;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fbba12;
    border-radius: 2px;
    border: 3px solid #fbba12;
  }
`;

export const PlaylistGrid = ({ playlistHeader }) => {
  const playlists = [
    {
      playlistTitle: "Daily Vibes 1",
      playlistImage: Playlist1,
      playlistArtists:
        "Burna Boy, Oxlade, Davido, Tems Wizkid, Tiwa Savage.....",
      playlistInfoBG:
        "linear-gradient(89.79deg, #ab491c -19.39%, #ddae45 123.38%)",
      playlistImageBG:
        "linear-gradient(89.79deg, #ad4c1d -19.39%, #f6b726 123.38%)",
    },
    {
      playlistTitle: "Daily Vibes 2",
      playlistImage: Playlist2,
      playlistArtists: "Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd....",
      playlistInfoBG:
        "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
      playlistImageBG:
        "linear-gradient(89.79deg, #C61522 -19.39%, #030304 123.38%)",
    },
    {
      playlistTitle: "Daily Vibes 3",
      playlistImage: Playlist3,
      playlistArtists: "Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy",
      playlistInfoBG:
        "linear-gradient(89.79deg, #204F9D -19.39%, #ADC0D1 123.38%)",
      playlistImageBG:
        "linear-gradient(89.79deg, #3D66A8 -19.39%, #91AAC7 123.38%)",
    },
  ];

  return (
    <div>
      <Text>{playlistHeader}</Text>
      <PlayListContainer>
        {/* This will loop the playlists twice - to avoid creating another playlist object */}
        {[1, 2].map((item) =>
          playlists.map((playlist, index) => (
            <SinglePlayListCard
              key={index}
              playlistTitle={playlist.playlistTitle}
              playlistImage={playlist.playlistImage}
              playlistArtists={playlist.playlistArtists}
              playlistInfoBG={playlist.playlistInfoBG}
              playlistImageBG={playlist.playlistImageBG}
            />
          ))
        )}
      </PlayListContainer>
    </div>
  );
};

export default PlaylistGrid;
