export const setCookie = (cname, cvalue, exdays) => {
   // const d = new Date();
   // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
   // let expires = "expires=" + d.toUTCString();
   // document.cookie = cname + "=" + JSON.stringify(cvalue) + ";" + expires + ";path=/";
   document.cookie = cname + "=" + JSON.stringify(cvalue);
};

// export const getCookie = (cname) => {
//    let name = cname + "=";
//    let ca = document.cookie.split(';');
//    for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//          c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//          return c.substring(name.length, c.length);
//       }
//    }
//    return "";
// };

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

export const doSomething = () => {
   let myCookie = getCookie("cards");
   let parseCookie = [];
   if (myCookie === null) {
      // do cookie doesn't exist stuff;
   } else {
      // do cookie exists stuff
      console.log('myCookie', myCookie);
      parseCookie = JSON.parse(myCookie);
   }
   return parseCookie;
};