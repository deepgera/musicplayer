import React, { useState,useContext, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import starboy from "./starboy.jpg";
import dakkefirde from "./dakkefirde.jpg";
import nocompetition from "./no competion.jpg";
import brownmunde from "./brownmunde.jpg";
import Carousel from 'react-grid-carousel';
import playdate from '../musicoffline/play date.jpg';
import onedance  from '../musicoffline/onedance.jpg';
import rasputin from '../musicoffline/rasputin.jpg';
import goat from '../musicoffline/goat.jpg';
import falling from "../musicoffline/falling.jpg";
import waliyan from "../musicoffline/walian.jpg";
import blindinglights from "../musicoffline/blindinglights.jpg";
import thunderclouds from "../musicoffline/LSD_Thunderclouds.png";
import '../index.css';
import {getSearchData} from "..//components/api";
import axios from "axios";
import {Songcontext} from "../context";

const useStyles = makeStyles({
  root: {
    flexgrow:1,
    margin:'35px',
    maxWidth: 250,
    maxHeight: 370
  },
  heading:{
    color:"#E64200" ,
    //font-family: 'Monoton',cursive
  },
  center: {
    display: "block",
    margin:"50px",
    width: "70%",
  }
});
export function SliderCard(){
  const { value,songdata,playing,Url,nowplay,covers,titles } = useContext(Songcontext);
  const [ songValue, setsongValue] = value;
  const [ Songdata, setSongdata] = songdata;
  const [songurl,setsongurl] =Url;
  const [playsong, setplaysong] = playing;
  const [playnow,setPlaynow]=nowplay; 
  const [cover,setcover]=covers;
  const [title,settitle]=titles;
  const[songid,setsongid]=useState(""); 
  const songshow=['brownmunde','dakkefirde','nocompetition','starboy','playdate','waliyan',
                  'onedance','falling','goat','rasputin','blindinglights','thunderclouds']

    useEffect(()=>{
      console.log(Songdata);
      console.log(title);
      if(songid!=""){
      fetchurl();
      }
    },[songid])

   const searchsong=async (i) => {
      setsongValue(i);
      var List = await getSearchData(i);
      await setSongdata(List);
      await setcover(List[0].thumbnails.high.url);
      await settitle(List[0].title);
      await setsongid(List[0].id);
      console.log(Songdata);
   }
const fetchurl=async()=>{
      var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
      
      console.log(songUrl);
      setplaysong(true);
      setsongurl(songUrl.data);
     // console.log(songurl);
   }

const classes = useStyles();
  
  return (
    <div>   
   
      <div padding="30px" >
      <h2 className={classes.heading}><span className="font-link">Trending songs </span></h2> 
      <Carousel cols={3} rows={1} gap={14} showDots loop>
      <Carousel.Item>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="brownmunde"
          height="200"
          image= {brownmunde}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           Brown Munde
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          // setsongValue('brownmunde');
          setPlaynow(false);
          searchsong('brownmunde');
          
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
        // setsongValue('brownmunde');
          searchsong('brownmunde');
         
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
      </Carousel.Item>
      
      <Carousel.Item>
      <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="dakkefirde"
          height="200"
          image= {dakkefirde}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            dakkefirde-sajjan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('dakkefirde sajjan');
        }} >
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('dakkefirde');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>

      </Carousel.Item>
      <Carousel.Item>
        
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="nocompetition"
          height="200"
          image= {nocompetition}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              no competition-jass manak
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('Nocompettion');
        }} >
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          
          searchsong('nocompetition');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
      </Carousel.Item>
     <Carousel.Item>
       
       
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Star boy"
          height="200"
          image= {starboy}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Star Boy
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary"onClick={()=>{
          setPlaynow(false);
          searchsong('nocompetition')
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('starboy');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="playdate"
          height="200"
          image= {playdate}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Play date
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('playdate');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('playdate');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="waliyan"
          height="200"
          image= {waliyan}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Waliyan
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('waliyan harnoor');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('waliyanharnoor');
    
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="onedance"
          height="200"
          image= {onedance}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            One Dance
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('onedancedarke');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('onedancedarke');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="falling"
          height="200"
          image= {falling}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Falling
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('falling');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('falling');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="goat"
          height="200"
          image= {goat}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Goat
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('goat diljeet');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('goat diljeet');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="rasputin"
          height="200"
          image= {rasputin}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           Rasputin
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('rasputin');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('rasputin');

        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="blinding lights"
          height="200"
          image= {blindinglights}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           Blinding Lights
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('blindinglights');
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('blindinglights');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>
       <Carousel.Item>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="thunderclouds"
          height="200"
          image= {thunderclouds}
          
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Thunderclouds
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={()=>{
          setPlaynow(false);
          searchsong('thunderclouds'); 
        }}>
          Add to Playlist
        </Button>
        <Button size="small" color="primary" onClick={()=>{
          setPlaynow(true);
          searchsong('thunderclouds');
        }}>
          Play now
        </Button>
      </CardActions>
    </Card>
       
       </Carousel.Item>

    </Carousel>
    </div>
    </div>

  );
}