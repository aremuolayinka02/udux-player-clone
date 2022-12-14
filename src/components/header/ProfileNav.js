import React from "react";
import styled from "styled-components";
import ProfilePicture from "../../assets/images/profile.png";

const ProfileImage = styled.img`
  width: 52px;
  height: 52px;
  margin-right: 20px;
  margin-left: 25px;
`;

const ProfileNavigator = styled.div`
  display: flex;
  align-items: center;
  width: 285px;
  flex-shrink: 1;
  height: 100%;
  background-color: ${(props) => props.theme.color.secondaryBG};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.textColor};
  font-size: 1em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfileNav = () => {
  return (
    <ProfileNavigator>
      <ProfileImage src={ProfilePicture} alt="profile image" />
      <ProfileText>Hey! Aleem</ProfileText>
    </ProfileNavigator>
  );
};

export default ProfileNav;
