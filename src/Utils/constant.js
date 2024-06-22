const GOGGLE_API_KEY = "AIzaSyBIpZ0XchpKQeaCl1oEJAcsS1hje8dr8-8";

export const OFFSET_LIVE_CHAT = 12;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOGGLE_API_KEY;

// export const YOUTUBE_SEARCH_SUGGETIONS_API =
//   "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// // reference https://console.cloud.google.com/
// // https://developers.google.com/youtube/v3/docs/videos/list?apix=true

export const YOUTUBE_SEARCH_API =
  "https://api.codetabs.com/v1/proxy?quest=" +
  encodeURIComponent(
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
