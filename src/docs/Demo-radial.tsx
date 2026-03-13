/**
 * Network Radial Graph example
 *
 * @author
 * Enrico Tedeschini,
 * Sathyanarayana Venugopal
 */

import React, {useRef}                    from "react"
import {NetworkGraphHandle, NetworkNode}  from "../components/networkGraph/types/ComponentsType"
import { NetworkGraph }                   from "../components/networkGraph/NetworkGraph"
import { Provider as TooltipProvider }    from "@radix-ui/react-tooltip"
import TooltipNodeComponent               from "../NodeTooltip"
import {NodeContextMenuComponent}         from "../NodeContextMenu";
import "../App.scss"

import model           from "../data/model_small.json"
import {defaultConfig} from "../components/networkGraph/Constants"

const config = {...defaultConfig, bezierCurves: false }

export default function App() {

  const onNodeExpandClick = (node: NetworkNode) => {
    // alert(`onNodeExpandClick: ${JSON.stringify(node.key)}`)
    console.log(`Expanded Node ${JSON.stringify(node)}`)
  }

  return (
    <TooltipProvider>
      <NetworkGraph
        data={model}
        config={config}
        centerKey={"CENTER"}
        readOnly={false}
        layout={'radial'}
        onNodeExpandableClick={onNodeExpandClick}
        renderNodeTooltip={TooltipNodeComponent}
        renderNodeContextMenu={NodeContextMenuComponent}
      />
    </TooltipProvider>
  )
}




