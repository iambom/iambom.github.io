import styled from '@emotion/styled';
import React from 'react';

import Contents from '../Contents';
import HomeTagsList from '../HomeTagsList';

const Body = () => {
  return (
    <Container>
      <HomeTagsList />
      <Contents />
    </Container>
  );
};

export default Body;

const Container = styled.div`
  background-color: pink;
  width: 100%;
  position: relative;
  height: 3000px;
`;
