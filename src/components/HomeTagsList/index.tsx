import React from "react"
import styled from "@emotion/styled"

const HomeTagsList = () => {
  return (
    <Container>
      <li>
        <a href="">React</a>
      </li>
      <li>
        <a href="">React Native</a>
      </li>
    </Container>
  )
}

export default HomeTagsList

const Container = styled.ul`
  background-color: cyan;
  max-width: 360px;
  position: absolute;
  top: 0;
  left: 0;
`
