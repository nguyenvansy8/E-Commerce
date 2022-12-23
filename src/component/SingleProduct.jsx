import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

//change width 100-90 and height 100-90
const Infor = styled.div`
    width: 90%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.9s ease;
    cursor: pointer;
`

const Container = styled.div`
    margin: 5px;
    flex: 1;
    min-width: 380px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Infor}{
        opacity: 1;
    }
`

const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute
`

const Image = styled.img`
    height: 75%;
    z-index: 2
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #FFD6EC;
        transform: scale(1.3)
    }
`

const SingleProduct = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Infor>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Infor>
    </Container>
  )
}

export default SingleProduct