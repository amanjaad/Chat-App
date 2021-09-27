import { Dialog , withStyles } from "@material-ui/core";
import { Box , Typography ,List , ListItem , makeStyles} from "@material-ui/core";
import {GoogleLogin} from "react-google-login";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import {clientId} from "../constants/data"
import { addUser } from "../service/api";

const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        padding:'56px 0 56px 56px'
    },
    qrCode:{
        height:264,
        width:264,
        padding:'50px 0 0 50px'
    },
    title:{
        fontSize:26,
        marginBottom:25,
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            color:'#4a4a4a',
            padding:0,
            marginTop:15,
            lineHeight:'28px'
        }
    }
})

const style = {
    dialogPaper:{
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        overFlow:'hidden'
    }
}
const Login = ({classes}) => {
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const classname = useStyles();


    const {account , setAccount} = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        console.log('Login Successfully', res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLoginFailure = () => {
        console.log('Login Failure');
    }
    return (
        <Dialog open = {true} 
        classes = {{paper:classes.dialogPaper}}
        BackdropProps={{style:{background:'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Typography className={classname.title}>To use WhatsApp on your phone</Typography>
                    <List className={classname.list}>
                        <ListItem>1. open whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to captire the code</ListItem>
                    </List>
                </Box>
                <Box position='relative'>
                    <img src={qrurl} alt="qr" className={classname.qrCode} />
                    <Box style={{position:'absolute' ,top:'50%' , left:'50%'}}>
                    <GoogleLogin
                    cookiePolicy={'single_host_origin'}
                     buttonText=""
                     onSuccess={onLoginSuccess}
                     onFailure={onLoginFailure}
                     clientId={clientId}
                    />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login);