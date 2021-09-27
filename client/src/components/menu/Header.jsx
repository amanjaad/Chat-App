import { Box, makeStyles } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { AccountContext } from "../../context/AccountProvider";
import { useContext , useState} from "react";
//component
import HeaderMenu from "./HeaderMenu";
import Drawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    display: "flex",
    alignItems: "center",
    padding:'10px 16px'
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
    cursor:'pointer'
  },
  icons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  const [open , setOpen] = useState(false);

  const toggleDrawer = () => {
      setOpen(true);
  }
  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="display-picture"
          className={classes.avatar}
          onClick={() => toggleDrawer()}
        />
        <Box className={classes.icons}>
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open ={open} setOpen={setOpen} />
    </>
  );
};
export default Header;
