import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const Header = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">{title}</Link>
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
  max-width: 1280px;
  margin: 0 auto;
  line-height: 60px;

  a {
    font-family: 'MontserratVariable', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 32px;
    color: #000;
    font-weight: bold;
  }
`;
