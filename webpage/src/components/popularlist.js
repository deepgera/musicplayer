import React, { useState,useContext, useEffect }  from 'react';
import { getPopularList } from "./api";
import {searchsong,GetpopularpunjabiList,GetpopularhindiList,GetpopularenglishList,getworkout,getsadsong,getromantic} from "./searchfun";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Songcontext} from "../context";
import { makeStyles } from '@material-ui/core/styles';
// import diljit from "../musicoffline/diljit.jpg";
// import sharrymann from "../musicoffline/sharrymann.jpg";
// import jassigill from "../musicoffline/jassigill.jpg";
// import nehakakkar from "../musicoffline/nehakkr.jpg";


const useStyles = makeStyles({
  outer:{
    display:'flex',
    flexDirection:'row'
  },
root: {
    flexgrow:1,
  //  //display:'flex',
  //  //flexDirection:'row',
    margin:'35px',
    maxWidth: 250,
    maxHeight: 370
  }})

function Popularlists(){
  const { value,songdata,playing,Url,nowplay,searchbar,covers,titles } = useContext(Songcontext);
  const [ songValue, setsongValue] = value;
  const [ Songdata, setSongdata] = songdata;
  const [songurl,setsongurl] =Url;
  const [playsong, setplaysong] = playing;
  const [playnow,setPlaynow]=nowplay; 
  const [searchbarval,setsearchbarval]=searchbar;
  const [cover,setcover]=covers;
  const [title,settitle]=titles;
  const classes = useStyles();
  
    var getsong= async (i) => {
      var tredingList = await getPopularList(i);
      var songid=tredingList[0].id;
      var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
      console.log(songUrl);
      setsongurl(songUrl.data);
      setPlaynow(true);
      setcover(tredingList[0].thumbnails.high.url);
      settitle(tredingList[0].title);  
      setplaysong(true);
    }
  let popartist=[
    {"diljeet dosanjh": require('../musicoffline/diljit.jpg').default},
    {"neha kakkar": require('../musicoffline/nehakkr.jpg').default},
    {"jassi gill":require('../musicoffline/jassigill.jpg').default},
    {"sharry maan":require('../musicoffline/sharrymann.jpg').default}
  ];
 return(

   <div className={classes.outer}> 
   { popartist.map((ob)=>(
<Card className={classes.root}>  
  <CardContent>
    <CardMedia
      component="img"
      alt="popular artist"
      height="200"
      image={Object.values(ob)}      
    />
      </CardContent>
    <CardActionArea>
    <Button size="medium" color="primary" onClick={()=>{
      let key=Object.keys(ob);
     // console.log(key);
     // console.log(key[0]);
      getsong(key);
    }}>
      Play now
    </Button>
  
    </CardActionArea>
</Card>
    ))}
</div>
);

}
export {Popularlists};