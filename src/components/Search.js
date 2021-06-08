import React from "react";
import giphy from "../img/giphy.png";
import Styled from "styled-components";

const Search = () => {
  console.log(giphy);
  return (
    <Container>
      <StyledImg src={giphy} />
      <StyledForm>
        <StyledInput type="text" />
        <SubmitButton type="submit" />
      </StyledForm>
    </Container>
  );
};

const Container = Styled.div`
width: 50%;
display: flex;
margin: auto;
flex-direction: column;
`;

const StyledImg = Styled.img`
width: 90%;
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

export default Search;
