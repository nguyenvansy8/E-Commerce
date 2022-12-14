import React from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px
`

const Desc = styled.div`
    font-size: 30px
`

const InputContainer = styled.div`
    width: 30%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products</Desc>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <SendOutlinedIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter