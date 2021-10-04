import { AppBar, Button, Drawer, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { useEffect,useState,useContext } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Simplelist } from "../components/Simplelist";
import {Songcontext} from "../context";
import {getSearchData} from "..//components/api";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Playlist} from "../pages/Playlist";
import {getSearchbarData} from "..//components/api";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      textAlign: "left",
      flexGrow: 1,
    },
    drawerPaper: {
      width: 240,
    },
    drawer: {
      width:"100%",
      minwidth: 240,
    },
    searchIcon: {
      padding: "1px",
      height: '100%',
      position: "absolute",
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  function Mainlayout(){
    const history = useHistory();
  
  const { value,songdata,playing,Url,searchbar } = useContext(Songcontext);
  const [ songValue, setsongValue] = value;
  const [ Songdata, setSongdata] = songdata;
  const [songurl,setsongurl] =Url;
  const [playsong, setplaysong] = playing;
  const [searchbarval,setsearchbarval]=searchbar;
  const [tempval, settempval] = useState("");
  
  const handlesearch=(event)=>{
    // console.log(`${event.target.value}`)
    settempval( event.target.value );
    console.log(tempval);
   }

  /* useEffect(() =>{
      console.log("component re-render by searchbarval");
   }, [searchbarval])
  */
   const routeChange=()=>{
    //let path = `Playlist`;
    history.push("/Playlist");
  }

   const ror=()=>{
    //tempval!=""?[
      setsearchbarval(tempval)
      routeChange()
    //:alert("please enter a songname to search")
      //searchsong();
   }

   
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
      
    
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton onClick={()=>{
              setDrawerOpen(!drawerOpen) }}
               edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"  className={classes.title}>
              Music Player
            </Typography>
            <div className={classes.search}>
            <Button color="inherit" onClick={ror}> 
              Search
            </Button>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handlesearch}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer    classes={{paper: classes.drawerPaper}} className={classes.drawer} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Simplelist setDrawerOpen={setDrawerOpen}/>
       </Drawer>
      </div>
    );
  }
export {Mainlayout};
