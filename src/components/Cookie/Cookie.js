export const setCookie = (cname, cvalue, exdays) => {

   const oldCookie = getParseCookie();

   if (oldCookie.length > 0) {
      let newCookie = cvalue.pop();
      oldCookie.push(newCookie);
      document.cookie = cname + "=" + JSON.stringify(oldCookie);
      return;
   }

   document.cookie = cname + "=" + JSON.stringify(cvalue);
};

export const updateCookie = (name, value) => {
   document.cookie = name + "=" + JSON.stringify(value);
};

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