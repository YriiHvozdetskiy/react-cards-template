export const setCookie = (cname, cvalue, exdays) => {

   const oldCookie = getParseCookie()
   document.cookie = cname + "=" + JSON.stringify(cvalue) ;
   // document.cookie = cname + "=" + JSON.stringify([...cvalue,...oldCookie,]) ;

};

const setArrayCookie = (cname, cvalue) => {

   const oldCookie = getParseCookie()
   // console.log('cvalue arr',cvalue)
   // console.log('oldCookie strigarr',oldCookie)

   document.cookie = cname + "=" + JSON.stringify([...oldCookie,...cvalue]) ;
}

function reverse(s){
   return [...s].reverse().join("");
}

export const getCookie = (name) => {
   let dc = document.cookie;
   let prefix = name + "=";
   let begin = dc.indexOf("; " + prefix);
   if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
   } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
         end = dc.length;
      }
   }
   return decodeURI(dc.substring(begin + prefix.length, end));
};

export const getParseCookie = () => {
   let myCookie = getCookie("cards");
   let parseCookie = [];
   if (myCookie !== null) {
      parseCookie = JSON.parse(myCookie);
   }
   return parseCookie;
};