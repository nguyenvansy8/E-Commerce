import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    z-index: 2
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.sliderIndex * -100}vw)
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 100%
`

const InforContainer = styled.div`
    flex: 1;
    padding: 50px
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px   
`
// Change padding 10-12 and font-size 20-10
const Button = styled.button`
    padding: 12px;
    font-size: 10px;
    background-color: teal;
    cursor: pointer;
    border: none;
    transition: all 0.9s ease;

    &:hover{
        background-color: red;
        width: 200px;
        height: 80px
    }
`

const Slider = () => {

    const [sliderIndex, setSliderIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3)
        } else {
            setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliderItems.map((item) => (
                <Slide key={item.id} bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InforContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InforContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider