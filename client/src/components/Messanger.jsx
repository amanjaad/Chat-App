import {AppBar,Toolbar,makeStyles, Box} from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
//component
import Login from "../account/Login";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
    component:{
        background:'#DCDCDC',
        height:'100vh'
    },
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'
    },
    login:{
        height:115,
        background:'#127C7E',
        boxShadow:'none'
    }
})
const Messanger = () => {
    const classes = useStyles();
    const {account} = useContext(AccountContext);
    return(
        <Box className={classes.component}>
              <AppBar className={account ? classes.login : classes.loginHeader}>
                       <Toolbar>
                       </Toolbar>
                      </AppBar>
                      {account ? <ChatBox /> : <Login />}
        </Box>
    )
}

export default Messanger;