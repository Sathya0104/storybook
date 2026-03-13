/**
 * Network Geo Graph example
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
import {useWorldMap}                      from "../components/networkGraph/NetworkGraphHooks"
import "../App.scss"

import model           from "../data/model_geo.json"
import {defaultConfig} from "../components/networkGraph/Constants"

const config = {...defaultConfig, bezierCurves: true }

export default function App() {
  const { geoJson } = useWorldMap()

  const onNodeExpandClick = (node: NetworkNode) => {
    // alert(`onNodeExpandClick: ${JSON.stringify(node.key)}`)
    console.log(`Expanded Node ${JSON.stringify(node)}`)
  }

  return (
    <TooltipProvider>
      <NetworkGraph
        data={model}
        config={config}
        centerKey={"rom"}
        readOnly={false}
        mapGeoJson={geoJson}
        layout={'geo'}
        onNodeExpandableClick={onNodeExpandClick}
        renderNodeTooltip={TooltipNodeComponent}
        renderNodeContextMenu={NodeContextMenuComponent}
      />
    </TooltipProvider>
  )
}




