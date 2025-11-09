const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/7c9e63f7-5b5d-43a4-a3fb-41917ac25301/web/IN-en-20251013-TRIFECTA-perspective_7bc35267-b383-4fb3-b173-eae32292d42e_small.jpg";

const USER_ICON_IMG =
  "https://occ-0-2890-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_TOKEN",
  },
};

const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export {
  LOGO_URL,
  BACKGROUND_IMG,
  USER_ICON_IMG,
  options,
  IMG_CDN_URL,
  SUPPORTED_LANGUAGE,
};
