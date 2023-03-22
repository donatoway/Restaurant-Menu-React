import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { getPopularService } from '../service/recipes.service'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Gradient from './ui/gradient'
import Card from './ui/card'
import '@splidejs/splide/dist/css/splide.min.css'
export const Pasta = () => {
  const [pasta, setPasta] = useState([]);
  const localstorageKey = "pasta";
  useEffect( () => {
    getPasta();
  }, [])

  const getPasta = async () =>
  {
    const localStore = localStorage.getItem(localstorageKey);
    if (localStore)
    {
      setPasta(JSON.parse(localStore));
    }
    else
    {
        const data = await getPopularService(10, 'pasta');
        //setPopular(data.recipes);
        if (data && data.recipes)
        {
          localStorage.setItem(localstorageKey, JSON.stringify(data.recipes));
          setPasta(data.recipes);
        }
    }
  };

  return (
    <Wrapper>
      <h3>Pasta</h3>
      <Splide aria-label="Popular"
      options={
        {
          perPage : 4,
          arrows : false,
          pagination : false,
          drag : 'free',
          gap : "5rem"
        }
      }
      >
        {pasta.map((item, idx) => {
          return <SplideSlide key={idx}>
            <Card> 
            <p>{item.title}</p> 
            <img src={item.image} alt={item.title}/>
            <Gradient/>
          </Card>
          </SplideSlide>
        })}
      </Splide>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`
export default Pasta;