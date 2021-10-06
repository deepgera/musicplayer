const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

////////cors()

app.use(cors());
if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.resolve(__dirname, 'webpage/build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'webpage/build', 'index.html'));
});
}
////////port open
app.listen(port, () => {
  console.log(`Server Works !!! At port ${port}`);
});

/////get request handel here get url for one video

app.get("/download", async(req, res) => {
  try{
    var URL = req.query.URL;
    const info = await ytdl.getInfo(URL);
    const format = ytdl.filterFormats(info.formats, "audioonly");
    res.json(format[1].url);
 
 /* ytdl
    .getInfo(URL)
    .then((info) => {
      const format = ytdl.filterFormats(info.formats, "audioonly");
      res.json(format[1].url);
   */
    }
    catch(err) {console.log(err)
      res.json({"link no found error":err})
    };
});