import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import CartCard from '../Components/CartCard';
import { clearCart } from '../config/reducers/cartReducer';

const Container = styled.div`
  position:relative;
  min-height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Title = styled.h1`
  text-align:center;
  font-family:'Kaushan Script';
  font-size:${(props) => props.theme.fontxxl};
  margin-top:1rem;
`;

const TitlesContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:50px;
  width:80%;
  border-bottom:1px solid ${(props) => props.theme.grey};
  padding-bottom:1rem;
  
  &>*:first-child{
    width:40%;
  }
`;

const Th = styled.h1`
  font-weight:500;
  font-family:'Urbanist';
  font-size:${(props) => props.theme.fontlg};
  width:${(props) => props.width};
`;

const ProductsContainer = styled.div`
  width:80%;
  height:auto;
  margin-bottom:3rem;
`;

const Bottom = styled.div`
  width:80%;
  height:40vh;
  margin-bottom:3rem;

  display:flex;
  justify-content:space-between;
`;

const ButtonClear = styled.button`
  padding:7px 11px;
  width:10%;
  height:2.5rem;
  border-radius:10px;
  border:1px solid ${(props) => props.theme.grey};
  color:#494e57;
  cursor:pointer;
  background-color:white;
  transition:all 0.5s ease;

  &:hover{
    background-color:#494e57;
    color:white;
  }
`;

const Subtotal = styled.div`
  width:25%;
  height:80%;
  display:flex;
  flex-direction:column;
`;

const Top = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
`;

const Desc = styled.span`
  font-size:0.9rem;
  color:#494e57;
  margin-top:5px;

`;

const CheckButton = styled.button`
  background-color:#2466d1;
  padding:11px 7px;
  color:white;
  transition:all 0.5s ease;
  border:none;
  margin-top:10px;
  cursor:pointer;
  border-radius:10px;

  &:hover{
    color:#2466d1;
    background-color:white;
  }
`;

const BottomCheck = styled.span`
  padding:10px 5px;
  a{ 
    cursor:pointer;
    transition:all 0.3s ease;

    &:hover{
      color:${(props) => props.theme.grey};
    }
  }
`;

export default function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.persistedReducer.cart.cartProducts
  );
  const cartAmount = useSelector((state) => state.persistedReducer.cart.amount);

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Title>Shopping cart</Title>

      <TitlesContainer>
        <Th>Product</Th>
        <Th>Price</Th>
        <Th>Product</Th>
        <Th>Total</Th>
      </TitlesContainer>
      <ProductsContainer>
        {cartItems.map((item, index) => (
          <CartCard key={index} item={item} />
        ))}
      </ProductsContainer>

      <Bottom>
        <ButtonClear onClick={() => handleClear()}>Clear cart</ButtonClear>

        <Subtotal>
          <Top>
            <h3>Subtotal</h3>

            <span>${cartAmount}</span>
          </Top>

          <Desc>Taxes and shipping are calculated at checkout</Desc>

          <CheckButton>Checkout</CheckButton>

          <BottomCheck>
            <Link to="/">
              <i className="bi bi-arrow-left"></i> Continue shopping
            </Link>
          </BottomCheck>
        </Subtotal>
      </Bottom>
    </Container>
  );
}
