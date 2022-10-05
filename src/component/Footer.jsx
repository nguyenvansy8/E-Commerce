import React from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`
const Logo = styled.h1`
`

const Desc = styled.p`
    padding-top: 20px;
    margin: 20px 0;
    text-align: left
`

const SocialContainer = styled.div`
    display: flex
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
display; flex;
    margin-bottom: 40px
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    display: flex;
    width: 50%;
    margin-bottom: 10px
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo></Logo>
            <Desc>
            Lorem ipsum dolor sit amet, vim in unum minim, duo cu cibo cotidieque. Populo platonem at mel. Qui et feugiat denique concludaturque, ex tale minimum prodesset nec. Te has deleniti definitiones, nusquam detracto antiopam mel ut. Cum ea nostrud contentiones, habeo audire maiorum te has, ipsum fugit scripserit cu vix. Discere tincidunt accommodare ne nam. Ea vim ponderum menandri, vix ad meliore tibique.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookOutlinedIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Logo>M30 SHOP</Logo>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Kid Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <HomeIcon /> 577 Tô Ký, Trung Mỹ Tây, Quận 12
            </ContactItem>
            <ContactItem>
                <PhoneIphoneIcon/> +84 332 223 333
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon/> vansy999@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer