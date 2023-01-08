import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const HomeTagsList = ({ tags }) => {
  return (
    <Container>
      <p>태그 목록</p>
      <StyledUl>
        {tags.map((tag, index) => {
          const link = tag.fieldValue.replace(' ', '-');
          return (
            <li key={index}>
              <Link to={`/tags?q=${link}`}>{tag.fieldValue}</Link>
              <span> ({tag.totalCount})</span>
            </li>
          );
        })}
      </StyledUl>
    </Container>
  );
};

export default HomeTagsList;

const Container = styled.div`
  width: 180px;
  position: absolute;
  top: 50px;
  left: -220px;

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
    list-style: none;
    a {
      color: black;
    }
  }
`;
