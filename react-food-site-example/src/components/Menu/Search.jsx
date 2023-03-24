import React, { useState } from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Navigate, useNavigate } from 'react-router-dom';
const Search = () => {
    const [Search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${Search}`);
    }

    return (
    <FormStyle onSubmit={handleSubmit}>
        <div>
            <FaSearch/>
            <input 
                type="text" 
                value={Search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
            
        </div>
        {Search}
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #66ffcc, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search ;
