(()=>{"use strict";var n,e={347:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,'/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\nbody {\n    height: 400px;\n    width: 400px;\n}',""]);const s=i},277:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([n.id,".App {\n    text-align: center;\n  }\n  \n  label.suppliers__label {\n      display: flex;\n      flex-direction: column;\n      flex-wrap: wrap;\n      font-size: 13px;\n      margin-top: 13px;\n      color: rgba(17, 17, 17, 0.48);\n  }\n  label.suppliers__label > select:focus-visible,\n  label.suppliers__label > select:focus,\n  label.suppliers__label > select:hover,\n   label.suppliers__label > input:focus-visible,\n  label.suppliers__label > input:focus,\n  label.suppliers__label > input:hover  {\n      box-shadow: 0 0 0 1px #00366c;\n      outline: none;\n  }\n  \n  ul.suppliers__ul {\n      padding: 3px;\n      background: #FFFFFF;\n      overflow: auto;\n      margin: 0;\n      HEIGHT: 102PX;\n  }\n  \n  .suppliers__checkbox  input[type=checkbox]:checked + .checkbox-blog-switch {\n      background: #91C03C;\n  }\n  .suppliers__checkbox input[type=\"checkbox\"]:not(:disabled) + .checkbox-blog-switch {\n      cursor: pointer;\n      margin-left: 6px;\n  }\n  \n  .checkbox-blog input[type=checkbox]:checked + .checkbox-blog-switch i.fa-solid.fa-check {\n      display: block;\n  }\n  \n  .suppliers__checkbox  input[type=checkbox] {\n      display: block;\n      width: 0;\n      height: 0;\n      position: absolute;\n      z-index: -1;\n      opacity: 0;\n  }\n  .suppliers__checkbox .checkbox-blog-switch:after {\n      content: '';\n      position: absolute;\n      top: 4px;\n      right: 6px;\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background: #fff;\n      /* box-shadow: 0 3px 5px rgba(0, 0, 0, .3); */\n      transition: .15s;\n      border: 2px solid #C1DC92;\n      transition: all .5s ease;\n  }\n  \n  .suppliers__checkbox .checkbox-blog-switch:before {\n      content: '';\n      position: absolute;\n      top: 3px;\n      left: 4px;\n      display: inline-block;\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: #91C03C;\n      /* box-shadow: 0 3px 5px rgba(0, 0, 0, .3); */\n      transition: all .4s ease;\n  }\n  .suppliers__checkbox .checkbox-blog-switch {\n      position: relative;\n      display: inline-block;\n      box-sizing: border-box;\n      width: 51px;\n      height: 26px;\n      border-radius: 25%/50%;\n      vertical-align: top;\n      background: #fff;\n      transition: .2s;\n      border: 2px solid #C1DC92;\n      box-shadow: 0px 0px 5px rgba(21, 21, 21, 0.28);\n  }\n  \n  div#root {\n      background: url(https://konimboimages.s3.amazonaws.com/system/photos/762011/original/23ad31ae288ac0553820e7562e06f33b.svg?1672231177);\n      background-repeat: no-repeat;\n      background-position: bottom left;\n      background-size: 93px;\n      height: 100%;\n  }\n  label.suppliers__checkbox {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      color: #000000;\n      font-size: 15px;\n      font-weight: 500;\n      margin-top: 7px;\n  }\n  \n  .suppliers__button:hover{\n    background: linear-gradient(315deg, #4D7800 -0.12%, #9AD03B 99.88%);\n  }\n  .suppliers__button{\n      width: 100%;\n      height: 36px;\n      background: linear-gradient(315deg, #70A414 -0.12%, #AED667 99.88%);\n      border-radius: 64px;\n      border: none;\n      color: white;\n      font-size: 19px;\n      font-weight: 700;\n      margin: auto;\n      display: block;\n      margin-top: 15px;\n      cursor: pointer;\n  }\n  .suppliers__button.erorr_btn{\n    cursor: not-allowed;\n  }\n  .suppliers_ulWrapper {\n      padding: 6px;\n      background: #FFFFFF;\n      box-shadow: 0px 0px 6px 1px rgba(51, 51, 51, 0.16);\n      border-radius: 6px;\n      height: 120px;\n      direction: ltr;\n      /* overflow: auto; */\n      margin-top: 5px;\n  \n  }\n    .suppliers_ulWrapper.none{\n        display:none;\n    }\n\n\n\n  ul.suppliers__ul li span {\n      background-image: url(\"https://konimboimages.s3.amazonaws.com/system/photos/747535/original/d898bf4417163494b25a80e29b13a11f.svg?1668671938\");\n      background-color: transparent;\n      border: none;\n      background-repeat: no-repeat;\n      font-size: 0;\n      width: 15px;\n      padding: 0;\n      background-position: center;\n  }\n  \n  ul.suppliers__ul li {\n      list-style: none;\n      color: #111111;\n      font-size: 13px;\n      display: flex;\n      font-weight: 400;\n      flex-direction: row-reverse;\n      justify-content: space-between;\n      height: 20px;\n      padding: 3px 8px;\n      line-height: 20px;\n  }\n  \n  ul::-webkit-scrollbar {\n      width: 3px;\n   \n    \n  }\n  ul::-webkit-scrollbar-thumb {\n      background: rgba(63, 67, 80, 0.24);\n        border-radius: 100px;\n  }\n  \n  ul::-webkit-scrollbar-track, ul::-webkit-scrollbar-track {\n     background-color: transparent;\n  }\n  \n  ul.suppliers__ul li:hover {\n      background: #F3F3F3;\n  }\n  label.suppliers__label > select ,\n  label.suppliers__label > input{\n      background: #FFFFFF;\n      box-shadow: 0px 0px 6px 1px rgba(51, 51, 51, 0.16);\n      border-radius: 68.363px;\n      border: none;\n      height: 30px;\n      padding: 0 6px;\n      margin: 10px 0 0 0;\n  }\n  \n  .App-logo {\n    height: 40vmin;\n    pointer-events: none;\n  }\n  \n  @media (prefers-reduced-motion: no-preference) {\n    .App-logo {\n      animation: App-logo-spin infinite 20s linear;\n    }\n  }\n  \n  .App-header {\n    background-color: #282c34;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n  }\n  \n  .App-link {\n    color: #61dafb;\n  }\n  \n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width: 284px;\n    height: 400px;\n    background: #FFFFFF;\n    box-shadow: 0px 0px 6px 1px rgb(51 51 51 / 16%);\n    border-radius: 12px;\n    margin: 10px;\n    padding: 10px;\n    direction: rtl;\n    padding-top: 6px;\n}\n\ncode {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n}\n\nh1.suppliers__headline {\n    color: #8CBD34;\n    font-size: 20px;\n    padding-right: 50px;\n    position: relative;\n    height: 51px;\n    line-height: 51px;\n   \n}\n\nh1.suppliers__headline:before {\n    content: \"\";\n    background: url(https://konimboimages.s3.amazonaws.com/system/photos/761908/original/ff5204462ca25f2ce1f665941a5c02a9.svg?1672217808);\n    width: 41px;\n    height: 51px;\n    display: block;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n}  \n\n.suppliers__headline_wrapper{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.sittings_btn{\n    background: url(https://konimboimages.s3.amazonaws.com/system/photos/763701/original/de1538534f0431ff2de7bcd7d45baa8e.svg?1672745538);\n    display: block;\n    height: auto;\n    width: 30px;\n    background-position: center;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n\n.back_btn {\n    background: url(https://konimboimages.s3.amazonaws.com/system/photos/763831/original/44060f5cd9eb9462f0cc94e01587fe26.svg?1672757391);\n    width: 40px;\n    height: 35px;\n    display: block;\n    margin-top: 10px;\n    background-repeat: no-repeat;\n    background-position: right;\n    background-size: 30px 30px;\n    cursor: pointer;\n}\n.erorr_msg {\n    color: #CA3142!important;\n    padding-right: 20px;\n    background-image: url(https://konimboimages.s3.amazonaws.com/system/photos/736976/original/85886624cb7720543bb8543d7d5ea526.svg?1666264253);\n    background-repeat: no-repeat;\n    background-position: right;\n    margin-top: 15px;\n}",""]);const s=i},294:(n,e,t)=>{n.exports=t(408)},109:(n,e,t)=>{var o=t(294),a=t(745),r=t(379),i=t.n(r),s=t(795),l=t.n(s),c=t(569),p=t.n(c),d=t(565),u=t.n(d),b=t(216),h=t.n(b),g=t(589),m=t.n(g),f=t(347),w={};w.styleTagTransform=m(),w.setAttributes=u(),w.insert=p().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=h(),i()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals;var x=t(277),k={};k.styleTagTransform=m(),k.setAttributes=u(),k.insert=p().bind(null,"head"),k.domAPI=l(),k.insertStyleElement=h(),i()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;const y=n=>{const[e,t]=(0,o.useState)([]),[a,r]=(0,o.useState)(""),[i,s]=(0,o.useState)("");return(0,o.useEffect)((()=>{let e=localStorage.getItem("jsonLink");e?(console.log("prop.fetchLink",n.fetchLink),fetch(e).then((n=>n.json())).then((e=>{t(e),r(e[0].id),n.addVal(e[0].id),n.ErorrIsActive("")})).catch((e=>{s("שגיאה - לינק קטגוריות לא תקין"),n.ErorrIsActive("erorr_btn"),console.log(e)}))):(console.log("else prop.jsonLinkStoreCategory",n.fetchLink),n.ErorrIsActive("erorr_btn"),s("יש לעדכן לינק קטגוריות חנות (ניתן לעדכן בלחיצה על אייקון הגדרות)"))}),[]),o.createElement("label",{className:n.classLabel},n.label,0!=e.length?o.createElement("select",{value:a,onChange:function(e){r(e.target.value),n.addVal(e.target.value)}},e.map(((n,e)=>o.createElement("option",{key:e,value:n.id},n.title_he)))):o.createElement("div",{className:"erorr_msg"},i))},v=n=>{const[e,t]=(0,o.useState)(n.addjsonData);return(0,o.useEffect)((()=>{try{t(n.addjsonData),console.log("prop.addjson22",e)}catch(n){console.log(n)}}),[n.addjsonData]),(0,o.useEffect)((()=>{try{0!=e.length&&(localStorage.setItem("data",JSON.stringify(e)),console.log("delet prop",e))}catch(n){console.log(n)}}),[e]),console.log("prop.addjson8888888888",n.addjsonData),console.log("list11",e),o.createElement("label",{className:n.classLabel},n.label,o.createElement("div",{className:"suppliers_ulWrapper"},o.createElement("ul",{className:n.classUl},e&&e.filter((e=>e.category_id==n.val)).map((n=>{const a=Math.floor(1e4*Math.random());return console.log("randomNumber",a),o.createElement("li",{key:n.item},o.createElement("label",null,n.product_name," ",n.category_id),o.createElement("span",{onClick:()=>(n=>{const o=e.filter((e=>e.item!==n));t(o)})(n.item)}))})))))},_=function(n){const[e,t]=(0,o.useState)({}),[a,r]=(0,o.useState)([]),[i,s]=(0,o.useState)(!1),l=(0,o.useRef)(null),c=(0,o.useRef)(null);return console.log("ffffffffffff"),(0,o.useEffect)((()=>{try{localStorage.getItem("data")||s(!0)}catch(n){console.log(n)}}),[]),(0,o.useEffect)((()=>{0!=a.length&&(localStorage.setItem("data",JSON.stringify(a)),s(!1),n.addjson(JSON.parse(localStorage.getItem("data"))))}),[a]),o.createElement("form",{onSubmit:n=>{n.preventDefault();try{const n={category_id:l.current.value,product_name:c.current.value,item:a.length+1};if(i)r((e=>[...e,n]));else{const e=JSON.parse(localStorage.getItem("data"));r([...e,n])}l.current.value="",c.current.value=""}catch(n){console.log(n)}},className:"suppliers_ulWrapper none"},o.createElement("input",{type:"text",name:"category_id",ref:l}),o.createElement("input",{type:"text",name:"product_name",ref:c}),o.createElement("button",{type:"submit"},"Save"))},S=function(n){const e=(0,o.useRef)(null);return console.log("SittingsComponent"),(0,o.useEffect)((()=>{try{localStorage.getItem("jsonLink")&&(e.current.value=localStorage.getItem("jsonLink"),console.log("get jsonLink"))}catch(n){console.log(n)}}),[]),o.createElement("form",{onSubmit:t=>{t.preventDefault();try{localStorage.setItem("jsonLink",e.current.value),n.setJsonLink(e.current.value),n.SittingsIsActive(!1),console.log("set jsonLink")}catch(n){console.log(n)}}},o.createElement("span",{className:"back_btn",onClick:()=>n.SittingsIsActive(!1)}),o.createElement("label",{className:"suppliers__label"},"הכנס/י לינק קטגוריות החנות",o.createElement("input",{type:"text",name:"jsonLink",ref:e})),o.createElement("button",{className:"suppliers__button",type:"submit"},"שמירה"))},E=()=>{const[n,e]=o.useState("fruit"),[t,a]=o.useState("t"),[r,i]=o.useState(),[s,l]=(0,o.useState)([]),[c,p]=(0,o.useState)(!1),[d,u]=(0,o.useState)(""),[b,h]=(0,o.useState)(" ");console.log("sittingsIsActive",c),(0,o.useEffect)((()=>{const n=JSON.parse(localStorage.getItem("data"));console.log("dataJSON1",n),console.log("localStorage.getItem",localStorage.getItem("data")),localStorage.getItem("data")&&(l(n),console.log("dataJSON is not empty",n))}),[]),chrome.runtime.onMessage.addListener((function(n,e,t){"DATA"===n.type&&(a(n.data),console.log("settest"))}));let g=o.createElement("h1",{className:"suppliers__headline"},"משיכת מוצרים");return c&&(g=o.createElement("h1",{className:"suppliers__headline"}," הגדרות")),o.createElement("div",{className:"suppliers_wrapper"},o.createElement("div",{className:"suppliers__headline_wrapper"},g,o.createElement("span",{className:"sittings_btn",onClick:()=>p(!0)})),!0===c?o.createElement(S,{setJsonLink:n=>{u(n)},SittingsIsActive:n=>{p(n)}}):o.createElement("div",null,o.createElement("label",{className:"suppliers__checkbox"},"אפשר הוספת מוצרים",o.createElement("input",{type:"checkbox"}),o.createElement("span",{className:"checkbox-blog-switch"})),o.createElement(_,{addjson:n=>{l(n)}}),o.createElement(y,{label:"בחרו קטגוריה לשיוך המוצרים אצלכם בחנות",classLabel:"suppliers__label",addVal:n=>{e(n)},fetchLink:d,ErorrIsActive:n=>{h(n)}}),o.createElement(v,{addjsonData:s,val:n,label:"קישורי מוצרים",classLabel:"suppliers__label",classUl:"suppliers__ul"}),o.createElement("button",{type:"button",className:"suppliers__button "+b},"משיכת מוצרים")),o.createElement("p",null,"We eat ",n,"!"),o.createElement("p",null,"link ",d,"!"),o.createElement("p",null,"active ",c,"!"),o.createElement("p",null,"new data ",t,"!"))};!function(){const n=document.createElement("div");if(document.body.appendChild(n),!n)throw new Error("Can not find AppContainer");const e=(0,a.s)(n);console.log(n),e.render(o.createElement(E,null))}()}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,n=[],o.O=(e,t,a,r)=>{if(!t){var i=1/0;for(p=0;p<n.length;p++){for(var[t,a,r]=n[p],s=!0,l=0;l<t.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((n=>o.O[n](t[l])))?t.splice(l--,1):(s=!1,r<i&&(i=r));if(s){n.splice(p--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var p=n.length;p>0&&n[p-1][2]>r;p--)n[p]=n[p-1];n[p]=[t,a,r]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n={42:0};o.O.j=e=>0===n[e];var e=(e,t)=>{var a,r,[i,s,l]=t,c=0;if(i.some((e=>0!==n[e]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(l)var p=l(o)}for(e&&e(t);c<i.length;c++)r=i[c],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(p)},t=self.webpackChunkreactjs_chrome=self.webpackChunkreactjs_chrome||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),o.nc=void 0;var a=o.O(void 0,[647],(()=>o(109)));a=o.O(a)})();