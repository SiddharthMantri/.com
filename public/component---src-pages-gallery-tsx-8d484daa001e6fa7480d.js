(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),d=r(a("8OQS")),s=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+o+d+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},M=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,o=l.default.createElement(z,(0,s.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),o):o},z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,d=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:k?1:0,transition:_?"opacity "+b+"ms":"none"},d),V="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},_&&R,{},d,{},f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:m,itemProp:v};if(g){var H=g,T=p(g);return l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),V&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&R)}),T.base64&&l.default.createElement(M,{ariaHidden:!0,src:T.base64,spreadProps:P,imageVariants:H,generateSources:x}),T.tracedSVG&&l.default.createElement(M,{ariaHidden:!0,src:T.tracedSVG,spreadProps:P,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:E},T,{imageVariants:H}))}}))}if(h){var j=h,q=p(h),F=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete F.display,l.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},_&&R)}),q.base64&&l.default.createElement(M,{ariaHidden:!0,src:q.base64,spreadProps:P,imageVariants:j,generateSources:x}),q.tracedSVG&&l.default.createElement(M,{ariaHidden:!0,src:q.tracedSVG,spreadProps:P,imageVariants:j,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(j),l.default.createElement(z,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:E},q,{imageVariants:j}))}}))}return null},t}(l.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});_.propTypes={resolutions:C,sizes:V,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var R=_;t.default=R},"GuY/":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("TJpk"),o=a("zbVx"),d=a("vOnD"),s=a("9eSz"),l=a.n(s),c=d.a.div.withConfig({displayName:"InstagramImage__Overlay",componentId:"sc-1fn60zg-0"})(["position:absolute;top:0;left:0;bottom:0;background:rgba(0,0,0,0.3);z-index:2;opacity:0;width:355px;&:hover{animation:fadein 0.3s;}@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-o-keyframes fadein{from{opacity:0;}to{opacity:1;}}}"]),u=d.a.a.withConfig({displayName:"InstagramImage__Wrapper",componentId:"sc-1fn60zg-1"})(["position:relative;overflow:hidden;"]),f=d.a.div.withConfig({displayName:"InstagramImage__InstagramPageWrapper",componentId:"sc-1fn60zg-2"})(["display:grid;grid-template-columns:390px 390px 390px;row-gap:35px;column-gap:0px;@media screen and (max-width:720px){grid-template-columns:33% 33% 33%;row-gap:5px;column-gap:5px;}"]),m=function(e){var t=e.edge.node;return i.a.createElement(u,{href:"https://www.instagram.com/p/"+t.id,target:"_blank"},i.a.createElement(c,null),i.a.createElement(l.a,{fluid:t.localFile.childImageSharp.fluid,style:{maxWidth:"355px"}}))},p=a("yTYZ"),g=d.a.div.withConfig({displayName:"SocialSubPage__Wrapper",componentId:"t06h7v-0"})(["display:flex;padding-top:80px;padding-bottom:32px;justify-content:left;"]),h=d.a.div.withConfig({displayName:"SocialSubPage__IconWrapper",componentId:"t06h7v-1"})(["align-items:flex-start;"]),y=d.a.a.withConfig({displayName:"SocialSubPage__IconLink",componentId:"t06h7v-2"})([""]),b=d.a.span.withConfig({displayName:"SocialSubPage__Spacer",componentId:"t06h7v-3"})(["width:100px;height:8px;background:black;margin-top:16px;@media screen and (max-width:720px){width:140px;height:4px;margin-top:18px;}"]),S=function(e){return i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(y,{href:"https://www.github.com/SiddharthMantri",target:"_blank",title:"Github Link for Sid Mantri's Repo"},i.a.createElement(p.b,null))),i.a.createElement(h,null,i.a.createElement(y,{href:"https://www.linkedin.com/in/SiddharthMantri",target:"_blank",title:"Connect with Sid on LinkedIn"},i.a.createElement(p.d,null))),i.a.createElement(h,null,i.a.createElement(y,{href:"https://www.instagram.com/siddharthmantri",target:"_blank",title:"Follow Sid on Instagram at instagram.com/siddharthmantri"},i.a.createElement(p.c,null))),i.a.createElement(b,null))};a.d(t,"query",(function(){return v}));var v="3413073016";t.default=function(e){var t=e.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.Helmet,null,i.a.createElement("title",null,"Photography Portfolio - Sid Mantri"),i.a.createElement("link",{rel:"canonical",href:"https://sidmantri.com/"}),i.a.createElement("meta",{property:"site_name",content:"Sid Mantri - Madrid | Siddharth Mantri"}),i.a.createElement("meta",{property:"og:site_name",content:"Sid Mantri - Madrid | Siddharth Mantri"}),i.a.createElement("meta",{property:"twitter:site_name",content:"Sid Mantri - Madrid | Siddharth Mantri"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement("meta",{name:"title",content:"Sid Mantri - Front End Developer - Madrid"}),i.a.createElement("meta",{name:"description",content:"Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:url",content:"https://sidmantri.com/"}),i.a.createElement("meta",{property:"og:title",content:"Sid Mantri - Front End Developer - Madrid"}),i.a.createElement("meta",{property:"og:description",content:"Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."}),i.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{property:"twitter:url",content:"https://sidmantri.com/"}),i.a.createElement("meta",{property:"twitter:title",content:"Sid Mantri - Front End Developer - Madrid"}),i.a.createElement("meta",{property:"twitter:description",content:"Hi, I'm Siddharth Mantri! Over the years I have worked on many exciting projects. Here are some of them."}),i.a.createElement("html",{lang:"en"})),i.a.createElement(o.a,null,i.a.createElement(S,null),i.a.createElement("p",null,"I have had the good fortune to live in beautiful countries and have travelled to many more. Here is a small gallery of some of my work. You can also find more on Instagram and you can download HD wallpapers on Unsplash for free."),i.a.createElement(f,null,t.allInstaNode.edges.map((function(e,t){return i.a.createElement(m,{edge:e})})))))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),o=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-gallery-tsx-8d484daa001e6fa7480d.js.map