export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg";
export const API_OPTIONS = 
{
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};

export const CARD_IMG_URL = "https://image.tmdb.org/t/p/w200//";

export const SUPPORTED_LANG = [
  {identifier: "en", name:"English"},
  {identifier: "hindi", name:"Hindi"},
  {identifier: "spanish", name:"Spanish"},
];

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
