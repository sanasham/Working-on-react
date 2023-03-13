export const buttonNamesList = [
  'All',
  'Gaming',
  'Songs',
  'Live',
  'Soccer',
  'Cricket',
  'Cooking',
  'News',
  'Education',
  'Tourism',
  'Locations',
  'Publications',
];
const GOOGLE_API_KEY = 'AIzaSyCdlfcRr4svmYIF2IlJaxuSMspQk0ltYh4';
export const YOUTUBE_VIDEO_API_URL =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=in&key=' +
  GOOGLE_API_KEY;

export const YOUTUBE_AUTO_SUGGETION_API_URL =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const LIVE_CHART_COUNT = 25;
