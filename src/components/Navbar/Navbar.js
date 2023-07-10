import React, {useState} from 'react'
import ListVideo from './ListVideo';
import URL from "../Api/URL"
import "./Navbar.css"
import Video from './Video';
import SideVideo from './SideVideo';

function Navbar() {

const [videos, setVideos] = useState([])
const [selectVideos, setSelectVideos] = useState({id: {}, snippet: {}})

async function videoSubmit(searchTerm){
  const {data: {items : videos}} = await URL.get("search", {
    params: {
      part: "snippet",
      maxResults: 8,
      key: "AIzaSyBr0nKRvyLMRhlK7o8bBTZYXj4tWEyZLA8",
      q: searchTerm
    }
  });
  console.log(videos);
setVideos(videos);
setSelectVideos(videos[0]);



}
  return (
    <div>
      <div className="videoLists">
        <ListVideo onSubmit={videoSubmit}/>
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectVideos}/>
        </div>
        <div className="sideBar">
          <SideVideo videos={videos} onVideoSelect={setSelectVideos}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar