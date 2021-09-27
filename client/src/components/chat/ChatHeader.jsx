import { useContext } from "react"
import { Box , makeStyles , Typography } from "@material-ui/core"
import { UserContext } from "../../context/UserProvider";
import {Search , MoreVert} from "@material-ui/icons"
import {AccountContext} from "../../context/AccountProvider"

const useStyles = makeStyles({
    header:{
        display:'flex',
        height:35,
        background:'#ededed',
        padding:'10px 16px',
        alignItems:'center'
    },
    dp:{
        width:37,
        height:37,
        borderRadius:'50%',
        padding:'0 2px'
    },
    name:{
        marginLeft:10
    },
    status:{
        marginLeft:10,
        color:'rgb(0,0,0,0.6)',
        fontSize:12
    },
    rightContainer:{
        marginLeft:'auto',
        '& > *':{
            fontSize:22,
            padding:8,
            color:'#919191'
        }
    }
});

const  ChatHeader = () => {
    const classes = useStyles();
    const {person} = useContext(UserContext);
    const {activeUsers} = useContext(AccountContext);
    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} alt="dp" className={classes.dp}/>
            <Box>
                <Typography className={classes.name}>{person.name}</Typography>
                <Typography className={classes.status}>
                    {
                        activeUsers?.find(user => user.userId === person.googleId) ? 'Online' :'Offline'
                    }
                </Typography>
            </Box>
            <Box className={classes.rightContainer}>
                <Search/>
                <MoreVert/>
            </Box>
        </Box>
    )
}

export default ChatHeader
