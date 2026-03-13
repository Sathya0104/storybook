import React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { action } from 'storybook/actions'
import { NetworkGraph } from './NetworkGraph'
import {defaultConfig} from "./Constants";
import modelLarge1    from "../../data/model_120.json"


const meta: Meta<typeof NetworkGraph> = {
  component: NetworkGraph,
  title: 'Components/NetworkGraph',
  render: (props) => {
    return (
      <TooltipProvider>
        <div style={{ width: '100%', height: '500px' }}>
          <NetworkGraph {...props} />
        </div>
      </TooltipProvider>
    )
  }
}

export default meta

type Story = StoryObj<typeof NetworkGraph>

const initConfig = {...defaultConfig, maxZoom: 10 }

export const Basic: Story = {
  args: {
    config: initConfig,
    data: modelLarge1,
    centerKey: 'CENTER'
  }
}

export const OnNodeClick: Story = {
  args: {
    ...Basic.args,
    onNodeClick: action('onNodeClick')
  }
}

export const OnZoomChange: Story = {
  args: {
    ...Basic.args,
    onZoomChange: action('onZoomChange')
  }
}
