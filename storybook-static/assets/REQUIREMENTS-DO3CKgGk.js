import{j as e}from"./index-CnAAG6W1.js";import{useMDXComponents as i}from"./index-CyBwOcjL.js";import{M as r}from"./blocks-B75M_73q.js";import"./iframe-DY7ImtAX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DzbBWci3.js";const s=""+new URL("Layout-strategy-proposal-C0SqM5Ot.png",import.meta.url).href,a=""+new URL("Layer-BZpzcnBP.png",import.meta.url).href,l=""+new URL("Layout-strategy-zgSR6KFj.png",import.meta.url).href,c=""+new URL("Layout-user-interaction-proposal-CzlxIymY.png",import.meta.url).href;function t(o){const n={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"REQUIREMENTS"}),`
`,e.jsx(n.h1,{id:"component-requirements",children:"Component Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Network diagram visualization."}),`
`,e.jsx(n.li,{children:"Support for various image formats for nodes (SVG, PNG, JPEG, etc.)."}),`
`,e.jsx(n.li,{children:"Custom tooltips for each node using Radix Tooltip."}),`
`,e.jsx(n.li,{children:"Multiple connector types between nodes, such as solid lines, dotted lines, unidirectional (single arrow), and bidirectional arrows."}),`
`,e.jsx(n.li,{children:"Custom arrow shapes to represent specific connections, such as firewall-blocked connections."}),`
`,e.jsx(n.li,{children:"Support for different hex color codes and line widths for connector lines."}),`
`,e.jsx(n.li,{children:"Labels for both nodes and connector lines."}),`
`,e.jsx(n.li,{children:"Multi-level custom menus for each node using Radix Dropdown Menu."}),`
`,e.jsx(n.li,{children:"Support for multiple node connection patterns, such as one-to-one, one-to-many, and many-to-many."}),`
`,e.jsx(n.li,{children:"Third-party libraries should be React-based or have good React bindings, and should be actively maintained."}),`
`,e.jsx(n.li,{children:"Visual transformations on mouse hover, such as color changes, width changes, and image changes, for both nodes and connector lines."}),`
`,e.jsx(n.li,{children:"Grouping of nodes."}),`
`,e.jsx(n.li,{children:"Zoom-in and zoom-out support."}),`
`,e.jsx(n.li,{children:"Pan support."}),`
`,e.jsx(n.li,{children:"Drag nodes support (good to have)"}),`
`,e.jsx(n.li,{children:"Ability to programmatically add and remove nodes and relative edge."}),`
`,e.jsx(n.li,{children:"Keyboard navigable"}),`
`,e.jsx(n.li,{children:"Ability to export the current view as SVG and PNG, which can then be included in PDF or RTF documents."}),`
`,e.jsx(n.li,{children:"Nodes plotted on a world map based on geolocation."}),`
`,e.jsx(n.li,{children:"Geo map support"}),`
`,e.jsx(n.li,{children:"Animation of data flowing from one node to another (nice to have)."}),`
`,e.jsx(n.li,{children:"Ability to divide the view into multiple labeled quadrants (nice to have)."}),`
`,e.jsx(n.li,{children:"Support for programmatic collapse and expansion of nodes."}),`
`,e.jsx(n.li,{children:"Automatic content adaptation based on container size (auto-resize)."}),`
`,e.jsx(n.li,{children:"Good performance with a large number of nodes and edges."}),`
`]}),`
`,e.jsx(n.h2,{id:"layout-strategy-proposal",children:"Layout strategy proposal"}),`
`,e.jsx("img",{src:s,alt:"Layout strategy proposal"}),`
`,e.jsx(n.h2,{id:"layout-strategy-requirements",children:"Layout strategy requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout with up to 4 expandable layout"}),`
`]}),`
`,e.jsx("img",{src:a,alt:"Layer"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Allow the visualization of up to 250 nodes, with a maximum of 50 nodes per level."}),`
`,e.jsx(n.li,{children:"Parallel expansion must be supported for future enhance"}),`
`,e.jsx(n.li,{children:"When expanding Host B, Host A must collapse; however, Host A should still display at least the list of its IPs."}),`
`,e.jsx(n.li,{children:"Evaluate to use a magnifying glass effect to keep context while focusing on expanded elements."}),`
`,e.jsx(n.li,{children:"Aggregate connections by arrow type (from → to, to → from, bidirectional, blocked by firewall, etc.)."}),`
`,e.jsx(n.li,{children:"Aggregate entities by Enterprise vs. non-Enterprise."}),`
`,e.jsx(n.li,{children:"Aggregate by host type (e.g server and client)"}),`
`]}),`
`,e.jsx(n.p,{children:`Example of aggregation (cluster of hosts) through the choice in the dropdown menu,
where the user can decide to aggregate by Enterprise Hosts, not Enterprise Hosts,
Server Hosts, Client Hosts, or custom group hosts. For instance, in this example,
two nodes are aggregated by Server Host, and we can only see Client Hosts connected to the Center Server.`}),`
`,e.jsx("img",{src:l,alt:"Layout strategy"}),`
`,e.jsx(n.h2,{id:"layout-user-interaction-proposal",children:"Layout user interaction proposal"}),`
`,e.jsx("img",{src:c,alt:"Layout user interaction proposal"})]})}function x(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{x as default};
