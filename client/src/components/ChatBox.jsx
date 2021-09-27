import { Dialog , withStyles , Box , makeStyles} from "@material-ui/core";
import Menu from "./menu/Menu";
import Chat from "./chat/Chat";
import { useContext } from "react";
import EmptyChat from "./chat/EmptyChat"
import { UserContext } from "../context/UserProvider";


const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    leftComponent:{
        minWidth:380,
    },
    rightComponent:{
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)',
        width:'70%',
        height:'100%',
        minWidth:300
    }
})

const style = {
    dialogPaper:{
        height:'97%',
        width:'91%',
        boxShadow:'none',
        borderRadius:0,
        maxHeight:'100%',
        maxWidth:'100%',
        overFlow:'hidden'
    }
}
const ChatBox = ({classes}) => {
    const classname = useStyles();
    const {person} = useContext(UserContext);
    return (
        <Dialog
        open={true}
        classes = {{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
         <Box className={classname.component}>
             <Box className={classname.leftComponent}><Menu /></Box>
             <Box className={classname.rightComponent}>
                 {
                     Object.keys(person).length ? <Chat/> : <EmptyChat/>
                 }
             </Box>
         </Box>
      </Dialog>
    )
}
export default withStyles(style)(ChatBox);