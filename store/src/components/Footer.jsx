import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import './Footer.css'
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>STOREFY.</Logo>
          <Desc>
          We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience better
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <a className="links" href="https://www.facebook.com/Itz.Ikaay" rel="noreferrer" target="_blank"><Facebook /></a>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <a className="links" href="https://www.instagram.com/unlimited_ti10" rel="noreferrer" target="_blank"><Instagram /></a>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <a className="links" href="https://twitter.com/ikaayunlimited" rel="noreferrer" target="_blank"><Twitter /></a>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Odogunyan Ikorodu, Lagos
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> <a href="tel:+2349132459661">+2349132459661</a>
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> <a href="mailto:mgbemeleikechukwu@gmail.com">mgbemeleikechukwu@gmail.com</a>
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;