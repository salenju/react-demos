import React, { useState, useEffect } from 'react';
import { Empty } from 'antd'
import styled,{ keyframes} from 'styled-components'

const rowUp = keyframes`
  0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
  }
  100% {
      -webkit-transform: translate3d(0, -50%, 0);
      transform: translate3d(0, -50%, 0);
  }
`

const RowCrollContainer = styled('div')`
  .rowup{
    -webkit-animation: ${props => Math.floor(props.offsetHeight * 1000 / props.speed)}ms ${rowUp} linear infinite normal;
    animation: ${props => Math.floor(props.offsetHeight * 1000 / props.speed)}ms ${rowUp} linear infinite normal;
  }
`

const RowCroll = (props) => {
  const { height, children } = props
  const [rollClass, setRollClass] = useState('')

  const childrenLen = children ? children.length : 0

  useEffect(() => {
    if (childrenLen > 5) {
      setRollClass('rowup')
    }
  }, [])

  return (
    <div>
      {
        childrenLen !== 0
          ? <RowCrollContainer offsetHeight={childrenLen * 32} {...props} >
            <div className="scroll" style={{ height: height, overflow: 'hidden' }}>
              <div className={`${rollClass}`}>
                {children}
                {
                  childrenLen > 5
                    ? children
                    : null
                }
              </div>
            </div>
          </RowCrollContainer>
          : <Empty />
      }
    </div>
  )
}

export default RowCroll