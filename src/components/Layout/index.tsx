import styled from '@emotion/styled';
import React from 'react';

import Body from '../Body';
import Header from '../Header';

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Header title={title} />
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  padding-top: 90px;
`;
