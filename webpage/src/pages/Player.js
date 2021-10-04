import {SliderCard} from "../components/Card1";
import React, {useState,useContext,useEffect} from "react";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import musiccover from "../musicoffline/Game.mp3";
import axios from "axios";
import { getPopularList } from "../components/api";
import {Songcontext} from "../context";
import { useHistory } from 'react-router-dom';
import {Popularlists} from "../components/popularlist";
const useStyles = makeStyles({
  grid: {
    margin: "30px"
  }
})

function Player() {
  const {value,songdata,playing,Url,nowplay,covers,titles } = useContext(Songcontext);
  const [songurl,setsongurl] = Url;
  const [Songdata,setSongdata] = songdata;
  const [Songname,setSongname] = value;
  const [playsong,setplaysong] = playing;
  const [playnow,setplaynow] = nowplay;
  const [cover,setcover]=covers;
  const [title,settitle]=titles;
  const history=useHistory();
  useEffect(()=>{
    console.log("player updated");
  },[songurl]);
  const classes = useStyles();
  function download(){
      const link = document.createElement("a");
      link.href =songurl; // a.mp3
      link.download = "test";
      document.body.appendChild(link);
      link.click();
  }
  return (
  <div>
   
      { playsong===true?(
        playnow===true?(
        <ReactPlayer 
        clearPriorAudioLists
        audioLists={[
        { 
          musicSrc: songurl,
          name: title,
          singer: title,
          cover: cover
        }]
        }
        customDownloader={download} /> )
       :<ReactPlayer 
        audioLists={[
        { 
        musicSrc: songurl,
        name: title,
        singer:title,
        cover: cover
      }]
      }/>) 
      :
       history.push('/')
       }
    </div>
  );
}

export { Player};