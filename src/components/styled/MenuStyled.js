import styled from "styled-components";
import * as React from "react";

export const ItemMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left: 2rem;
cursor: pointer;
color: white;
font-size: 1.8rem;
position: relative;
opacity:0.8;
:hover {
  opacity: 1;
}
`;

export const ItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  padding: 0 1rem;
  @media screen and (max-width:768px) {
    display:none;
  }
`;

export const Title = styled.p`
margin-left: 1rem;
font-size: 1.5rem;
`;

export const TitleFooter = styled.p`
margin-right: 3rem;
`;

