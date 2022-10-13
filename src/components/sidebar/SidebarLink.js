import React from "react";
import styled from "styled-components";

//Active speaker Icon Import
import Speaker from "../../assets/icons/speaker_icon.svg";

const Link = styled.p`
  font-family: "Bw Modelica";
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => (props.defaultColor ? "#d9d9d9" : "#FBBA12")};
  display: inline-block;
  margin: 10px 10px 15px 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 21px;
  display: inline-block;
  padding-left: 30px;
  transform: translate(0, 2px);
`;

const SpeakerIcon = styled.img`
  width: 20px;
  height: 21px;
  display: inline-block;
  padding-left: 30px;
  transform: translate(0, 6px);
`;

export const SidebarLink = ({ iconSrc, text, defaultColor }) => {
  return (
    <div>
      <Icon src={iconSrc} alt="inactive icons" />
      <Link defaultColor={defaultColor}>{text}</Link>
      {!defaultColor && <SpeakerIcon src={Speaker} alt="active icons" />}
    </div>
  );
};

export default SidebarLink;
