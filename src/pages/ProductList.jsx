import React from 'react'
import styled from 'styled-components'
import Annoucement from '../component/Annoucement'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Products from '../component/Products'

const Container = styled.div`

`

//Change font-size 40-35
const Title = styled.div`
    font-size: 35px;
    font-weight: bold;
    margin: 20px;
    display: flex;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600
`

const Filter = styled.div`
    margin: 20px;
    display: flex
`

const Select = styled.select`
    margin-left: 10px
`

const Option = styled.option`
    width: 100%
`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Annoucement />
        <Title>Man Fashion</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Green</Option>
                    <Option>Red</Option>
                    <Option>Purple</Option>
                    <Option>Yellow</Option>
                    <Option>Orange</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Pink</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>M</Option>
                    <Option>S</Option>
                    <Option>XS</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products: 
                </FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price Up</Option>
                    <Option>Price Down</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList