import styled from "styled-components";
import * as React from 'react';

export const Title = styled.div`
  margin: 0 1rem;
  padding:  1rem 0;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
  opacity:0.9;
  :hover {
    opacity: 1;
    transform:scale(1.05)
  };
`;

export const Icon = styled.div`
  margin-left: 2rem;
  font-size: 2.2rem;
  cursor: pointer;
`;