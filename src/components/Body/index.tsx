import styled from '@emotion/styled';
import React from 'react';

const Body = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Body;

const Container = styled.div`
  background-color: pink;
  width: 100%;
  position: relative;
  height: 3000px;
`;
