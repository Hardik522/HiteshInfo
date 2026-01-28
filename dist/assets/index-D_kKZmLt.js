import{R as Fa,r as jt}from"./index-DHM871Nz.js";/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Se(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function Lt(e){if(Array.isArray(e))return e}function Mt(e){if(Array.isArray(e))return Se(e)}function $t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Rt(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ca(r.key),r)}}function Dt(e,a,t){return a&&Rt(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Re(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||t.return==null||t.return()}finally{if(s)throw o}}}}function p(e,a,t){return(a=Ca(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function zt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wt(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=o.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&t.return!=null&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function Yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Je(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?Je(Object(t),!0).forEach(function(r){p(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function fe(e,a){return Lt(e)||Wt(e,a)||Re(e,a)||Yt()}function O(e){return Mt(e)||zt(e)||Re(e)||Ut()}function Ht(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ca(e){var a=Ht(e,"string");return typeof a=="symbol"?a:a+""}function oe(e){"@babel/helpers - typeof";return oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},oe(e)}function Re(e,a){if(e){if(typeof e=="string")return Se(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Se(e,a):void 0}}var qe=function(){},De={},Na={},Ta=null,_a={mark:qe,measure:qe};try{typeof window<"u"&&(De=window),typeof document<"u"&&(Na=document),typeof MutationObserver<"u"&&(Ta=MutationObserver),typeof performance<"u"&&(_a=performance)}catch{}var Gt=De.navigator||{},Qe=Gt.userAgent,Ze=Qe===void 0?"":Qe,M=De,x=Na,ea=Ta,ae=_a;M.document;var L=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",ja=~Ze.indexOf("MSIE")||~Ze.indexOf("Trident/"),pe,Bt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Xt=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,La={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Vt={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ma=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],I="classic",Q="duotone",$a="sharp",Ra="sharp-duotone",Da="chisel",za="etch",Wa="jelly",Ya="jelly-duo",Ua="jelly-fill",Ha="notdog",Ga="notdog-duo",Ba="slab",Xa="slab-press",Va="thumbprint",Ka="whiteboard",Kt="Classic",Jt="Duotone",qt="Sharp",Qt="Sharp Duotone",Zt="Chisel",er="Etch",ar="Jelly",tr="Jelly Duo",rr="Jelly Fill",nr="Notdog",ir="Notdog Duo",or="Slab",sr="Slab Press",lr="Thumbprint",fr="Whiteboard",Ja=[I,Q,$a,Ra,Da,za,Wa,Ya,Ua,Ha,Ga,Ba,Xa,Va,Ka];pe={},p(p(p(p(p(p(p(p(p(p(pe,I,Kt),Q,Jt),$a,qt),Ra,Qt),Da,Zt),za,er),Wa,ar),Ya,tr),Ua,rr),Ha,nr),p(p(p(p(p(pe,Ga,ir),Ba,or),Xa,sr),Va,lr),Ka,fr);var ur={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},cr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},dr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),mr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},qa=["fak","fa-kit","fakd","fa-kit-duotone"],aa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vr=["kit"],hr="kit",pr="kit-duotone",gr="Kit",br="Kit Duotone";p(p({},hr,gr),pr,br);var yr={kit:{"fa-kit":"fak"}},xr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wr={kit:{fak:"fa-kit"}},ta={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ge,te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ar=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Sr="classic",kr="duotone",Ir="sharp",Pr="sharp-duotone",Er="chisel",Or="etch",Fr="jelly",Cr="jelly-duo",Nr="jelly-fill",Tr="notdog",_r="notdog-duo",jr="slab",Lr="slab-press",Mr="thumbprint",$r="whiteboard",Rr="Classic",Dr="Duotone",zr="Sharp",Wr="Sharp Duotone",Yr="Chisel",Ur="Etch",Hr="Jelly",Gr="Jelly Duo",Br="Jelly Fill",Xr="Notdog",Vr="Notdog Duo",Kr="Slab",Jr="Slab Press",qr="Thumbprint",Qr="Whiteboard";ge={},p(p(p(p(p(p(p(p(p(p(ge,Sr,Rr),kr,Dr),Ir,zr),Pr,Wr),Er,Yr),Or,Ur),Fr,Hr),Cr,Gr),Nr,Br),Tr,Xr),p(p(p(p(p(ge,_r,Vr),jr,Kr),Lr,Jr),Mr,qr),$r,Qr);var Zr="kit",en="kit-duotone",an="Kit",tn="Kit Duotone";p(p({},Zr,an),en,tn);var rn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},nn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},ke={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},on=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Qa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Ar,on),sn=["solid","regular","light","thin","duotone","brands","semibold"],Za=[1,2,3,4,5,6,7,8,9,10],ln=Za.concat([11,12,13,14,15,16,17,18,19,20]),fn=["aw","fw","pull-left","pull-right"],un=[].concat(O(Object.keys(nn)),sn,fn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",te.GROUP,te.SWAP_OPACITY,te.PRIMARY,te.SECONDARY]).concat(Za.map(function(e){return"".concat(e,"x")})).concat(ln.map(function(e){return"w-".concat(e)})),cn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},_="___FONT_AWESOME___",Ie=16,et="fa",at="svg-inline--fa",z="data-fa-i2svg",Pe="data-fa-pseudo-element",dn="data-fa-pseudo-element-pending",ze="data-prefix",We="data-icon",ra="fontawesome-i2svg",mn="async",vn=["HTML","HEAD","STYLE","SCRIPT"],tt=["::before","::after",":before",":after"],rt=(function(){try{return!0}catch{return!1}})();function Z(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[I]}})}var nt=f({},La);nt[I]=f(f(f(f({},{"fa-duotone":"duotone"}),La[I]),aa.kit),aa["kit-duotone"]);var hn=Z(nt),Ee=f({},mr);Ee[I]=f(f(f(f({},{duotone:"fad"}),Ee[I]),ta.kit),ta["kit-duotone"]);var na=Z(Ee),Oe=f({},ke);Oe[I]=f(f({},Oe[I]),wr.kit);var Ye=Z(Oe),Fe=f({},rn);Fe[I]=f(f({},Fe[I]),yr.kit);Z(Fe);var pn=Bt,it="fa-layers-text",gn=Xt,bn=f({},ur);Z(bn);var yn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],be=Vt,xn=[].concat(O(vr),O(un)),K=M.FontAwesomeConfig||{};function wn(e){var a=x.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function An(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Sn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sn.forEach(function(e){var a=fe(e,2),t=a[0],r=a[1],n=An(wn(t));n!=null&&(K[r]=n)})}var ot={styleDefault:"solid",familyDefault:I,cssPrefix:et,replacementClass:at,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var B=f(f({},ot),K);B.autoReplaceSvg||(B.observeMutations=!1);var m={};Object.keys(ot).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){B[e]=t,J.forEach(function(r){return r(m)})},get:function(){return B[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){B.cssPrefix=a,J.forEach(function(t){return t(m)})},get:function(){return B.cssPrefix}});M.FontAwesomeConfig=m;var J=[];function kn(e){return J.push(e),function(){J.splice(J.indexOf(e),1)}}var Y=Ie,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function In(e){if(!(!e||!L)){var a=x.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=x.head.childNodes,r=null,n=t.length-1;n>-1;n--){var o=t[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return x.head.insertBefore(a,r),e}}var Pn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){for(var e=12,a="";e-- >0;)a+=Pn[Math.random()*62|0];return a}function X(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function Ue(e){return e.classList?X(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function st(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function En(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(st(e[t]),'" ')},"").trim()}function ue(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function He(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function On(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function Fn(e){var a=e.transform,t=e.width,r=t===void 0?Ie:t,n=e.height,o=n===void 0?Ie:n,i="";return ja?i+="translate(".concat(a.x/Y-r/2,"em, ").concat(a.y/Y-o/2,"em) "):i+="translate(calc(-50% + ".concat(a.x/Y,"em), calc(-50% + ").concat(a.y/Y,"em)) "),i+="scale(".concat(a.size/Y*(a.flipX?-1:1),", ").concat(a.size/Y*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var Cn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function lt(){var e=et,a=at,t=m.cssPrefix,r=m.replacementClass,n=Cn;if(t!==e||r!==a){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(o,".".concat(t,"-")).replace(i,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var oa=!1;function ye(){m.autoAddCss&&!oa&&(In(lt()),oa=!0)}var Nn={mixout:function(){return{dom:{css:lt,insertCss:ye}}},hooks:function(){return{beforeDOMElementCreation:function(){ye()},beforeI2svg:function(){ye()}}}},j=M||{};j[_]||(j[_]={});j[_].styles||(j[_].styles={});j[_].hooks||(j[_].hooks={});j[_].shims||(j[_].shims=[]);var E=j[_],ft=[],ut=function(){x.removeEventListener("DOMContentLoaded",ut),se=1,ft.map(function(a){return a()})},se=!1;L&&(se=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),se||x.addEventListener("DOMContentLoaded",ut));function Tn(e){L&&(se?setTimeout(e,0):ft.push(e))}function ee(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?st(e):"<".concat(a," ").concat(En(r),">").concat(o.map(ee).join(""),"</").concat(a,">")}function sa(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var xe=function(a,t,r,n){var o=Object.keys(a),i=o.length,s=t,l,u,c;for(r===void 0?(l=1,c=a[o[0]]):(l=0,c=r);l<i;l++)u=o[l],c=s(c,a[u],u,a);return c};function ct(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function la(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function Ce(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,o=la(a);typeof E.hooks.addPack=="function"&&!n?E.hooks.addPack(e,la(a)):E.styles[e]=f(f({},E.styles[e]||{}),o),e==="fas"&&Ce("fa",a)}var q=E.styles,_n=E.shims,dt=Object.keys(Ye),jn=dt.reduce(function(e,a){return e[a]=Object.keys(Ye[a]),e},{}),Ge=null,mt={},vt={},ht={},pt={},gt={};function Ln(e){return~xn.indexOf(e)}function Mn(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!Ln(n)?n:null}var bt=function(){var a=function(o){return xe(q,function(i,s,l){return i[l]=xe(s,o,{}),i},{})};mt=a(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),vt=a(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),gt=a(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var t="far"in q||m.autoFetchSvg,r=xe(_n,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!t&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});ht=r.names,pt=r.unicodes,Ge=ce(m.styleDefault,{family:m.familyDefault})};kn(function(e){Ge=ce(e.styleDefault,{family:m.familyDefault})});bt();function Be(e,a){return(mt[e]||{})[a]}function $n(e,a){return(vt[e]||{})[a]}function D(e,a){return(gt[e]||{})[a]}function yt(e){return ht[e]||{prefix:null,iconName:null}}function Rn(e){var a=pt[e],t=Be("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function $(){return Ge}var xt=function(){return{prefix:null,iconName:null,rest:[]}};function Dn(e){var a=I,t=dt.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return Ja.forEach(function(r){(e.includes(t[r])||e.some(function(n){return jn[r].includes(n)}))&&(a=r)}),a}function ce(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?I:t,n=hn[r][e];if(r===Q&&!e)return"fad";var o=na[r][e]||na[r][n],i=e in E.styles?e:null,s=o||i||null;return s}function zn(e){var a=[],t=null;return e.forEach(function(r){var n=Mn(m.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function fa(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var ua=Qa.concat(qa);function de(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,o=fa(e.filter(function(v){return ua.includes(v)})),i=fa(e.filter(function(v){return!ua.includes(v)})),s=o.filter(function(v){return n=v,!Ma.includes(v)}),l=fe(s,1),u=l[0],c=u===void 0?null:u,d=Dn(o),h=f(f({},zn(i)),{},{prefix:ce(c,{family:d})});return f(f(f({},h),Hn({values:e,family:d,styles:q,config:m,canonical:h,givenPrefix:n})),Wn(r,n,h))}function Wn(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=a==="fa"?yt(n):{},i=D(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!q.far&&q.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Yn=Ja.filter(function(e){return e!==I||e!==Q}),Un=Object.keys(ke).filter(function(e){return e!==I}).map(function(e){return Object.keys(ke[e])}).flat();function Hn(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,c=t===Q,d=a.includes("fa-duotone")||a.includes("fad"),h=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!c&&(d||h||v)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Yn.includes(t)){var y=Object.keys(s).find(function(w){return Un.includes(w)});if(y||u.autoFetchSvg){var b=dr.get(t).defaultShortPrefixId;r.prefix=b,r.iconName=D(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=$()||"fas"),r}var Gn=(function(){function e(){$t(this,e),this.definitions={}}return Dt(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),i[s]),Ce(s,i[s]);var l=Ye[I][s];l&&Ce(l,i[s]),bt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,u=i.icon,c=u[2];t[s]||(t[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(t[s][d]=u)}),t[s][l]=u}),t}}])})(),ca=[],H={},G={},Bn=Object.keys(G);function Xn(e,a){var t=a.mixoutsTo;return ca=e,H={},Object.keys(G).forEach(function(r){Bn.indexOf(r)===-1&&delete G[r]}),ca.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(t[i]=n[i]),oe(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){t[i]||(t[i]={}),t[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){H[i]||(H[i]=[]),H[i].push(o[i])})}r.provides&&r.provides(G)}),t}function Ne(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var o=H[e]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function W(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=H[e]||[];n.forEach(function(o){o.apply(null,t)})}function R(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return G[e]?G[e].apply(null,a):void 0}function Te(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||$();if(a)return a=D(t,a)||a,sa(wt.definitions,t,a)||sa(E.styles,t,a)}var wt=new Gn,Vn=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,W("noAuto")},Kn={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return L?(W("beforeI2svg",a),R("pseudoElements2svg",a),R("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Tn(function(){qn({autoReplaceSvgRoot:t}),W("watch",a)})}},Jn={icon:function(a){if(a===null)return null;if(oe(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:D(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=ce(a[0]);return{prefix:r,iconName:D(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(pn))){var n=de(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||$(),iconName:D(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var o=$();return{prefix:o,iconName:D(o,a)||a}}}},P={noAuto:Vn,config:m,dom:Kn,parse:Jn,library:wt,findIconDefinition:Te,toHtml:ee},qn=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?x:t;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&L&&m.autoReplaceSvg&&P.dom.i2svg({node:r})};function me(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ee(r)})}}),Object.defineProperty(e,"node",{get:function(){if(L){var r=x.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Qn(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(He(i)&&t.found&&!r.found){var s=t.width,l=t.height,u={x:s/l/2,y:.5};n.style=ue(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function Zn(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(t):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:i}),children:r}]}]}function ei(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function Xe(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,h=r.found?r:t,v=h.width,y=h.height,b=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(g){return u.classes.indexOf(g)===-1}).filter(function(g){return g!==""||!!g}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(y)})};!ei(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),d&&(w.attributes[z]="");var A=f(f({},w),{},{prefix:n,iconName:o,main:t,mask:r,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),S=r.found&&t.found?R("generateAbstractMask",A)||{children:[],attributes:{}}:R("generateAbstractIcon",A)||{children:[],attributes:{}},k=S.children,C=S.attributes;return A.children=k,A.attributes=C,s?Zn(A):Qn(A)}function da(e){var a=e.content,t=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[z]="");var u=f({},o.styles);He(n)&&(u.transform=Fn({transform:n,width:t,height:r}),u["-webkit-transform"]=u.transform);var c=ue(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[a]}),d}function ai(e){var a=e.content,t=e.extra,r=f(f({},t.attributes),{},{class:t.classes.join(" ")}),n=ue(t.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),o}var we=E.styles;function _e(e){var a=e[0],t=e[1],r=e.slice(4),n=fe(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(be.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(be.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(be.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:t,icon:i}}var ti={found:!1,width:512,height:512};function ri(e,a){!rt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function je(e,a){var t=a;return a==="fa"&&m.styleDefault!==null&&(a=$()),new Promise(function(r,n){if(t==="fa"){var o=yt(e)||{};e=o.iconName||e,a=o.prefix||a}if(e&&a&&we[a]&&we[a][e]){var i=we[a][e];return r(_e(i))}ri(e,a),r(f(f({},ti),{},{icon:m.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var ma=function(){},Le=m.measurePerformance&&ae&&ae.mark&&ae.measure?ae:{mark:ma,measure:ma},V='FA "7.0.1"',ni=function(a){return Le.mark("".concat(V," ").concat(a," begins")),function(){return At(a)}},At=function(a){Le.mark("".concat(V," ").concat(a," ends")),Le.measure("".concat(V," ").concat(a),"".concat(V," ").concat(a," begins"),"".concat(V," ").concat(a," ends"))},Ve={begin:ni,end:At},ne=function(){};function va(e){var a=e.getAttribute?e.getAttribute(z):null;return typeof a=="string"}function ii(e){var a=e.getAttribute?e.getAttribute(ze):null,t=e.getAttribute?e.getAttribute(We):null;return a&&t}function oi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function si(){if(m.autoReplaceSvg===!0)return ie.replace;var e=ie[m.autoReplaceSvg];return e||ie.replace}function li(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function fi(e){return x.createElement(e)}function St(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?li:fi:t;if(typeof e=="string")return x.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(St(i,{ceFn:r}))}),n}function ui(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var ie={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(St(n),t)}),t.getAttribute(z)===null&&m.keepOriginalSource){var r=x.createComment(ui(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~Ue(t).indexOf(m.replacementClass))return ie.replace(a);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return ee(s)}).join(`
`);t.setAttribute(z,""),t.innerHTML=i}};function ha(e){e()}function kt(e,a){var t=typeof a=="function"?a:ne;if(e.length===0)t();else{var r=ha;m.mutateApproach===mn&&(r=M.requestAnimationFrame||ha),r(function(){var n=si(),o=Ve.begin("mutate");e.map(n),o(),t()})}}var Ke=!1;function It(){Ke=!0}function Me(){Ke=!1}var le=null;function pa(e){if(ea&&m.observeMutations){var a=e.treeCallback,t=a===void 0?ne:a,r=e.nodeCallback,n=r===void 0?ne:r,o=e.pseudoElementsCallback,i=o===void 0?ne:o,s=e.observeMutationsRoot,l=s===void 0?x:s;le=new ea(function(u){if(!Ke){var c=$();X(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!va(d.addedNodes[0])&&(m.searchPseudoElements&&i(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&i([d.target],!0),d.type==="attributes"&&va(d.target)&&~yn.indexOf(d.attributeName))if(d.attributeName==="class"&&ii(d.target)){var h=de(Ue(d.target)),v=h.prefix,y=h.iconName;d.target.setAttribute(ze,v||c),y&&d.target.setAttribute(We,y)}else oi(d.target)&&n(d.target)})}}),L&&le.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ci(){le&&le.disconnect()}function di(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),t}function mi(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=de(Ue(e));return n.prefix||(n.prefix=$()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=$n(n.prefix,e.innerText)||Be(n.prefix,ct(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function vi(e){var a=X(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function hi(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ga(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=mi(e),r=t.iconName,n=t.prefix,o=t.rest,i=vi(e),s=Ne("parseNodeAttributes",{},e),l=a.styleParser?di(e):[];return f({iconName:r,prefix:n,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var pi=E.styles;function Pt(e){var a=m.autoReplaceSvg==="nest"?ga(e,{styleParser:!1}):ga(e);return~a.extra.classes.indexOf(it)?R("generateLayersText",e,a):R("generateSvgReplacementMutation",e,a)}function gi(){return[].concat(O(qa),O(Qa))}function ba(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!L)return Promise.resolve();var t=x.documentElement.classList,r=function(d){return t.add("".concat(ra,"-").concat(d))},n=function(d){return t.remove("".concat(ra,"-").concat(d))},o=m.autoFetchSvg?gi():Ma.concat(Object.keys(pi));o.includes("fa")||o.push("fa");var i=[".".concat(it,":not([").concat(z,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(z,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=X(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=Ve.begin("onTree"),u=s.reduce(function(c,d){try{var h=Pt(d);h&&c.push(h)}catch(v){rt||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){kt(h,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),c()})}).catch(function(h){l(),d(h)})})}function bi(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pt(e).then(function(t){t&&kt([t],a)})}function yi(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Te(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:Te(n||{})),e(r,f(f({},t),{},{mask:n}))}}var xi=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?F:r,o=t.symbol,i=o===void 0?!1:o,s=t.mask,l=s===void 0?null:s,u=t.maskId,c=u===void 0?null:u,d=t.classes,h=d===void 0?[]:d,v=t.attributes,y=v===void 0?{}:v,b=t.styles,w=b===void 0?{}:b;if(a){var A=a.prefix,S=a.iconName,k=a.icon;return me(f({type:"icon"},a),function(){return W("beforeDOMElementCreation",{iconDefinition:a,params:t}),Xe({icons:{main:_e(k),mask:l?_e(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:S,transform:f(f({},F),n),symbol:i,maskId:c,extra:{attributes:y,styles:w,classes:h}})})}},wi={mixout:function(){return{icon:yi(xi)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=ba,t.nodeCallback=bi,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?x:r,o=t.callback,i=o===void 0?function(){}:o;return ba(n,i)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,u=r.maskId,c=r.extra;return new Promise(function(d,h){Promise.all([je(n,o),l.iconName?je(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var y=fe(v,2),b=y[0],w=y[1];d([t,Xe({icons:{main:b,mask:w},prefix:o,iconName:n,transform:i,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(h)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.transform,s=t.styles,l=ue(s);l.length>0&&(n.style=l);var u;return He(i)&&(u=R("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},Ai={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return me({type:"layer"},function(){W("beforeDOMElementCreation",{assembler:t,params:r});var i=[];return t(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(O(o)).join(" ")},children:i}]})}}}},Si={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,u=l===void 0?{}:l;return me({type:"counter",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:r}),ai({content:t.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(O(o))}})})}}}},ki={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?F:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return me({type:"text",content:t},function(){return W("beforeDOMElementCreation",{content:t,params:r}),da({content:t,transform:f(f({},F),o),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,o=r.extra,i=null,s=null;if(ja){var l=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([t,da({content:t.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},Et=new RegExp('"',"ug"),ya=[1105920,1112319],xa=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),cr),cn),xr),$e=Object.keys(xa).reduce(function(e,a){return e[a.toLowerCase()]=xa[a],e},{}),Ii=Object.keys($e).reduce(function(e,a){var t=$e[a];return e[a]=t[900]||O(Object.entries(t))[0][1],e},{});function Pi(e){var a=e.replace(Et,"");return ct(O(a)[0]||"")}function Ei(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Et,""),n=r.codePointAt(0),o=n>=ya[0]&&n<=ya[1],i=r.length===2?r[0]===r[1]:!1;return o||i||a}function Oi(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return($e[t]||{})[n]||Ii[t]}function wa(e,a){var t="".concat(dn).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var o=X(e.children),i=o.filter(function(ve){return ve.getAttribute(Pe)===a})[0],s=M.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),u=l.match(gn),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&d!=="none"&&d!==""){var h=s.getPropertyValue("content"),v=Oi(l,c),y=Pi(h),b=u[0].startsWith("FontAwesome"),w=Ei(s),A=Be(v,y),S=A;if(b){var k=Rn(y);k.iconName&&k.prefix&&(A=k.iconName,v=k.prefix)}if(A&&!w&&(!i||i.getAttribute(ze)!==v||i.getAttribute(We)!==S)){e.setAttribute(t,S),i&&e.removeChild(i);var C=hi(),g=C.extra;g.attributes[Pe]=a,je(A,v).then(function(ve){var Tt=Xe(f(f({},C),{},{icons:{main:ve,mask:xt()},prefix:v,iconName:S,extra:g,watchable:!0})),he=x.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=Tt.map(function(_t){return ee(_t)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Fi(e){return Promise.all([wa(e,"::before"),wa(e,"::after")])}function Ci(e){return e.parentNode!==document.head&&!~vn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ni=function(a){return!!a&&tt.some(function(t){return a.includes(t)})},Ti=function(a){if(!a)return[];var t=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=re(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(Ni(i)){var s=tt.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&t.add(s)}}}catch(l){n.e(l)}finally{n.f()}return t};function Aa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(L){var t;if(a)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=re(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=re(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=Ti(u.selectorText),d=re(c),h;try{for(d.s();!(h=d.n()).done;){var v=h.value;r.add(v)}}catch(b){d.e(b)}finally{d.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){n.e(b)}finally{n.f()}if(!r.size)return;var y=Array.from(r).join(", ");try{t=e.querySelectorAll(y)}catch{}}return new Promise(function(b,w){var A=X(t).filter(Ci).map(Fi),S=Ve.begin("searchPseudoElements");It(),Promise.all(A).then(function(){S(),Me(),b()}).catch(function(){S(),Me(),w()})})}}var _i={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Aa,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?x:r;m.searchPseudoElements&&Aa(n)}}},Sa=!1,ji={mixout:function(){return{dom:{unwatch:function(){It(),Sa=!0}}}},hooks:function(){return{bootstrap:function(){pa(Ne("mutationObserverCallbacks",{}))},noAuto:function(){ci()},watch:function(t){var r=t.observeMutationsRoot;Sa?Me():pa(Ne("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ka=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},Li={mixout:function(){return{parse:{transform:function(t){return ka(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=ka(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,o=t.containerWidth,i=t.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(i/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Ae={x:0,y:0,width:"100%",height:"100%"};function Ia(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function Mi(e){return e.tag==="g"?e.children:[e]}var $i={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),o=n?de(n.split(" ").map(function(i){return i.trim()})):xt();return o.prefix||(o.prefix=$()),t.mask=o,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,o=t.main,i=t.mask,s=t.maskId,l=t.transform,u=o.width,c=o.icon,d=i.width,h=i.icon,v=On({transform:l,containerWidth:d,iconWidth:u}),y={tag:"rect",attributes:f(f({},Ae),{},{fill:"white"})},b=c.children?{children:c.children.map(Ia)}:{},w={tag:"g",attributes:f({},v.inner),children:[Ia(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},b))]},A={tag:"g",attributes:f({},v.outer),children:[w]},S="mask-".concat(s||ia()),k="clip-".concat(s||ia()),C={tag:"mask",attributes:f(f({},Ae),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,A]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Mi(h)},C]};return r.push(g,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(S,")")},Ae)}),{children:r,attributes:n}}}},Ri={provides:function(a){var t=!1;M.matchMedia&&(t=M.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Di={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return t.symbol=o,t}}}},zi=[Nn,wi,Ai,Si,ki,_i,ji,Li,$i,Ri,Di];Xn(zi,{mixoutsTo:P});P.noAuto;var Wi=P.config;P.library;P.dom;var Ot=P.parse;P.findIconDefinition;P.toHtml;var Yi=P.icon;P.layer;P.text;P.counter;function Ui(e){return e=e-0,e===e}function Ft(e){return Ui(e)?e:(e=e.replaceAll(/[_-]+(.)?/g,(a,t)=>t?t.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Hi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var U=new Map,Gi=1e3;function Bi(e){if(U.has(e))return U.get(e);const a={};let t=0;const r=e.length;for(;t<r;){const n=e.indexOf(";",t),o=n===-1?r:n,i=e.slice(t,o).trim();if(i){const s=i.indexOf(":");if(s>0){const l=i.slice(0,s).trim(),u=i.slice(s+1).trim();if(l&&u){const c=Ft(l);a[c.startsWith("webkit")?Hi(c):c]=u}}}t=o+1}if(U.size===Gi){const n=U.keys().next().value;n&&U.delete(n)}return U.set(e,a),a}function Ct(e,a,t={}){if(typeof a=="string")return a;const r=(a.children||[]).map(u=>Ct(e,u)),n=a.attributes||{},o={};for(const[u,c]of Object.entries(n))switch(!0){case u==="class":{o.className=c,delete n.class;break}case u==="style":{o.style=Bi(String(c));break}case u.startsWith("aria-"):case u.startsWith("data-"):{o[u.toLowerCase()]=c;break}default:o[Ft(u)]=c}const{style:i,"aria-label":s,...l}=t;return i&&(o.style=o.style?{...o.style,...i}:i),s&&(o["aria-label"]=s,o["aria-hidden"]="false"),e(a.tag,{...l,...o},...r)}var Pa=(e,a)=>{const t=jt.useId();return e||(a?t:void 0)},Xi=class{constructor(e="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=a}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},Vi="searchPseudoElementsFullScan"in Wi?"7.0.0":"6.0.0",Ki=Number.parseInt(Vi)>=7,N={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ji={left:"fa-pull-left",right:"fa-pull-right"},qi={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Qi={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},T={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Zi(e){const{beat:a,fade:t,beatFade:r,bounce:n,shake:o,spin:i,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:h,flip:v,size:y,rotation:b,pull:w,swapOpacity:A,rotateBy:S,widthAuto:k,className:C}=e,g=[];return C&&g.push(...C.split(" ")),a&&g.push(N.beat),t&&g.push(N.fade),r&&g.push(N.beatFade),n&&g.push(N.bounce),o&&g.push(N.shake),i&&g.push(N.spin),l&&g.push(N.spinReverse),s&&g.push(N.spinPulse),u&&g.push(N.pulse),c&&g.push(T.fixedWidth),d&&g.push(T.inverse),h&&g.push(T.border),v===!0&&g.push(T.flip),(v==="horizontal"||v==="both")&&g.push(T.flipHorizontal),(v==="vertical"||v==="both")&&g.push(T.flipVertical),y!=null&&g.push(Qi[y]),b!=null&&b!==0&&g.push(qi[b]),w!=null&&g.push(Ji[w]),A&&g.push(T.swapOpacity),Ki&&(S&&g.push(T.rotateBy),k&&g.push(T.widthAuto)),g}var eo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Ea(e){if(e)return eo(e)?e:Ot.icon(e)}function ao(e){return Object.keys(e)}var Oa=new Xi("FontAwesomeIcon"),Nt={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},to=new Set(Object.keys(Nt)),ro=Fa.forwardRef((e,a)=>{const t={...Nt,...e},{icon:r,mask:n,symbol:o,title:i,titleId:s,maskId:l,transform:u}=t,c=Pa(l,!!n),d=Pa(s,!!i),h=Ea(r);if(!h)return Oa.error("Icon lookup is undefined",r),null;const v=Zi(t),y=typeof u=="string"?Ot.transform(u):u,b=Ea(n),w=Yi(h,{...v.length>0&&{classes:v},...y&&{transform:y},...b&&{mask:b},symbol:o,title:i,titleId:d,maskId:c});if(!w)return Oa.error("Could not find icon",h),null;const{abstract:A}=w,S={ref:a};for(const k of ao(t))to.has(k)||(S[k]=t[k]);return no(A[0],S)});ro.displayName="FontAwesomeIcon";var no=Ct.bind(null,Fa.createElement);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var oo={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},so={prefix:"fas",iconName:"arrow-right",icon:[512,512,[8594],"f061","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},lo={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},fo={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},uo={prefix:"fas",iconName:"angle-up",icon:[384,512,[8963],"f106","M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},co={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]};export{ro as F,so as a,co as b,oo as c,lo as d,uo as e,fo as f};
