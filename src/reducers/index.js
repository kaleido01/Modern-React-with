import { combineReducers } from 'redux';


const songsReducers=()=>{
  return[
    {title:"No Scrubs", duration:"4:05"},
    {title:"ararara", duration:"4:15"},
    {title:"cccccccccc", duration:"1:21"},
    {title:"dddddddddddd", duration:"4:21"},
  ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
  if(action.type==="SONG_SELECTED"){
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs:songsReducers,
  selectedSong:selectedSongReducer,
})