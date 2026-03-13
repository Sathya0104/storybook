import{j as a}from"./index-CnAAG6W1.js";import{m as c,d as i,N as n,T as m}from"./model_120-C-4JFDfU.js";import"./iframe-DY7ImtAX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzbBWci3.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,u={component:n,title:"Components/NetworkGraph",render:t=>a.jsx(m,{children:a.jsx("div",{style:{width:"100%",height:"500px"},children:a.jsx(n,{...t})})})},d={...i,maxZoom:10},o={args:{config:d,data:c,centerKey:"CENTER"}},e={args:{...o.args,onNodeClick:s("onNodeClick")}},r={args:{...o.args,onZoomChange:s("onZoomChange")}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    config: initConfig,
    data: modelLarge1,
    centerKey: 'CENTER'
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    onNodeClick: action('onNodeClick')
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    onZoomChange: action('onZoomChange')
  }
}`,...r.parameters?.docs?.source}}};const N=["Basic","OnNodeClick","OnZoomChange"];export{o as Basic,e as OnNodeClick,r as OnZoomChange,N as __namedExportsOrder,u as default};
