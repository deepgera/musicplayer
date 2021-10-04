import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import React from 'react';  
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';  
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
    
function Simplelist({setDrawerOpen}){
    const history = useHistory();
    const itemlist=[
        {
        text:"Player",
        icon:<PlayArrowRoundedIcon/>,
        onClick:()=>{
            history.push("/");
            setDrawerOpen(false);}
        },
        {
            text:"Playlist",
            icon:<PlaylistPlayRoundedIcon/>,
            onClick:()=>{
            history.push("/Playlist");
            setDrawerOpen(false);}
        },
        {
            text:"Contacts",
            icon:<PhoneRoundedIcon/>,
            onClick:()=>{
                history.push("/Contacts");
                setDrawerOpen(false);}
        }
];
return(
    <List>
        {itemlist.map((text) => (

          <ListItem button key={text.text} onClick={text.onClick}>
                <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.text} />
          </ListItem>
        ))}
    </List>
    )
}
export {Simplelist};