import React from "react";
import {Meta, StoryObj} from "@storybook/react-vite"
import {FramedPanel, ResizablePanel} from "./DemoEnvComponents";
import DemoOverview     from '../App';
import Demo2            from './Demo-geo';
import Demo3            from './Demo-radial';
import Demo4            from './Modal-500';
import Demo5            from './Modal120';
import Demo6            from './Demo250';
import Demo7           from './GeoRadial';
import Demo8           from './Medium';

const meta: Meta = {
  title: 'DEMO',
  parameters:{
    controls:{
      exclude:/.*/g
    }
  },
}

export default meta

type Story = StoryObj

export const Overview: Story = {
  render: props =>
    <FramedPanel>
      <DemoOverview/>
    </FramedPanel>,
  tags: ['!dev'],
}

export const GeoDemo: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo2/>
    </ResizablePanel>,
  tags: ['!dev'],
}

export const GeoRadial: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo7/>
    </ResizablePanel>,
  tags: ['!dev'],
}
export const RadialDemo: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo3/>
    </ResizablePanel>,
  tags: ['!dev'],
}

export const Radial500: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo4/>
    </ResizablePanel>,
  tags: ['!dev'],
}

export const Radial120: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo5/>
    </ResizablePanel>,
  tags: ['!dev'],
}

export const Radial250: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo6/>
    </ResizablePanel>,
  tags: ['!dev'],
}

export const MediumRadial: Story = {
  render: props =>
    <ResizablePanel width={800} height={600}>
      <Demo8/>
    </ResizablePanel>,
  tags: ['!dev'],
}