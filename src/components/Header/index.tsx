import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const Header = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  box-shadow: 1px 1px 3px;
  background-color: white;
`;

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  height: 100%;

  h1 {
    margin: 0;
    line-height: 60px;
  }
`;
