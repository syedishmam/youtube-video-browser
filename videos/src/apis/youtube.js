import axios from 'axios';

const KEY = 'AIzaSyDJS7mIeJc-kICQhM-umf567xT1gE1vJX8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});