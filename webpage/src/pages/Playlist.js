import React from "react";
import { useState,useContext, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {getSearchbarData} from "..//components/api";
import {Songcontext} from "../context";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Player} from './Player';
import ReactPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const useStyles = makeStyles({
  root: {
   // flexgrow:1,
   display:'flex',
   // flexDirection:'column',
    marginTop:'35px', 
    marginLeft:'200px',
    alignSelf:'center',
    maxWidth: 700,
    maxHeight: 600
  },
  content: {
    //flex: '1 0 auto',
    display:'flex',
    flexDirection:'column',
  },
  titles:{
    display:'flex',
    flexDirection:'column',
    /*justify:'center',
    margin:'50px',*/
    
  }
});
function Playlist() {
  
  const { value,songdata,playing,Url,nowplay,searchbar,covers,titles } = useContext(Songcontext);
  const [ songValue, setsongValue] = value;
  const [ Songdata, setSongdata] = songdata;
  const [songurl,setsongurl] =Url;
  const [playsong, setplaysong] = playing;
  const [playnow,setPlaynow]=nowplay; 
  const [searchbarval,setsearchbarval]=searchbar;
  const [cover,setcover]=covers;
  const [title,settitle]=titles;
  const [play,setplay]=useState("false");
  const history=useHistory();

  var List;
  useEffect(()=>{
    console.log("component playlist is mounted");
    //loce();
    searchbarsong();
  },[searchbarval])
    
  /*const loce=()=>{
      console.log("state updated");
      playsong==true?setplaysong(false):setplaysong(true);
    }
    useEffect(()=>{
      console.log("song id is changed");
      console.log(songsid);
    },[songsid])
    */

       const searchbarsong=async () => {
       List = await getSearchbarData(searchbarval);
       setSongdata(List);
       console.log(Songdata);
       }
      // setimg(Songdata[0].thumbnails.high.url);
       //settitle(Songdata[0].title);
      
       
  
      //var songid = List[0].id;
    const fetchurl=async(id,key)=>{
      var songUrl = await axios(`http://localhost:5000/download?URL=${id}`);
      console.log(songUrl);
      await setsongurl(songUrl.data);
      setplaysong(true);
      setplay(true);
    }
     // console.log(songurl);
   
const classes = useStyles();

  return (
    <div >
      {Songdata.map((i,key) => (
       <Card className={classes.root}>
         <div className={classes.content}>
      <CardActionArea>
      <CardContent >
        <CardMedia
          component="img"
          alt="brownmunde"
          height="180"
          width="150"
          image={i.thumbnails.high.url}
        />
        </CardContent>
      </CardActionArea>
      
      </div>
        <div  className={classes.content}>
       
      <CardActions className={classes.titles}>
        <CardContent  >
          
      <Typography variant="head2" color="textSecondary" component="p">
        {i.title}
          </Typography>
          </CardContent>
          <CardContent  >
          
          <Button size="medium" color="primary" onClick={()=>{
         setPlaynow(false);
         setcover(i.thumbnails.high.url);
         settitle(searchbarval);  
         fetchurl(i.id,key);
        }}>
          Add to Playlist
          </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          setcover(i.thumbnails.high.url);
          settitle(searchbarval);  
          //setsongsid(i.id);
          fetchurl(i.id,key);
         
        }}>
          Play now
        </Button>
        
      </CardContent>
      </CardActions>
      </div>
    </Card>))}
    { play===true?
      <Player/>
      :<div>
      </div>
      }
    </div>
  );
}

export {Playlist};