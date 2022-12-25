import styled from '@emotion/styled';
import React from 'react';

import Body from '../Body';
import Header from '../Header';
// import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <Header title={title} />
      <Body />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: beige;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding-top: 60px;
`;
