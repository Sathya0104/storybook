/**
 *
 * Styled components for the demo environment
 * Using stitches package I created a small set of components
 * for a simple demo environment.
 *
 *
 * @author Enrico Tedeschini, Sathyanarayana Venugopal
 */
import React, { type PropsWithChildren } from 'react'
import { ResizableBox } from 'react-resizable'
import {styled} from "@stitches/react";

type ResizablePanelProps = {
  width?: number
  height?: number
  className?: string // Accept a className prop
}

type FramedPanelProps = {
  className?: string
}

const PanelFrameStyles = {
  border: '1px solid #c7d0e1',
  borderRadius: 6,
  backgroundColor: '#fff',
  boxSizing: 'border-box',
} as const

const ResizableHandleClasses = {
  e: 'handleEast',
  se: 'handleSouthEast',
  s: 'handleSouth'
}

/**
 * ResizablePanel component
 * @param {ResizablePanelProps} props
 * @returns {JSX.Element}
 */
const ResizablePanelHeadless: React.FC<PropsWithChildren<ResizablePanelProps>> = ({
  width = 750,
  height = 500,
  children,
  className
}): React.ReactNode => {
  return (
    <div className={className}>
      <ResizableBox
        className="boxResizable"
        width={width}
        height={height}
        handle={(h, ref) => <span className={ResizableHandleClasses[h]} ref={ref} />}
        resizeHandles={['se', 'e', 's']}>
        {children}
      </ResizableBox>
    </div>
  )
}

const ResizablePanel = styled(ResizablePanelHeadless, {
  display: 'inline-block',

  // Nested styles for the boxResizable class and handles
  '.boxResizable': {
    position: 'relative',
    margin: '10px',
    ...PanelFrameStyles,
  },

  '.handleEast, .handleSouth, .handleSouthEast': {
    position: 'absolute',
    backgroundColor: 'rgb(62, 99, 221)',
    borderRadius: '4px',
  },

  '.handleEast': {
    width: '8px', height: '20px', top: '50%', right: -14, transform: 'translateY(-50%)', cursor: 'ew-resize'
  },

  '.handleSouth': {
    width: '20px', height: '8px', bottom: -14, left: '50%', transform: 'translateX(-50%)', cursor: 'ns-resize'
  },

  '.handleSouthEast': {
    width: '8px', height: '8px', bottom: -14, right: -14, cursor: 'se-resize'
  },
})

const FramedPanelHeadless: React.FC<PropsWithChildren<FramedPanelProps>> = ({
  className,
  children,
}): React.ReactNode => {
  return (
    <div className={className}>
      <div className="boxFrame">
        {children}
      </div>
    </div>
  )
}

const FramedPanel = styled(FramedPanelHeadless, {
  display: 'block',

  '.boxFrame': {
    padding: '10px',
    margin: '10px',
    ...PanelFrameStyles,
    width: 'calc(100% - 20px)',
    maxWidth: 'calc(100% - 20px)',
    overflow: 'hidden',
  },

  '.boxFrame .app': {
    width: '100%',
    maxWidth: '100%',
    height: 'clamp(460px, 68vh, 720px)',
    maxHeight: '72vh',
    overflow: 'hidden',
  },

  '.boxFrame .app .app__toolbar': {
    flexWrap: 'wrap',
  },

  '.boxFrame .app .app__graphWrap': {
    margin: '5px',
  },
})

export {
  FramedPanel,
  ResizablePanel,
}
