import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover

`

const Infor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Infor>
            <Title>{item.title}</Title>
            <Button>SHOW NOW</Button>
        </Infor>
    </Container>
  )
}

export default CategoryItem