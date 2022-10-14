import React from "react";
import styled from "styled-components";

const Link = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.textColor};
  display: inline-block;
  margin: 40px 10px 15px 10px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  display: inline-block;
  padding-left: 30px;
  transform: translate(0, 2px);
`;

const RightIcon = styled.img`
  width: 18px;
  height: 18px;
  display: inline-block;
  padding-left: 60px;
  transform: translate(0, 6px);
`;

export const CategorySubHeading = ({ iconSrc, text, rightIcon }) => {
  return (
    <div>
      <Icon src={iconSrc} alt="category subheading icon" />
      <Link>{text}</Link>
      <RightIcon src={rightIcon} alt="right icon" />
    </div>
  );
};

export default CategorySubHeading;
