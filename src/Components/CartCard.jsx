import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeQuantity, removeFromCart } from '../config/reducers/cartReducer';

const Card = styled.div`
  height:18vh;
  padding:1rem 0;
  border-bottom:1px solid ${(props) => props.theme.grey};
  display:flex;
`;

const CardP = styled.div`
  width:55%;
  display:flex;

  img{
    width:20%;
    object-fit:cover;
  }

  span{
    padding-left:15px;
  }

  .other{
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    &>*:last-child{
      color:#5e5c69;
      cursor:pointer;    
      transition:all 0.3s ease;
    }

    &>*:last-child:hover{
      color:#292833;
    }

  }
`;

const Rest = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:45%;

  &>*:last-child{
    justify-content:flex-end;
    font-weight:700;
  }

  .qc{
    justify-content:center;
  }
`;

const CardRest = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;

  .quantity{
    width:75%;
    height:40%;
    border:1px solid ${(props) => props.theme.grey};
    display:flex;
    justify-content:space-between;
    border-radius:10px;

    *{
      padding:0.5rem 1rem;
      cursor:pointer;
    }
  }
`;

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(changeQuantity({ item, msg: 'decrease' }));
  };

  const handleIncreased = (item) => {
    dispatch(changeQuantity({ item, msg: 'increase' }));
  };

  return (
    <Card>
      <CardP>
        <img src={item.image} alt="" />
        <div className="other">
          <span>{item.title}</span>
          <span onClick={() => handleRemove(item)}>Remove item</span>
        </div>
      </CardP>

      <Rest>
        <CardRest>${item.price}</CardRest>
        <CardRest className="qc">
          <div className="quantity">
            <div className="sum" onClick={() => handleDecrease(item)}>
              -
            </div>

            <div className="num">{item.cartQuantity}</div>

            <div className="rest" onClick={() => handleIncreased(item)}>
              +
            </div>
          </div>
        </CardRest>
        <CardRest>{item.price * item.cartQuantity}</CardRest>
      </Rest>
    </Card>
  );
}
