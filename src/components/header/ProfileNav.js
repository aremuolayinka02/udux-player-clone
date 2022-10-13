import React from "react";
import styled from "styled-components";
import ProfilePicture from "../../assets/images/profile.png";

const ProfileNavigator = styled.div`
  display: flex;
  align-items: center;
  width: 295px;
  height: 100%;
  background-color: #0f0f0f;
`;

const ProfileImage = styled.img`
  width: 62px;
  height: 62px;
  margin-right: 20px;
  margin-left: 25px;
`;

const ProfileText = styled.p`
  font-family: "Bw Modelica";
  color: #d9d9d9;
  font-size: 1em;
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
