const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyDRNGaK92kKGFHdUihrJxbIwCaQiRkxjoc');
export const getPopularList = async (query) => {
 var data= await youtube.searchVideos("best of"+query+"songs", 1)
            .catch((e) => {
               console.log(e);
  });
   return await data;
}
export const getSearchData = async (query) => {
   
   var data = await youtube.searchVideos(query+"songs", 1).catch((e) => {
     console.log(e);
   });
 
   return await data;
};
export const getSearchbarData = async (query) => {
   
   var data = await youtube.searchVideos(query + " song", 5).catch((e) => {
     console.log(e);
   });
 
   return await data;
};   
    
    