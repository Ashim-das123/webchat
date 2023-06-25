import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import { qrCodeImage } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
const Component = styled(Box)`
  display:flex;
`;
const Container = styled(Box)`
    padding:56px 0 56px 56px;
`;
const QRcode = styled('img')({
   height:264,
   width:264,
   margin:'50px 0 0 50px'
});

const Tittle = styled(Typography)`
  font-size:26px;
  color:#525252;
  font-weight:300;
   font-family:inherit;
   margin-bottom:25px;
`;
const StyledList = styled(List)`
   & > li {
     padding:0;
     margin-top:15px;
     font-size:18px;
     line-height:28px;
     color:4a4a4a;
  }
`
  


const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

  const {setAccount} =useContext(AccountContext);
  const onLoginSuccess = async(res)=>{
    const decoded = jwt_decode(res.credential);
    // console.log(decoded);
    setAccount(decoded);
    await addUser(decoded)
  }
  const onLoginError = (res)=>{
    console.log('Login Failed',res)
  }
  return (
    <Dialog open={true}
     PaperProps={{ sx: dialogStyle }}
      hideBackdrop = {true}
    >
      <Component>
        <Container>
          <Tittle>To use whatsapp on your computer:</Tittle>
          <StyledList>
            <ListItem>1. Open whatsapp on your phone.</ListItem>
            <ListItem>2. Tap menu setting and select whatsapp web.</ListItem>
            <ListItem>3. Point your phone to this screen to captured the code.</ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative'}}>
          <QRcode src={qrCodeImage} alt="qr code" />
          <Box style={{position:'absolute',top:'50%',transform:'translateX(25%)'}}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;