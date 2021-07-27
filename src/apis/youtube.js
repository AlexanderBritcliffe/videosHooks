import axios from 'axios';



const KEY = 'AIzaSyCU-Yi4R1TT-3x3ktkp2J9LvinM6YqDySM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
