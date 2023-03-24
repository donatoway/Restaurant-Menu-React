import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Loader from '../components/ui/Loader';
import { getInformationService } from '../service/recipes.service';

const Details = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState("instructions");
    useEffect(() =>
    {
        getDetail()
    }, [id]);

    const getDetail = async () => {
        setLoading(true);
        const data = await getInformationService(id);
        if(data){
            setDetail(data);
        }
        setLoading(false);
    }   
  return (
    <div>Details: {id}
    
    {loading && <Loader />}
    
    {!loading && detail && <DetailWrapper>
        <div>
            <h2>{detail.title}</h2>
            <img src={detail.image} alt={detail.title} />
        </div>
        <Info>
            <Button 
                onClick={() => setTab("instructions")} 
                className={tab === 'instructions' ? 'active' : ''}>
                Instructions
            </Button>
            <Button 
                onClick={() => setTab("ingredients")}
                className={tab === 'ingredients' ? 'active' : ''}>
                Ingredients
            </Button>
            {tab === 'instructions' && <div>
                <h3 dangerouslySetInnerHTML={{__html : detail.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html : detail.instructions}}></h3>
            </div>
            }
             {tab === 'ingredients' && <div>
                <ul>
                {detail.extendedIngredients.map((ing) => {
                    return <li key={ing.id}>
                        {ing.original}
                    </li>
                })}
                </ul>
            </div>}
        </Info>
    </DetailWrapper>}
    </div>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
      background: linear-gradient(35deg, #66ffcc, #313131);
      color:white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`

export default Details
