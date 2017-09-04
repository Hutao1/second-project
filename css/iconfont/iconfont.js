(function(window){var svgSprite='<svg><symbol id="icon-fenlei" viewBox="0 0 1025 1024"><path d="M321.091992 98.523921c0-17.674545 14.041808-32.001855 32.032554-32.001855L992.036004 66.522066c17.690918 0 32.032554 14.204513 32.032554 32.001855 0 17.674545-14.041808 32.001855-32.032554 32.001855L353.123522 130.525776C335.433628 130.526799 321.091992 116.321262 321.091992 98.523921zM321.091992 482.550271c0-17.674545 14.041808-32.001855 32.032554-32.001855L992.036004 450.548416c17.690918 0 32.032554 14.204513 32.032554 32.001855 0 17.674545-14.041808 32.001855-32.032554 32.001855L353.123522 514.552126C335.433628 514.552126 321.091992 500.347612 321.091992 482.550271zM321.091992 866.575598c0-17.674545 14.041808-32.001855 32.032554-32.001855L992.036004 834.573743c17.690918 0 32.032554 14.204513 32.032554 32.001855 0 17.674545-14.041808 32.001855-32.032554 32.001855L353.123522 898.577452C335.433628 898.577452 321.091992 884.372939 321.091992 866.575598zM-4.0e-06 98.523921c0-17.674545 14.431687-32.001855 31.707143-32.001855l128.59889 0c17.510816 0 31.707143 14.204513 31.707143 32.001855 0 17.674545-14.431687 32.001855-31.707143 32.001855L31.707139 130.525776C14.196323 130.526799-4.0e-06 116.321262-4.0e-06 98.523921zM-4.0e-06 482.550271c0-17.674545 14.431687-32.001855 31.707143-32.001855l128.59889 0c17.510816 0 31.707143 14.204513 31.707143 32.001855 0 17.674545-14.431687 32.001855-31.707143 32.001855L31.707139 514.552126C14.196323 514.552126-4.0e-06 500.347612-4.0e-06 482.550271zM-4.0e-06 866.575598c0-17.674545 14.431687-32.001855 31.707143-32.001855l128.59889 0c17.510816 0 31.707143 14.204513 31.707143 32.001855 0 17.674545-14.431687 32.001855-31.707143 32.001855L31.707139 898.577452C14.196323 898.577452-4.0e-06 884.372939-4.0e-06 866.575598z"  ></path></symbol><symbol id="icon-gouwuchekong" viewBox="0 0 1028 1024"><path d="M354.1333333333333 782.778q19.456 0 36.864 7.167999999999999t30.208 19.968 20.48 30.208 7.679999999999999 36.864-7.679999999999999 36.864-20.48 30.208-30.208 20.48-36.864 7.679999999999999q-20.48 0-37.888-7.679999999999999t-30.208-20.48-20.48-30.208-7.679999999999999-36.864 7.679999999999999-36.864 20.48-30.208 30.208-19.968 37.888-7.167999999999999zM780.1173333333334 784.826q19.456 0 37.376 7.167999999999999t30.719999999999995 19.968 20.48 30.208 7.679999999999999 36.864-7.679999999999999 36.864-20.48 30.208-30.719999999999995 20.48-37.376 7.679999999999999-36.864-7.679999999999999-30.208-20.48-20.48-30.208-7.679999999999999-36.864 7.679999999999999-36.864 20.48-30.208 30.208-19.968 36.864-7.167999999999999zM952.1493333333332 203.19400000000002q28.671999999999997 0 44.544 7.679999999999999t22.528 18.944 6.144 24.064-3.5839999999999996 22.016-13.311999999999998 37.888-22.016 62.97599999999999-23.552 68.096-18.944 53.24799999999999q-13.311999999999998 40.96-33.28 56.832t-49.664 15.871999999999998l-35.84 0-65.536 0-86.016 0-96.256 0-253.95199999999997 0 14.335999999999999 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.335999999999999l-49.152 0-94.208 0-118.78399999999999 0-119.80800000000002 0-99.328 0-55.29599999999999 0q-20.48 0-34.304-9.216t-23.04-24.064-14.847999999999999-32.256-8.704-32.768q-1.024-6.144-5.632-29.695999999999998t-11.264-58.88-14.847999999999999-78.848-16.384-87.552q-19.456-103.42399999999999-44.032-230.39999999999998l-76.8 0q-15.359999999999998 0-25.6-7.679999999999999t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.823999999999998-33.792t37.376-12.288l103.42399999999999 0q20.48 0 32.768 6.144t19.456 15.359999999999998 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM914.2613333333335 294.33000000000004l-641.024-2.048 35.84 185.344 535.552 1.024z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)