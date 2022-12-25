import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const HomeTagsList = () => {
  return (
    <Container>
      <p>태그 목록</p>
      <StyledUl>
        <li>
          <Link to="/">전체 보기</Link>
          <span> (5)</span>
        </li>
        <li>
          <Link to="/">React</Link>
          <span> (2)</span>
        </li>
        <li>
          <Link to="/">React Native</Link>
          <span> (3)</span>
        </li>
      </StyledUl>
    </Container>
  );
};

export default HomeTagsList;

const Container = styled.div`
  width: 200px;
  position: absolute;
  top: 20px;
  left: 40px;

  p {
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
  }
`;

const StyledUl = styled.ul`
  li {
    font-size: 14px;
    line-height: 2;
    a {
      color: black;
    }
  }
`;
