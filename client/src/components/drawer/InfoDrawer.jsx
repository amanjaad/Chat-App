import { Drawer , Box , Typography , makeStyles} from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";

const useStyles = makeStyles({
    header:{
        //marginTop:0,
        background:'#00bfa5',
        height:97,
        display:'flex',
        color:'#FFFFFF',
        '& > *':{
            padding:15,
            marginTop:'auto',
            fontWeight:600
        }
    },
    component:{
        background:'#ededed',
        height:'85%'
    },
})
const InfoDrawer = ({open , setOpen}) => {
    
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    }
    return (
    <Drawer open ={open} onClose={handleClose} >
        <Box className={classes.header}>
            <ArrowBack onClick ={() => handleClose()} />
            <Typography>Profile</Typography>
        </Box>
        <Box className={classes.component}>
            <Profile />
        </Box>
    </Drawer>
    )
}
export default InfoDrawer;