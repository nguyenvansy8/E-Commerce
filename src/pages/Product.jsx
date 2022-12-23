import React from 'react'
import styled from 'styled-components'
import Annoucement from '../component/Annoucement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
`

// Change padding 50-45
const Wrapper = styled.div`
    padding: 45px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InforContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1`
    display: flex
`

const Desc = styled.p`
    display: flex;
    text-align: left
`

const Price = styled.span`
    display: flex;
    font-size: 80px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.div`
    font-size: 30px;
    font-weight: 200
`

const FilterColor = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        transform: scale(1.4)
    }

`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    cursor: pointer;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`

const Amount = styled.span`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 30%;
    border: 1px solid teal;
    justify-content: center;
    align-items: center;
    margin: 20px;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 1000;
    cursor: pointer;
`

const Button = styled.button`
    background-color: #256D85;
    color: white;
    height: 50px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
        background-color: #2B4865
    }
`


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Annoucement />
        <Wrapper>
            <ImgContainer>
            <Image src="https://product.hstatic.net/200000305259/product/vgc-short_pants-brown_1_17cfb2f161334beb847f785cb17d66e8_large.jpg"/>
            </ImgContainer>
            <InforContainer>
                <Title>SK20317</Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </Desc>
                <Price>
                    $40
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="yellow"/>
                        <FilterColor color="red"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size: </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InforContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product