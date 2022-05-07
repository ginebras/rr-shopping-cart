import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  background-color:${(props) => props.theme.body};
  color:${(props) => props.theme.text};
  position:relative;
  width:100vw;
  height:${(props) => props.theme.navHeight};
  left:0px;
  top:0px;
  font-family:'Urbanist';

  display:flex;
  align-items:center;
  justify-content:center;
`;

const NavList = styled.ul`
  width:100vw;
  display:flex;
  align-items:center;
  justify-content:space-between;

  list-style:none;
`;

const NavTitle = styled.h1`
  a{
    color:inherit;
    text-decoration:none;
    font-size:${(props) => props.theme.fontxs};
    padding-left:1rem;
  }
`;

const Others = styled.div`
  width:15vw;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-right:30px;

  img{
    width:50px;
    height:50px;
    object-fit:cover;
    border-radius:50%;
  }

  a{
    color:inherit;
    text-decoration:none;
  }
`;

const Cart = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  i{
    font-size:${(props) => props.theme.fontxl};
  }

  span{
    display:flex;
    align-items:center;
    justify-content:center;
    width:25px;
    height:25px;
    border-radius:50%;
    background-color:#086e0d;
  }
`;

export default function Navbar() {
  const amount = useSelector((state) => state.persistedReducer.cart.quantity);

  return (
    <NavbarContainer>
      <NavList>
        <NavTitle>
          <Link to="/">Shopping cart</Link>
        </NavTitle>

        <Others>
          <Link to="/cart">
            <Cart>
              <i className="bi bi-cart2"></i>
              <span>{amount}</span>
            </Cart>
          </Link>
          <img
            src="https://images.unsplash.com/photo-1651241848876-df639c406c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </Others>
      </NavList>
    </NavbarContainer>
  );
}
