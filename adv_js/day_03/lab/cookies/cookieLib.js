
var cookieLib = {

  setCookie: function (name, value, expiryDate) {
    let cookie = name + "=" + encodeURIComponent(value);

    if (expiryDate) {
      cookie += ";expires=" + expiryDate.toUTCString();
    }

    document.cookie = cookie + ";path=/";
  },

  getCookie: function (name) {
    let cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
      let [key, value] = cookies[i].split("=");
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return null;
  },

  deleteCookie: function (name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  },

  allCookieList: function () {
    let cookies = document.cookie.split("; ");
    let result = [];

    cookies.forEach(cookie => {
      let [key, value] = cookie.split("=");
      result.push({ name: key, value: value });
    });

    return result;
  },

  hasCookie: function (name) {
    return this.getCookie(name) !== null;
  }
};
