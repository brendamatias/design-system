var z=Object.defineProperty;var u=(e,t)=>z(e,"name",{value:t,configurable:!0});import{b as B}from"./index.1d8fa9e4.js";import{a as l,j as r,F as a}from"./jsx-runtime.c98c01fe.js";import{r as h}from"./index.62d5be63.js";import"./index.fa3d83ac.js";import"./iframe.69f95238.js";import"./isNativeReflectConstruct.7455ec7d.js";var _=h.exports.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),A=u(function(t,o,i){var n=i.get(t);return n?n(o):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function y(e,t){if(e==null)return{};var o={},i=Object.keys(e),n,s;for(s=0;s<i.length;s++)n=i[s],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}u(y,"_objectWithoutPropertiesLoose");var x=h.exports.forwardRef(function(e,t){var o=e.alt,i=e.color,n=e.size,s=e.weight,v=e.mirrored,L=e.children,j=e.renderPath,W=y(e,["alt","color","size","weight","mirrored","children","renderPath"]),c=h.exports.useContext(_),f=c.color,k=f===void 0?"currentColor":f,g=c.size,p=c.weight,C=p===void 0?"regular":p,m=c.mirrored,b=m===void 0?!1:m,P=y(c,["color","size","weight","mirrored"]);return l("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:n!=null?n:g,height:n!=null?n:g,fill:i!=null?i:k,viewBox:"0 0 256 256",transform:v||b?"scale(-1, 1)":void 0},P,W),children:[!!o&&r("title",{children:o}),L,r("rect",{width:"256",height:"256",fill:"none"}),j(s!=null?s:C,i!=null?i:k)]})});x.displayName="IconBase";const F=x;var d=new Map;d.set("bold",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});d.set("duotone",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});d.set("fill",function(){return r(a,{children:r("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"})})});d.set("light",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});d.set("thin",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});d.set("regular",function(e){return l(a,{children:[r("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),r("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var I=u(function(t,o){return A(t,o,d)},"renderPath"),w=h.exports.forwardRef(function(e,t){return r(F,{...Object.assign({ref:t},e,{renderPath:I})})});w.displayName="ArrowRight";const S=w,V={title:"Form/Button",component:B,args:{children:"Send",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"inline-radio"}},size:{options:["sm","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"clicked"}}},E={},H={args:{variant:"secondary",children:"Create new"}},K={args:{variant:"tertiary",children:"Cancel"}},U={args:{size:"sm"}},Z={args:{children:l(a,{children:["Pr\xF3ximo passo",r(S,{weight:"bold"})]})}},q={args:{disabled:!0}},G=["Primary","Secondary","Tertiary","Small","WithIcon","Disabled"];export{q as Disabled,E as Primary,H as Secondary,U as Small,K as Tertiary,Z as WithIcon,G as __namedExportsOrder,V as default};
//# sourceMappingURL=Button.stories.e4f876e3.js.map
