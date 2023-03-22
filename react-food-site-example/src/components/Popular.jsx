import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { getPopularService } from '../service/recipes.service'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Card from './ui/card'
import Gradient from './ui/gradient'
import '@splidejs/splide/dist/css/splide.min.css'
export const Popular = () => {
  const [popular, setPopular] = useState([]);
  const localstorageKey = "popular";
  useEffect( () => {
    getPopular();
  }, [])

  const getPopular = async () =>
  {
    const localStore = localStorage.getItem(localstorageKey);
    if (localStore)
    {
      setPopular(JSON.parse(localStore));
    }
    else
    {
        const data = await getPopularService();
        //setPopular(data.recipes);
        if (data && data.recipes)
        {
          localStorage.setItem(localstorageKey, JSON.stringify(data.recipes));
          setPopular(data.recipes);
        }
    }
  };

  return (
    <Wrapper>
      <h3>Popular</h3>
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
        {popular.map((item, idx) => {
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
export default Popular;