import axios from "axios";
import { getPopularList } from "./api";

/*const searchsong=async () => {
    var List = await getSearchData(songValue);
    var songid = List[0].id;
    setSongdata(List);
    //console.log(Songdata);
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    setsongurl(songUrl.data);
    setplaysong(true);
    console.log(songurl);
 }*/
 var GetpopularpunjabiList = async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 20 latest punjabi songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
 }
 var GetpopularhindiList = async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 20 hindi songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  var GetpopularenglishList = async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 50 english songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  var getromantic = async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 20 hindi romantic songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
var  getsadsong= async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 30 sad songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  var getworkout= async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 20 motivational workout songs ');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
 /* var getdiljeet= async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 30 diljeet songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  
  var getnehakakar= async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 10 neha kakkar songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  
  var getjassiegill= async () => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 30 jassie gill songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }
  var getsong= async (i) => {
    //const[songcover,setsongcover]=useState("");
    var tredingList = await getPopularList('top 30' +i +'songs');
    var songid = tredingList[0].id;
    var songUrl = await axios(`http://localhost:5000/download?URL=${songid}`);
    console.log(songUrl);
    return songUrl;
    //setsongcover(songUrl.data);
    //console.log(songcover);
  
  }*/
export {GetpopularpunjabiList,GetpopularhindiList,
  GetpopularenglishList,getworkout,
  getsadsong,getromantic}/*,getdiljeet,
  getnehakakar,getjassiegill,*/;