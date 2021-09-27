import { MoreVert } from "@material-ui/icons";
import { MenuItem , Menu , makeStyles } from "@material-ui/core";
import { useState } from "react";
import {GoogleLogout} from "react-google-login";
import {clientId} from "../../constants/data"
import {AccountContext} from "../../context/AccountProvider";
import { useContext } from "react";
import Drawer from "../drawer/InfoDrawer";


const useStyles = makeStyles({
  menuItem:{
    fontSize:14,
    padding:'15px 60px 5px 24px',
  },
  logout:{
    border:"none!important",
    boxShadow:'none!important',
    '& > *':{
      padding:'0px!important'
    }
  },
  more:{
    cursor:'pointer'
  }
})

const HeaderMenu = () => {
  const classes = useStyles();
    const [open , setOpen] = useState(false);
    const [openDrawer , setOpenDrawer] = useState(false);
    const {setAccount} = useContext(AccountContext);

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }
    const toggleDrawer = () => {
      setOpenDrawer(true)
    }

    const onLogoutSuccess = () => {
      alert('you have been logged out successfully');
      console.clear();
      setAccount('');
    } 
  return (
    <>
      <MoreVert onClick={handleClick} className={classes.more} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'right'
        }}
      >
        <MenuItem className={classes.menuItem} onClick={() => {handleClose(); toggleDrawer()}}>Profile</MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
          clientId={clientId}
          className={classes.logout}
           />
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};
export default HeaderMenu;
