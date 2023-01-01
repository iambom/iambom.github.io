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
            <article className="post-list-item">
              <header>
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    {title}
                  </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </header>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </article>
          </StyledLi>
        );
      })}
    </Container>
  );
};

export default PostsList;

const Container = styled.ul`
  background-color: white;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;

  small {
    color: gray;
  }
`;

const StyledLi = styled.li`
  list-style: none;

  a {
    display: block;
    color: black;
  }
`;
