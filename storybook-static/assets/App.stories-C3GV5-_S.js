import{j as e}from"./index-CnAAG6W1.js";import{r as n}from"./iframe-DY7ImtAX.js";import{u as B,m as V,d as $,P as q,N as Q}from"./model_120-C-4JFDfU.js";import{m as U,a as X,b as Y,c as ee,d as ae,e as ne,g as oe,f as se,N as te,T as re,E as de}from"./GenerateHierarchicalRadialModel-lF1cuj6u.js";import"./index-DzbBWci3.js";import"./preload-helper-PPVm8Dsz.js";const le={small:{data:ne,centerKey:"CENTER",layout:"radial",hasToggle:!1},medium:{data:ae,centerKey:"CENTER",layout:"radial",hasToggle:!1},120:{data:V,centerKey:"CENTER",layout:"radial",hasToggle:!1},250:{data:ee,centerKey:"CENTER",layout:"radial",hasToggle:!1},500:{data:Y,centerKey:"CENTER",layout:"radial",hasToggle:!1},geo:{data:X,centerKey:"rom",layout:"geo",hasToggle:!1},geoRadial:{data:U,centerKey:"rom",layout:"geo",hasToggle:!0},genRandom:{data:null,centerKey:"CENTER",layout:"radial",hasToggle:!1},genHierarchical:{data:null,centerKey:"CENTER",layout:"radial",hasToggle:!1}};function ce({modelId:d,generatedNodes:y,readOnly:v,bezierCurves:E,expansionEnabled:f}){const s=n.useRef(null),[M,K]=n.useState(100),[H,L]=n.useState(0),[R,w]=n.useState(null),[S,x]=n.useState([]),[C,N]=n.useState(null),{geoJson:z}=B(),r=le[d],[O,_]=n.useState(r.layout),Z=n.useMemo(()=>({...$,maxZoom:10,bezierCurves:E}),[E]),A=n.useMemo(()=>d==="genRandom"?oe(y):d==="genHierarchical"?se(y):r.data,[d,y]),D=a=>{a.key===r.centerKey&&(_(r.layout),L(t=>t+1),x([]),N(null))},F=n.useCallback(a=>{console.log(`Expanded Node ${JSON.stringify(a)}`),N(a.key),x(t=>t.includes(a.key)?t.filter(T=>T!==a.key):[...t,a.key])},[]),P=async()=>{if(!s.current)return;const a=new de({orientation:"landscape",unit:"pt",format:"a4"}),t=s.current.exportSvgString(),j=new DOMParser().parseFromString(t,"image/svg+xml").documentElement,J=a.internal.pageSize.getWidth(),W=a.internal.pageSize.getHeight(),G=parseFloat(j.getAttribute("width")??"0"),I=parseFloat(j.getAttribute("height")??"0"),k=Math.min(J/G,W/I);await a.addSvgAsImage(t,0,0,G*k,I*k),a.save("graph.pdf")};return e.jsx(q,{children:e.jsxs("div",{className:"app",children:[e.jsxs("div",{className:"app__toolbar",children:[e.jsxs("span",{className:"app__toolbarLabel",children:["Zoom: ",M,"%"]}),e.jsx("button",{type:"button",className:"app__button",onClick:()=>s.current?.zoomToFit(),children:"Zoom to fit"}),e.jsx("button",{type:"button",className:"app__button",onClick:()=>s.current?.resetZoom(),children:"Reset zoom"}),e.jsx("button",{type:"button",className:"app__button",onClick:()=>s.current?.zoomOut(),children:"Zoom −"}),e.jsx("button",{type:"button",className:"app__button",onClick:()=>s.current?.zoomIn(),children:"Zoom +"}),e.jsx("button",{type:"button",className:"app__button",onClick:()=>s.current?.downloadSvg("graph.svg"),children:"Export SVG"}),e.jsx("button",{type:"button",className:"app__button",onClick:P,children:"Export PDF"}),r.hasToggle&&e.jsx("button",{type:"button",className:"app__button",onClick:()=>_(a=>a==="radial"?"geo":"radial"),children:"Change Layout"}),f&&e.jsxs("div",{className:"app__toolbarInfo",children:["Expanded nodes: ",e.jsx("strong",{children:S.length}),C&&e.jsxs("span",{style:{marginLeft:8},children:["— last: ",e.jsx("strong",{children:C})]}),S.length>0&&e.jsx("button",{type:"button",className:"app__button",style:{marginLeft:8},onClick:()=>{x([]),N(null)},children:"Collapse all"})]}),R!==null&&e.jsxs("div",{className:"app__toolbarInfo",children:["Layout compute time: ",e.jsxs("strong",{children:[R," ms"]})]})]}),e.jsx("div",{className:"app__graphWrap",children:e.jsx(Q,{ref:s,data:A,config:Z,centerKey:r.centerKey,readOnly:v,mapGeoJson:z,layout:O,onZoomChange:K,onNodeClick:D,onNodeExpandableClick:f?F:void 0,renderNodeTooltip:re,renderNodeContextMenu:te,onLayoutComputed:w},H)})]})})}const he={title:"App",component:ce,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modelId:{name:"Dataset",control:"select",options:["small","medium","120","250","500","geo","geoRadial","genRandom","genHierarchical"],description:"Active dataset / layout"},generatedNodes:{name:"Generated node count",control:{type:"range",min:5,max:500,step:1},description:"Node count — active only for genRandom / genHierarchical"},readOnly:{name:"Read-Only",control:"boolean",description:"Disable all drag and edit interactions"},bezierCurves:{name:"Bezier Curves",control:"boolean",description:"Render edges as smooth cubic curves"},expansionEnabled:{name:"Node Expansion",control:"boolean",description:"Show expand button on nodes and track expanded state in the toolbar"}}},o={modelId:"small",generatedNodes:120,readOnly:!1,bezierCurves:!1,expansionEnabled:!1},l={name:"Small",args:{...o,modelId:"small",expansionEnabled:!0}},c={name:"Medium",args:{...o,modelId:"medium",expansionEnabled:!0}},i={name:"120 Nodes",args:{...o,modelId:"120",expansionEnabled:!0}},m={name:"250 Nodes",args:{...o,modelId:"250",expansionEnabled:!0}},p={name:"500 Nodes",args:{...o,modelId:"500",expansionEnabled:!0}},u={name:"Geography",args:{...o,modelId:"geo",expansionEnabled:!0}},g={name:"Geography / Radial",args:{...o,modelId:"geoRadial",expansionEnabled:!0}},b={name:"Generated Random",args:{...o,modelId:"genRandom",generatedNodes:120,expansionEnabled:!0}},h={name:"Generated Hierarchical",args:{...o,modelId:"genHierarchical",generatedNodes:120,expansionEnabled:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...base,
    modelId: "small",
    expansionEnabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Medium",
  args: {
    ...base,
    modelId: "medium",
    expansionEnabled: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "120 Nodes",
  args: {
    ...base,
    modelId: "120",
    expansionEnabled: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "250 Nodes",
  args: {
    ...base,
    modelId: "250",
    expansionEnabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "500 Nodes",
  args: {
    ...base,
    modelId: "500",
    expansionEnabled: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Geography",
  args: {
    ...base,
    modelId: "geo",
    expansionEnabled: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Geography / Radial",
  args: {
    ...base,
    modelId: "geoRadial",
    expansionEnabled: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Generated Random",
  args: {
    ...base,
    modelId: "genRandom",
    generatedNodes: 120,
    expansionEnabled: true
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Generated Hierarchical",
  args: {
    ...base,
    modelId: "genHierarchical",
    generatedNodes: 120,
    expansionEnabled: true
  }
}`,...h.parameters?.docs?.source}}};const ye=["Small","Medium","Nodes120","Nodes250","Nodes500","Geography","GeographyRadial","GeneratedRandom","GeneratedHierarchical"];export{h as GeneratedHierarchical,b as GeneratedRandom,u as Geography,g as GeographyRadial,c as Medium,i as Nodes120,m as Nodes250,p as Nodes500,l as Small,ye as __namedExportsOrder,he as default};
