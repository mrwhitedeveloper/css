/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/js-cookie@2.2.1/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 function changeColor(element, btype) {
  var txt = '';
  if (btype == 1) {
      txt = "background:#A9A9A9;color:white;";
  } else if (btype == 2) {
      txt = "background:#696969;color:white;";
  } else if (btype == 3) {
      txt = "background:black;color:white;";
  } else if (btype == 4) {
      txt = "background:white;color:black;";
  } else if (btype == 5) {
      txt = "text-decoration: underline;";
  }
  document.getElementById(element).style = txt;
  var items4 = document.body.querySelectorAll("a");
  for (var i = 0, len = items4.length; i < len; i++) {
      items4[i].style = txt;
  }

}

function AddHC(element, type2) {
  var element = document.getElementById(element);
  element.classList.add("highcontrast");
}

function AddHCClass(element, type2) {
  var items = document.body.getElementsByClassName(element);
  for (var i = 0, len = items.length; i < len; i++) {
      items[i].classList.add("highcontrast");
  }
  element.classList.add("highcontrast");
}

function RemoveHC(element, type2) {
  var element = document.getElementById(element);
  if (element.classList.contains('highcontrast')) {
      document.getElementById(element).classList.remove("highcontrast");
  } else {

  }

}

function RemoveHCClass(element, type2) {
  var items = document.body.getElementsByClassName(element);
  for (var i = 0, len = items.length; i < len; i++) {
      if (items[i].classList.contains('highcontrast')) {
          items[i].classList.remove("highcontrast");
      } else {

      }
  }


}

function changeColorByClass(element, btype) {
  var txt = '';
  if (btype == 1) {
      txt = "background:#A9A9A9;color:white;";
  } else if (btype == 2) {
      txt = "background:#696969;color:white;";
  } else if (btype == 3) {
      txt = "background:black;color:white;";
  } else if (btype == 4) {
      txt = "background:white;color:black;";
  } else if (btype == 5) {
      txt = "text-decoration: underline;";
  }
  var items = document.body.getElementsByClassName(element);
  for (var i = 0, len = items.length; i < len; i++) {
      items[i].style = txt;
  }
  var items4 = document.body.querySelectorAll("a");
  for (var i = 0, len = items4.length; i < len; i++) {
      items4[i].style = txt;
  }
  var items5 = document.body.querySelectorAll("div");
  for (var i = 0, len = items5.length; i < len; i++) {
      items5[i].style = txt;
  }

}

function changeColorImage(element) {
  var items = document.body.getElementsByClassName(element);
  for (var i = 0, len = items.length; i < len; i++) {
      items[i].style = "filter: grayscale(100%) sepia(100%);";
  }
  console.log("highContrast 2");
}

function highContrast() {
  var color = '#A9A9A9';
  //document.body.style= "grayscale(100%)"; 
  // changeColorImage('custom-logo');
  // changeColor("main-nav",2);
  // changeColor("main-slider",2);
  // changeColor("tophead",2);
  // changeColor("featured-content",2);
  // changeColorByClass("container",2);
  //  changeColorByClass("panel",2);
  //   changeColorByClass("site-content",2);
  //   changeColorByClass("site-footer",2);
  //    changeColorByClass("panel",2);
  //changeColorByClass("djtabs-in-border",2);

  AddHC("main-nav", 2);
  AddHC("main-slider", 2);
  AddHC("tophead", 2);
  AddHC("featured-content", 2);
  AddHCClass("container", 2)
  AddHCClass("panel", 2);
}

function noHighContrast() {
  RemoveHCClass("container", 2)
  RemoveHCClass("panel", 2);
  RemoveHC("main-nav", 2);
  RemoveHC("main-slider", 2);
  RemoveHC("tophead", 2);
  RemoveHC("featured-content", 2);
}

function linkUnderline() {

  var items4 = document.body.querySelectorAll("a");
  for (var i = 0, len = items4.length; i < len; i++) {
      items4[i].style = "text-decoration: underline;background:#000000;color:#FFFF00;";
  }
}! function(e) {
  var n;
  if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
      var t = window.Cookies,
          o = window.Cookies = e();
      o.noConflict = function() {
          return window.Cookies = t, o
      }
  }
}(function() {
  function e() {
      for (var e = 0, n = {}; e < arguments.length; e++) {
          var t = arguments[e];
          for (var o in t) n[o] = t[o]
      }
      return n
  }

  function n(e) {
      return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
  }
  return function t(o) {
      function r() {}

      function i(n, t, i) {
          if ("undefined" != typeof document) {
              "number" == typeof(i = e({
                  path: "/"
              }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
              try {
                  var c = JSON.stringify(t);
                  /^[\{\[]/.test(c) && (t = c)
              } catch (e) {}
              t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
              var f = "";
              for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
              return document.cookie = n + "=" + t + f
          }
      }

      function c(e, t) {
          if ("undefined" != typeof document) {
              for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                  var f = i[c].split("="),
                      u = f.slice(1).join("=");
                  t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                  try {
                      var a = n(f[0]);
                      if (u = (o.read || o)(u, a) || n(u), t) try {
                          u = JSON.parse(u)
                      } catch (e) {}
                      if (r[a] = u, e === a) break
                  } catch (e) {}
              }
              return e ? r[e] : r
          }
      }
      return r.set = i, r.get = function(e) {
          return c(e, !1)
      }, r.getJSON = function(e) {
          return c(e, !0)
      }, r.remove = function(n, t) {
          i(n, "", e(t, {
              expires: -1
          }))
      }, r.defaults = {}, r.withConverter = t, r
  }(function() {})
});
(function($) {
  $(document).ready(function() {
      // Check (onLoad) if the cookie is there and set the class if it is
      if (Cookies.get('highcontrast') == "yes") {
          $("body").addClass("outlight");
      } else {
        $("body").removeClass("outlight");
      }

      $("#aoutlight").click(function() {
        Cookies.set('highcontrast', 'yes', {
            expires: 7,
            path: '/'
        });

       $("body").addClass("outlight");
      });
      $("#anooutlight").click(function() {
        Cookies.set('highcontrast', 'no', {
            expires: 7,
            path: '/'
        });
        $("body").removeClass("outlight");
    });

  })
})(jQuery);