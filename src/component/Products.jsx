import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import SingleProduct from './SingleProduct';


const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Products