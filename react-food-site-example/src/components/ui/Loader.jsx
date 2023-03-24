
import React from 'react'
import {BiLoaderCircle} from 'react-icons/bi'; 
import styled from 'styled-components';

const Loader = () => {
  return (
    <Loading>
      <BiLoaderCircle />
      <p>Loading...</p>
    </Loading>
  )
}

const Loading = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
`

export default Loader