import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from '../config/reducers/cartReducer';

const Container = styled.div`
  height:50vh;
  width:20vw;
  border:1px solid ${(props) => props.theme.body};
  padding:1rem 2rem;
  background-color:teal;
  display:flex;
  flex-direction:column;
  border-radius:10px;
`;

const ImgContainer = styled.div`
  width:100%;
  height:55%;

  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;

const Title = styled.h1`
  font-family:'Urbanist';
  font-size:${(props) => props.theme.fontmd};
  font-weight:700;
`;

const List = styled.ul`
  display:flex;
  flex-direction:column;
  list-style:none;
  justify-content:flex-start;
  padding-left:0;
`;

const ListItem = styled.li`
  padding:10px;
  font-family:'Sirin Stencil';
  font-weight:600;
  text-transform:uppercase;
`;

const Button = styled.button`
  background-color:cyan;
  border:none;
  padding:7px 10px;
  border-radius:10px;
  width:50%;
  height:50px;
  cursor:pointer;
  font-family: 'Radio Canada', sans-serif;
  font-weight:600;
`;

export default function CardProduct({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <Container>
      <ImgContainer>
        <img src={data.image} alt="" />
      </ImgContainer>

      <Title>{data.title}</Title>

      <List>
        <ListItem>{data.price}</ListItem>
      </List>

      <Button onClick={() => handleAddToCart()}>Add to cart</Button>
    </Container>
  );
}
