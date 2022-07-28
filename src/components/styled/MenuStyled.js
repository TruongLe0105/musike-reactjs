import styled from "styled-components";
import * as React from "react";

export const ItemMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left: 2rem;
cursor: pointer;
color: white;
font-size: 2rem;
position: relative;
:hover {
  opacity: 0.7;
}
`;

export const ItemFooter = styled.div`
  display: flex;
  margin-left: 3rem;
`;

export const Title = styled.p`
margin-left: 2rem;
font-size: 1.6rem;
`;

export const TitleFooter = styled.p`
margin-right: 3rem;
`;

