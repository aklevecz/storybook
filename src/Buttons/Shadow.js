import React from "react";
import styled from "styled-components";

const ShadowButton = styled.button`
  background: white;
  border: 0.1rem black solid;
  box-shadow: 4px 4px black;
  color: red;
  padding: 0.6rem;
`;

const Shadow = () => {
  return <ShadowButton>Send It</ShadowButton>;
};

export default Shadow;
