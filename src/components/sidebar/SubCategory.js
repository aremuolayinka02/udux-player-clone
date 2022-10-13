import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #d9d9d9;
  font-size: 0.9rem;
  font-family: "Bw Modelica";
  margin: 8px 10px 8px 30px;
`;

export const SubCategory = ({ text }) => {
  return <Text>{text}</Text>;
};

export default SubCategory;
