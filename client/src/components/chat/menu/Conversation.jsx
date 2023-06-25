
import { useEffect,useState,useContext} from "react";
import { Box, Divider,styled} from "@mui/material";
import { getUsers } from "../../../service/api";
import {AccountContext} from '../../../context/AccountProvider'


import ConversationRender from "./ConversationRender";

const Component = styled(Box)`
height:81vh;
overflow:overlay;

`
const StyleDivider = styled(Divider)`
   
margin:0 0 0 70px;
background-color: #e9edef;
opacity:.4;
`


const Conversation = ({text}) =>{

    const [users, setUsers] = useState([]);

    const {account, socket, setActiveUsers} =  useContext(AccountContext);

      useEffect(()=>{

        const fetchData = async() =>{
             
          let response =  await getUsers();
          const filteredData = response.filter(user =>user.name.toLowerCase().includes(text.toLowerCase()))
          setUsers(filteredData);
        }
        fetchData();
      },[text]);   // consist two things 1.callback function and  dependency array.
       

    useEffect(()=>{
          socket.current.emit('addUsers',account);
          socket.current.on("getUsers", users => {
            setActiveUsers(users);
          })
    },[account])

    return (
           <Component>
            {
                users.map(user =>(
                    user.sub !== account.sub &&
                    <>
                     
                     <ConversationRender user ={user}/>
                     <StyleDivider/>
                     </>
                ))
            }
           </Component>
    )
}

export default Conversation;