import { useState } from "react";

import { Box } from "@mui/system";
// components

import Header from "./Header";

import Search from './Search';
import Conversation from "./Conversation";
const Menu = ()=>{

  const [text,setText] = useState('');

  return(
  <Box>

        <Header/>
        <Search setText = {setText}/>
        <Conversation text={text}/>

  </Box>
  

    )
}
export default Menu;