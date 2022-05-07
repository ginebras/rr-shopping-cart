import React from 'react';
import styled from 'styled-components';

import CardProduct from '../Components/CardProduct';
import { useProductsQuery } from '../config/apiCalls';

const Container = styled.div`
  position:relative;
  width:100vw;
  min-height:100vh;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  padding:2rem;
  gap:10px;
`;

export default function Home() {
  const { data, isLoading, isFetching, error, isSuccess } = useProductsQuery();

  return (
    <Container>
      {data &&
        data.map((data, index) => <CardProduct key={index} data={data} />)}
    </Container>
  );
}
