import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Loader from '../components/ui/Loader';
import Title from '../components/ui/Title';
import _ from 'lodash';
import { getRecipesComplexSearchService } from '../service/recipes.service';


const Searched = () => {

    const {searchValue} = useParams();
    const [results,setresults] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() =>
    {
        getSearch()
    }, [searchValue]);

    const getSearch = async () => {
        setLoading(true);
        const data = await getRecipesComplexSearchService(10, "", searchValue);
        if(data && data.results){
            setresults(data.results);
        }
        setLoading(false);
    }   
  return (
    <div>
        <Title>Stai cercando: {_.capitalize(searchValue)}</Title>

        {loading && <Loader />}

        {!loading && <Grid>
        {results.map(item => {
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
export default Searched;
