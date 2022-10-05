import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
`

const Wrapper = styled.div`
    width: 28%;
    padding: 20px;
    background-color: white
`

const Title = styled.div`
    font-size: 30px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap
`

const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 20px 0 0;
    padding: 10px
`

const Agreement = styled.span`
    margin: 20px
`

const Button = styled.button`
    background-color: #96E5D1;
    height: 50px;
    width: 100px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: red
    }
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="full name" />
                <Input placeholder="user name" />
                <Input placeholder="phone" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register