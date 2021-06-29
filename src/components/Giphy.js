import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import giphy from '../img/giphy.png';

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'bo7l8y4GctiRWvN7WQKm6NKC2TrmJEjc',
          limit: 20,
        },
      });
      console.log(results);
      setData(results.data.data);
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return data.map((el) => {
      return (
        <div key={el.id}>
          <GifImg src={el.images.fixed_height.url} />
        </div>
      );
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await axios('https://api.giphy.com/v1/gifs/search', {
      params: {
        api_key: 'bo7l8y4GctiRWvN7WQKm6NKC2TrmJEjc',
        q: search,
      },
    });
    setData(results.data.data);
  };

  return (
    <Container>
      <SearchContainer>
        <StyledImg src={giphy} />
        <StyledForm>
          <StyledInput
            value={search}
            onChange={handleSearchChange}
            type="text"
          />
          <SubmitButton onClick={handleSubmit} type="submit" />
        </StyledForm>
      </SearchContainer>
      <Grid>{renderGifs()}</Grid>
    </Container>
  );
};

const Container = Styled.div`
min-height: 100vh;

`;

const Grid = Styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
align-items: center;
justify-items: center;
width: 80%;
gap: 1rem;
margin: auto;
padding: 1.5rem;
@media (max-width: 635px){
  grid-template-columns: repeat(2,1fr);
`;

const SearchContainer = Styled.div`
width: 100%;
display: flex;
margin: auto;
flex-direction: column;
`;

const StyledImg = Styled.img`
width: 45%;
margin: auto;
`;

const GifImg = Styled.img`
width: 25.8vw;
height: 25.8vh;
object-fit: fill;
@media (max-width: 635px){
  width: 38vw;
  height: 38vw;
}


`;

const StyledForm = Styled.form`
display: flex;
width: 50%;
margin: auto;
justify-content: center;
align-items: center;
`;

const StyledInput = Styled.input`
width: 50%;
height: 31.6px;
`;

const SubmitButton = Styled.input`
background-color: #c147c3;
font-size: 1.5rem;
border: 0;
padding-top: 5px;
padding-bottom: 5px;
cursor: pointer;
color: white;
`;

export default Giphy;
