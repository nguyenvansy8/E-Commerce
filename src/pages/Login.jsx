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
    width: 25%;
    padding: 20px;
    background-color: white
`

const Title = styled.div`
    font-size: 30px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 20px 0 0;
    padding: 10px;
`

const Button = styled.button`
    background-color: #96E5D1;
    height: 30px;
    width: 100px;
    cursor: pointer;
    margin: 10px 10px 0 0;
    border: none;

    &:hover{
        background-color: red
    }
`

const Link = styled.div`
    margin: 5px 0;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login