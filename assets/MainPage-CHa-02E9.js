import{r as g,j as e,B as C,p as U,m as q,u as y,a as O,b as f}from"./index-UXIEmj_X.js";import{s as L,a as P,M as K,S as H,b as J}from"./SidebarForm-DHTQKln3.js";const Q="Left",Z="Right",ee="Up",te="Down",v={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},D={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},R="mousemove",V="mouseup",se="touchend",ne="touchmove",ie="touchstart";function ae(t,s,n,i){return t>s?n>0?Z:Q:i>0?te:ee}function F(t,s){if(s===0)return t;const n=Math.PI/180*s,i=t[0]*Math.cos(n)+t[1]*Math.sin(n),r=t[1]*Math.cos(n)-t[0]*Math.sin(n);return[i,r]}function le(t,s){const n=a=>{const l="touches"in a;l&&a.touches.length>1||t((c,x)=>{x.trackMouse&&!l&&(document.addEventListener(R,i),document.addEventListener(V,d));const{clientX:p,clientY:b}=l?a.touches[0]:a,h=F([p,b],x.rotationAngle);return x.onTouchStartOrOnMouseDown&&x.onTouchStartOrOnMouseDown({event:a}),Object.assign(Object.assign(Object.assign({},c),D),{initial:h.slice(),xy:h,start:a.timeStamp||0})})},i=a=>{t((l,c)=>{const x="touches"in a;if(x&&a.touches.length>1)return l;if(a.timeStamp-l.start>c.swipeDuration)return l.swiping?Object.assign(Object.assign({},l),{swiping:!1}):l;const{clientX:p,clientY:b}=x?a.touches[0]:a,[h,T]=F([p,b],c.rotationAngle),S=h-l.xy[0],I=T-l.xy[1],_=Math.abs(S),N=Math.abs(I),$=(a.timeStamp||0)-l.start,A=Math.sqrt(_*_+N*N)/($||1),G=[S/($||1),I/($||1)],M=ae(_,N,S,I),X=typeof c.delta=="number"?c.delta:c.delta[M.toLowerCase()]||v.delta;if(_<X&&N<X&&!l.swiping)return l;const k={absX:_,absY:N,deltaX:S,deltaY:I,dir:M,event:a,first:l.first,initial:l.initial,velocity:A,vxvy:G};k.first&&c.onSwipeStart&&c.onSwipeStart(k),c.onSwiping&&c.onSwiping(k);let B=!1;return(c.onSwiping||c.onSwiped||c[`onSwiped${M}`])&&(B=!0),B&&c.preventScrollOnSwipe&&c.trackTouch&&a.cancelable&&a.preventDefault(),Object.assign(Object.assign({},l),{first:!1,eventData:k,swiping:!0})})},r=a=>{t((l,c)=>{let x;if(l.swiping&&l.eventData){if(a.timeStamp-l.start<c.swipeDuration){x=Object.assign(Object.assign({},l.eventData),{event:a}),c.onSwiped&&c.onSwiped(x);const p=c[`onSwiped${x.dir}`];p&&p(x)}}else c.onTap&&c.onTap({event:a});return c.onTouchEndOrOnMouseUp&&c.onTouchEndOrOnMouseUp({event:a}),Object.assign(Object.assign(Object.assign({},l),D),{eventData:x})})},o=()=>{document.removeEventListener(R,i),document.removeEventListener(V,d)},d=a=>{o(),r(a)},u=(a,l)=>{let c=()=>{};if(a&&a.addEventListener){const x=Object.assign(Object.assign({},v.touchEventOptions),l.touchEventOptions),p=[[ie,n,x],[ne,i,Object.assign(Object.assign({},x),l.preventScrollOnSwipe?{passive:!1}:{})],[se,r,x]];p.forEach(([b,h,T])=>a.addEventListener(b,h,T)),c=()=>p.forEach(([b,h])=>a.removeEventListener(b,h))}return c},j={ref:a=>{a!==null&&t((l,c)=>{if(l.el===a)return l;const x={};return l.el&&l.el!==a&&l.cleanUpTouch&&(l.cleanUpTouch(),x.cleanUpTouch=void 0),c.trackTouch&&a&&(x.cleanUpTouch=u(a,c)),Object.assign(Object.assign(Object.assign({},l),{el:a}),x)})}};return s.trackMouse&&(j.onMouseDown=n),[j,u]}function re(t,s,n,i){return!s.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?s.preventScrollOnSwipe!==n.preventScrollOnSwipe||s.touchEventOptions.passive!==n.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign({},t),{cleanUpTouch:i(t.el,s)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:i(t.el,s)})}function ce(t){const{trackMouse:s}=t,n=g.useRef(Object.assign({},D)),i=g.useRef(Object.assign({},v)),r=g.useRef(Object.assign({},i.current));r.current=Object.assign({},i.current),i.current=Object.assign(Object.assign({},v),t);let o;for(o in v)i.current[o]===void 0&&(i.current[o]=v[o]);const[d,u]=g.useMemo(()=>le(m=>n.current=m(n.current,i.current),{trackMouse:s}),[s]);return n.current=re(n.current,i.current,r.current,u),d}const oe=t=>{const[s,n]=g.useState(0),[i,r]=g.useState(null),o=u=>{n(u),clearInterval(i)};g.useEffect(()=>{const u=setInterval(()=>{n(m=>m+1>=t?0:m+1)},5e3);return r(u),()=>{clearInterval(u)}},[t,s]);const d=ce({onSwipedLeft:()=>o(s+1>=t?0:s+1),onSwipedRight:()=>o(s-1<0?t-1:s-1)});return{slide:s,handleNavigationButtonClick:o,handlers:d}},xe=({reversed:t,onClick:s})=>e.jsx("button",{onClick:s,className:"text-[23px] w-full h-full duration-300 active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)] rounded-[37px] border-[1.52px] border-[solid] text-[#444893] border-[#444893] [box-shadow:0_4px_6px_0_rgba(0,_0,_0,_0.1)] hover:[box-shadow:0_0_8px_0_rgba(0,_0,_0,_0.42)]",children:e.jsx("p",{className:`${t?"scale-x-[-1]":""}`,children:"←"})}),de=({reversed:t,onClick:s})=>e.jsx("button",{onClick:s,className:"text-[23px] w-full h-full bg-white rounded-[37px] active:[box-shadow:inset_1px_1px_4px_0_rgba(0,_0,_0,_0.54)] text-main duration-200 hover:[box-shadow:inset_1px_1px_1px_0_white,_0_1px_2px_0_rgba(0,_0,_0,_0.22),_0_0_8px_0_rgba(0,_0,_0,_0.26)] [box-shadow:inset_1px_1px_1px_0_white,_0_1px_2px_0_rgba(0,_0,_0,_0.22)]",children:e.jsx("p",{className:`${t?"scale-x-[-1]":""}`,children:"←"})}),ue=({onClick:t,slide:s,imgArr:n})=>{const i=()=>t(s-1<0?0:s-1),r=()=>t(s+1>=n.length?s:s+1);return e.jsxs("div",{className:"absolute z-[1] bottom-[40px] left-10 flex items-center gap-4",children:[e.jsx("div",{className:"h-[41px] w-[41px]",children:e.jsx(xe,{onClick:i})}),e.jsx("div",{className:"h-[41px] w-[41px]",children:e.jsx(de,{onClick:r,reversed:!0})})]})},me="_title_11kx2_1",z={title:me},W=({content:t,mobile:s})=>{const{title:n,subtitle:i,btn:r,i:o}=t;return s?e.jsx("div",{className:"absolute w-full h-full top-0 left-0",children:e.jsx("div",{className:"absolute left-[49%] top-[31%] xs:top-[27%] -translate-x-1/2 -translate-y-1/2",children:e.jsxs("div",{className:"text-center w-fit xxs:min-w-[400px] tracking-[0.11em] pl-5",children:[e.jsx("h1",{className:`${z.title} slider-item__title min-w-[300px] font-[800] text-[36px]`,children:n[o]}),e.jsx("h2",{className:"font-[600px] tracking-[0.0001em] text-[11px] xs:text-[14px] text-white",children:i[o]}),e.jsx("div",{className:"absolute left-[51%] top-[60px] xs:top-16 tracking-[0.03em] -translate-x-1/2 h-[30px] w-[176px] text-[12px] xs:h-[50px] xs:w-[240px] xs:text-[16px]",children:e.jsx(C,{href:r.href[o],children:r.title})})]})})}):e.jsxs("div",{className:"absolute",children:[e.jsx("div",{className:"pt-[258px] pl-[75px] inline-block",children:e.jsxs("div",{className:`border-l-[2px] min-w-[450px] break-all tracking-[0.11em] pl-5 ${o===0?"border-l-main":"border-l-white"}`,children:[e.jsx("h1",{className:`${z.title} slider-item__title font-[800] text-[66px]`,children:n[o]}),e.jsx("h2",{className:"font-[600px] tracking-[0.015em] text-[20px] text-white",children:i[o]})]})}),e.jsx("div",{className:"pl-[90px] pt-[48px] pb-[156px]",children:e.jsx("div",{className:"relative text-[22px] z-20 h-[55px] w-[323px]",children:e.jsx(C,{href:r.href[o],children:r.title})})})]})},pe=({length:t,slide:s,setSlide:n})=>Array.from({length:t},(i,r)=>e.jsx("button",{"aria-label":"slider dots navigation",onClick:()=>n(r),className:`w-2 h-2 rounded-full bg-white mx-1 ${r===s?"":"opacity-[0.43]"}`},r)),he=({content:t})=>{const s=U.length,{slide:n,handleNavigationButtonClick:i,handlers:r}=oe(s);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative hidden sm:block w-full h-full slider-container",children:[e.jsx("div",{style:{transform:`translateX(-${n*100}%)`},className:"absolute flex h-full left-0 top-0 duration-500",children:U.map((o,d)=>e.jsxs("div",{className:"rounded-[30px] flex origin-right w-full flex-[0_0_auto] ",children:[e.jsx("img",{className:"h-full rounded-xl object-cover object-left bg-cover",src:o,alt:"img"+d}),e.jsx(W,{content:{...t,i:d}})]},"slider-img"+d))}),e.jsx(ue,{slide:n,imgArr:U,onClick:i})]}),e.jsxs("div",{...r,className:"relative block sm:hidden w-full h-full slider-container",children:[e.jsx("div",{style:{transform:`translateX(-${n*100}%)`},className:"absolute flex h-full w-full left-0 top-0 duration-500",children:q.map((o,d)=>e.jsxs("div",{className:"relative rounded-[30px] flex origin-left w-full flex-[0_0_auto] ",children:[e.jsx("img",{className:"h-full rounded-xl object-top xs:object-[none] w-full object-cover bg-cover",src:o,alt:"img"+d}),e.jsx(W,{mobile:!0,content:{...t,i:d}})]},"slider-img"+d))}),e.jsx("div",{className:"mobile-navigation absolute flex left-1/2 bottom-3 -translate-x-1/2 -translate-y-1/2",children:e.jsx(pe,{setSlide:i,slide:n,length:s})})]})]})},ge=()=>{const t=y(),s=O[t].mainPageIntro;return e.jsx(f.section,{className:"intro",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0,amount:.1},children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"relative overflow-hidden min-w-full h-[450px] xs:h-[649px]",children:e.jsx(he,{content:s})})})})},fe=({img:t,name:s,href:n,isLarge:i,isBlue:r,className:o,children:d})=>{const u=r?"bg-blueGradient":"bg-grayGradient",[m,j]=d.split(" "),a="text-[10px] sm:text-[13px]",l="font-[800] text-[34px] xs:text-[45px]",c=r?"text-white":"text-[#000]";return e.jsxs("a",{href:n,className:`category overflow-x-hidden xs:overflow-x-visible relative rounded-[25px] duration-300 p-6 pb-2 h-[105px] xs:h-[180px] ${o} ${i?"md:h-[280px]":"md:h-[250px]"}  ${s||"col-span-full"} ${L.category} [box-shadow:inset_2px_2px_4px_0_rgba(0,_0,_0,_0.15)] `,children:[e.jsx("div",{className:`category-bg absolute after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] left-0 top-0 w-full h-full ${u} ${L["category-bg"]}`}),e.jsxs("h2",{className:`flex flex-col h-full relative z-[1] uppercase justify-end ${c} ${r?"md:justify-start":""}`,children:[e.jsx("span",{className:j?a:l,children:m}),j&&e.jsx("span",{className:l+" ml-[-3px]",children:j})]}),e.jsx("img",{className:"absolute max-h-[130px] xs:max-h-[200px] md:max-h-none bottom-0 right-[-20px] xs:right-0",src:t,alt:s})]})},E=({className:t,children:s})=>{const[n,i]=s.split(" ");return e.jsx("h1",{className:"relative leading-11 pl-2 after:absolute after:content-[''] after:w-[1px] after:h-[32px] after:sm:h-[70px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-main text-[27px] xxs:text-[30px] sm:pl-5 sm:text-[48px]",children:e.jsxs("span",{className:`inline-block break-all font-[300] ${t}`,children:[n," ",e.jsx("span",{className:"font-[700] inline-block",children:i})]})})},be="_gridTemplate_1bicw_3",je="_gridItem1_1bicw_55",we="_gridItem2_1bicw_61",ve="_gridItem3_1bicw_67",_e="_gridItem4_1bicw_73",Ne="_gridItem5_1bicw_79",w={gridTemplate:be,gridItem1:je,gridItem2:we,gridItem3:ve,gridItem4:_e,gridItem5:Ne},ye=()=>{const t=y(),s=O[t].categories,n=[w.gridItem1,w.gridItem2,w.gridItem3,w.gridItem4,w.gridItem5];return e.jsx(f.section,{className:"categories mt-9 sm:mt-[90px]",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0,amount:.1},children:e.jsxs("div",{className:"container",children:[e.jsx(E,{children:s.title}),e.jsx("div",{className:`grid mt-[24px] sm:mt-10 ${w.gridTemplate} categories-grid gap-[13px] md:gap-[30px]`,children:s.categoriesList.map((i,r)=>g.createElement(fe,{...i,key:i.title,name:n[r]},i.title))})]})})},Oe=({title:t,img:s,href:n,lang:i})=>{const r=t==="BRIX"?"bg-orangeGradient":"bg-darkBlueGradient";return e.jsxs("a",{href:n,className:`brand relative rounded-[25px] justify-center items-center flex h-full ${P.brand}`,children:[e.jsx("div",{className:`brand-bg absolute after:content-[""] after:duration-300 after:rounded-[25px] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-0 rounded-[25px] left-0 top-0 w-full h-full ${r} ${P["brand-bg"]}`}),e.jsx("div",{className:`brand-img absolute xs:left-[40px] self-end ${t==="BRIX"?"left-[-14px] bottom-[-13px] xs:bottom-0 xs:left-[5px]":"left-0 bottom-[-16px] xs:bottom-0 xs:left-[15px]"}`,children:e.jsx("img",{className:"scale-[0.8] xs:scale-100",src:s,alt:t})}),e.jsxs("div",{className:`brand-info absolute   ${t==="BRIX"?"right-[-15px] xs:right-[45px] sm:right-[42px] mdLg:right-[25px]":"right-[-15px] xs:right-[30px] sm:right-[26px] md:right-[25px]"} text-[#FDFDFD] uppercase flex flex-col items-center pr-6`,children:[e.jsx("p",{className:"text-[10px] sm:text-[15px]",children:i==="ENG"?"PRODUCT":"ПРОДУКЦІЯ"}),e.jsx("h1",{className:"text-[34px] sm:text-[45px] font-bold",children:t})]})]})},Se=()=>{const t=y(),s=O[t].brands;return e.jsx(f.section,{className:"brands mt-[85px] sm:mt-[145px]",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0,amount:.1},children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"brands-content md:items-center flex flex-col gap-[75px] flex-wrap md:flex-row lgXl:justify-between",children:[e.jsx("div",{className:"brands-content__title justify-items-start",children:e.jsx(E,{className:"lgXl:flex lgXl:flex-col",children:s.title})}),e.jsx("div",{className:"brands-content__brands flex flex-col items-center mdLg:flex-row justify-center w-full lgXl:w-fit gap-11",children:s.products.map(n=>e.jsx(f.div,{className:"brands-content__brand w-full xxs:w-[345px] xs:w-[448px] h-[120px]",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.2},viewport:{once:!0,amount:.1},children:e.jsx(Oe,{...n,lang:t})},n.title))})]})})})},Y=({reversed:t,info:s,img:n,children:i})=>{const{title:r,description:o,keywords:d}=s;return e.jsxs("section",{className:"content-block flex flex-col lg:gap-0 text-[16px] xs:text-[20px]",children:[e.jsxs("div",{className:`flex ${t?"flex-row-reverse lg:pl-[112px]":""}`,children:[e.jsx("div",{className:"hidden lg:flex lg:flex-[50%]"}),e.jsxs("div",{className:"flex flex-col flex-[50%]",children:[e.jsx("div",{className:"title -ml-2 sm:-ml-5",children:e.jsx(E,{children:r})}),e.jsxs("div",{className:"flex max-w-[650px] flex-col gap-[30px] sm:gap-10 mt-8",children:[o.map((u,m)=>e.jsx("p",{children:u},m)),e.jsx("p",{className:"lg:hidden",children:d})]})]})]}),e.jsxs("div",{className:`relative mt-[340px] xs:mt-[415px] sm:mt-[415px] md:mt-[300px] lg:mt-[47px] rounded-[27px] text-white h-[97px] md:h-[217px] w-full flex items-center ${t?"flex-row-reverse lg:pl-[112px] bg-blueGradient":"bg-reversedBlueGradient"}`,children:[e.jsxs("div",{className:"relative flex lg:block justify-center lg:justify-normal flex-[50%] w-full h-full",children:[e.jsx("img",{className:`absolute w-[279px] h-[410px] xs:h-[500px] lg:h-[556px] z-[2] xs:w-auto ${t?"lg:right-[25px] lgXl:right-[86px]":"right-0 xs:right-[unset] lg:left-[115px] lgXl:left-[237px]"} bottom-0`,src:n,alt:"worker"}),i]}),e.jsx("div",{className:"flex-[50%] hidden lg:flex",children:e.jsx("h3",{className:"max-w-[505px] leading-7",children:d})})]})]})},Ie=()=>{const t=y(),s=O[t].innovative_purity,[n,i,r]=s.img;return e.jsx(f.section,{className:"innovate-purity mb-10 mt-[85px] md:mt-[155px] lg:mt-[228px]",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0,amount:.1},children:e.jsx("div",{className:"container",children:e.jsxs(Y,{img:r,info:s,children:[e.jsx(f.img,{className:"absolute w-[130px] xs:w-auto z-[1] top-[-310px] xs:top-[-350px] md:top-[-270px] ml-[-240px] sm:ml-[-450px] lg:ml-0 lg:left-[30px] lg:top-[-300px]",src:n,alt:"research1",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.2},viewport:{once:!0,amount:.05}}),e.jsx(f.img,{className:"absolute w-[160px] xs:w-auto ml-[-120px] xs:ml-0 top-[-250px] md:top-[-200px] sm:ml-[-250px] lg:ml-0 lg:left-[103px] lg:top-[-200px]",src:i,alt:"research2",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.2},viewport:{once:!0,amount:.05}})]})})})},ke=()=>{const t=y(),s=O[t].private_label,n=s.img;return e.jsx(f.section,{className:"private-label sm:mt-[173px]",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0,amount:.1},children:e.jsx("div",{className:"container",children:e.jsx(Y,{reversed:!0,img:n,info:s})})})},Me=()=>e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(ye,{}),e.jsx(Se,{}),e.jsx(Ie,{}),e.jsx(ke,{}),e.jsx("div",{className:"mt-[89px] xs:mt-[140px] md:mt-[232px]",children:e.jsx(K,{})}),e.jsx("div",{className:"mt-[89px] xs:mt-[140px] md:mt-[210px]",children:e.jsx(H,{})}),e.jsx(J,{})]});export{Me as default};
