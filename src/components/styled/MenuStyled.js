import styled from "styled-components";
import * as React from "react";

export const ItemMenu = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-left: 2.5rem;
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
  margin-bottom: 1rem;
  color:white;
  @media screen and (max-width:768px) {
    display:none;
  }
`;

export const Title = styled.div`
margin-left: 0;
font-size: 1.4rem;
font-weight:900;
`;

export const TitleFooter = styled.div`
font-size:1.3rem;
`;

