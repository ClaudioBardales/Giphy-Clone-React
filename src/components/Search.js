import React from "react";
import Styled from "styled-components";

const Search = () => {
  return (
    <div>
      <StyledHeader>Giphy Clone</StyledHeader>
      <StyledForm>
        <input type="text" placeholder="Search" />
        <input type="submit" />
      </StyledForm>
    </div>
  );
};

const StyledHeader = Styled.h1`
width: 55%;
margin: auto;
text-align: center;
`;

const StyledForm = Styled.form`
display: flex;
justify-content: center;
`;

export default Search;
