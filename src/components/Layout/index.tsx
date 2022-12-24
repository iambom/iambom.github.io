import styled from '@emotion/styled';
import React from 'react';

import Body from '../Body';
import HomeTagsList from '../HomeTagsList';
// import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <div>안녕하세요~ 나는 누구~~ </div>
      <HomeTagsList />
      <Body />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: beige;
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;
