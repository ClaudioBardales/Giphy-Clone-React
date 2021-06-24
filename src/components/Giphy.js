import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import axios from "axios";
import giphy from "../img/giphy.png";

function Giphy() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "bo7l8y4GctiRWvN7WQKm6NKC2TrmJEjc",
          limit: 15,
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
          <img src={el.images.fixed_width.url} />
        </div>
      );
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "bo7l8y4GctiRWvN7WQKm6NKC2TrmJEjc",
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
}

const Container = Styled.div`
min-height: 100vh;

`;

const Grid = Styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
align-items: center;
justify-items: center;


`;

const SearchContainer = Styled.div`
width: 50%;
display: flex;
margin: auto;
flex-direction: column;
`;

const StyledImg = Styled.img`
width: 80%;
margin: auto;
`;

const StyledForm = Styled.form`
display: flex;
justify-content: center;
align-items: center;
padding-top: 1.5rem;
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
color: white;
`;

export default Giphy;
