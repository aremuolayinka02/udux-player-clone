import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => props.theme.color.textColor};
  font-size: 0.8rem;
  font-family: "Bw Modelica";
  margin: 10px 10px 10px 30px;
`;

export const SubCategory = ({ text }) => {
  return <Text>{text}</Text>;
};

export default SubCategory;
