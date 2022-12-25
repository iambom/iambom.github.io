import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

const PostsList = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <li key={post.fields.slug}>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                {title}
              </Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </li>
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
  height: 3000px;
`;
