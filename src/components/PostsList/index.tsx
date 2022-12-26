import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const PostsList = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <StyledLi key={post.fields.slug}>
            <Link to={post.fields.slug} itemProp="url">
              <h2>{title}</h2>
              <small>{post.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </Link>
          </StyledLi>
        );
      })}
    </Container>
  );
};

export default PostsList;

const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

const StyledLi = styled.li`
  border-bottom: 1px solid #f1f3f5;

  a {
    display: block;
    padding: 30px 0;
    color: black;
  }
`;
