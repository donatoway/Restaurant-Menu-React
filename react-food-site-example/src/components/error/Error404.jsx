import React from 'react'
import styled from 'styled-components'

const Error404 = () => {
  return (
    <Wrapper>
      404
      <p>Not Found</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 10rem 10rem;
  pading: 2rem;
  font-size: 5rem;
  margin: 0 auto;
  text-align: center;
  font-weight: 800;
  p {
    font-size: 2rem;
  }
`

export default Error404