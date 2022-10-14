import React from "react";
import styled from "styled-components";

const PlaylistCard = styled.div`
  min-width: 10rem;
  min-height: 230px;
  border: 2px solid #707070;
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
`;

const TopSection = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: no-wrap;
`;

const GradientSide = styled.div`
  flex-basis: 10%;
  height: 85%;
  background: ${(props) => props.playlistImageBG};
`;

const PlaylistImageWrapper = styled.div`
  flex-basis: 80%;
  height: 100%;
  border-top: 1px solid #707070;
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const BottomSection = styled.div`
  height: auto;
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: ${(props) => props.playlistInfoBG};
`;

const PlaylistTitle = styled.div`
  font-family: "Bw Modelica";
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.05rem;
`;

const PlaylistArtists = styled.div`
  font-family: "Bw Modelica";
  font-size: 0.5rem;
  color: #ffffff;
  letter-spacing: 0.05rem;
`;

const PlaylistImage = styled.img`
  width: 90%;
`;

export const SinglePlayListCard = ({
  playlistImage,
  playlistTitle,
  playlistArtists,
  playlistImageBG,
  playlistInfoBG,
}) => {
  return (
    <PlaylistCard>
      <Wrapper>
        {/* The top section displays - Linear Colors and the playlist Image */}
        <TopSection>
          <GradientSide playlistImageBG={playlistImageBG} />
          <PlaylistImageWrapper>
            <PlaylistImage src={playlistImage} alt="playlist picture" />
          </PlaylistImageWrapper>
          <GradientSide playlistImageBG={playlistImageBG} />
        </TopSection>

        {/* The bottom section displays the playlist name and the artists */}
        <BottomSection playlistInfoBG={playlistInfoBG}>
          <PlaylistTitle>{playlistTitle}</PlaylistTitle>
          <PlaylistArtists>{playlistArtists}</PlaylistArtists>
        </BottomSection>
      </Wrapper>
    </PlaylistCard>
  );
};

export default SinglePlayListCard;
