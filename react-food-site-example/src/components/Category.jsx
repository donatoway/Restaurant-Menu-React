import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'; 
import {FiHome} from 'react-icons/fi'; 
import {GiNoodles, GiChopsticks} from 'react-icons/gi'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Category = () => {
  return (
    <List>
        <SLink to={"/"} >
            <FiHome />
            <h4>Home</h4>
        </SLink>
        <SLink to={"/cuisine/italian"} >
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/american"} >
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/thai"} >
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/japanese"} >
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration:none;
    background: linear-gradient(35deg, #66ffcc, #313131);
    width: 6rem;
    height: 6rem;
    cursor:pointer;
    transform: scale(0.7);
    h4 {
        color: white;
        font-size: 0.9rem;
    }
    svg {
        color: white;
        font-size: 1.9rem;
    }
    &.active {
        background: linear-gradient(35deg, #313131, #66ffcc);
        h4 {
            color: white;
            font-size: 0.8rem;
        }
    
        svg {
            color: white;
            font-size: 1.8rem;
        }
    }
`;

export default Category