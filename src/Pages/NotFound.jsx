import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-family:'Sirin Stencil';
  color:${(props) => `rgba(${props.theme.bodyRgba},0.7)`};

  h1,h2{
    margin:0;
    padding:0;
  }

  h1{
    font-size:${(props) => props.theme.fontxxl};
    
  }
`;

export default function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <h2>Page not found</h2>
    </Container>
  );
}
