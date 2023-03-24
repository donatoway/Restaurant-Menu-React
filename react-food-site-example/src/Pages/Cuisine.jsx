import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash';
import Title from '../components/ui/Title';
import styled from 'styled-components';
import Loader from '../components/ui/Loader';


const Cuisine = () => {
  const localstorageKey = "cuisine"

  const { type } = useParams();
  const [cuisine,setCuisine] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getCuisine = async () => {
      setLoading(true);
      //const localStore = localStorage.getItem(localstorageKey)
      const localStore = false;
  
      if(localStore){
        setCuisine(JSON.parse(localStore)); 
      }else{
        const data = await getRecipesComplexSearchService(10,type)
        if(data && data.results){
          localStorage.setItem(localstorageKey,JSON.stringify(data.results));
          setCuisine(data.results);
        }
      }
      setLoading(false);
    }
    getCuisine();  
  },[type])

 
  
  return (
    <div>

      <Title>{_.capitalize(type)}</Title>
 
      {loading && <Loader />}

      {!loading && <Grid>
        {cuisine.map(item => {
            return <Card key={item.id}>
              <Link to={`/details/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          }
        )}
      </Grid>}


    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(20rem,1fr));
  grid-gap: 3rem; 
`

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  a {
    text-decoration: none;
    width: 100%;
  }
  h4 {
    text-align: center;
    padding:1 rem;
  }
`

export default Cuisine