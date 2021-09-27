import { Box , makeStyles, InputBase} from "@material-ui/core";
import { EmojiEmotionsOutlined , Mic , AttachFile } from "@material-ui/icons";


const useStyles = makeStyles(theme => ({
    footer:{
        height:'55px',
        background:"#ededed",
        width:'100%',
        display:'flex',
        alignItems:'center',
        //padding:'0px 15px',
        '& > *':{
            margin:5,
            color:'#919191'
        }
    },
    clipIcon:{
        transform:'rotate(40deg)'
    },
    searchBox:{
        background:'#FFFFFF',
        borderRadius:18,
        width:'100%'
    },
    inputRoot:{
        width:'100%'
    },
    inputInput:{
        paddingLeft:15,
        fontSize:14,
        width:'100%',
        height:20,
        padding:theme.spacing(1,1,1,0)
    }

}))
const Footer = ({sendText , value , setValue}) => {
    const classes = useStyles();
    return(
        <Box className={classes.footer}>
            <EmojiEmotionsOutlined />
            <AttachFile className={classes.clipIcon} />
            <Box className={classes.searchBox}>
              <InputBase
               placeholder='Type a message here'
               classes={{
                   root:classes.inputRoot,
                   input:classes.inputInput
               }}
               inputProps={{'aria-level':'search'}}
               onKeyPress={(e) => sendText(e)}
               onChange={(e) => setValue(e.target.value)}
               value={value}
              />
            </Box>
            <Mic />
        </Box>
    )
}
export default Footer;