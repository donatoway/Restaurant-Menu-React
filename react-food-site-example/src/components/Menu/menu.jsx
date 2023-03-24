import React from 'react'
import styled from 'styled-components'
import Category from '../Category'
import { NavLink } from 'react-router-dom';
import {MdRestaurantMenu} from 'react-icons/md'; 
import Search from './Search';

const Menu = () => {
  return (
    <div>
        <Nav>
          <MdRestaurantMenu />
          <Logo to={"/"}>Explore Food</Logo>
        </Nav>
        <Search/>
        <Category />
    </div>
  )
}

const Logo = styled(NavLink)`
  text-decoration : none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default Menu