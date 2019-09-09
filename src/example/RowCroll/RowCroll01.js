import React, { useState, useEffect } from 'react';
import { Empty } from 'antd'

const RowCroll01 = (props) => {
  const { height, speed, children } = props
  const [rollClass, setRollClass] = useState('')

  const childrenLen = children ? children.length : 0

  const setScrollStyle = (offsetHeight, speed) => {
    const uid = Math.random().toString(36).substr(2);
    const style = document.createElement('style');
    style.type = 'text/css';

    style.innerHTML = `@-webkit-keyframes rowup${uid} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
        }
    }
    @keyframes rowup${uid} {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, -50%, 0);
            transform: translate3d(0, -50%, 0);
        }
    }
    .rowup-${uid}{
        -webkit-animation: ${Math.floor(offsetHeight * 1000 / speed)}ms rowup${uid} linear infinite normal;
        animation: ${Math.floor(offsetHeight * 1000 / speed)}ms rowup${uid} linear infinite normal;
    }`
    document.getElementsByTagName('head')[0].appendChild(style);
    return `rowup-${uid}`;
  }

  useEffect(() => {
    const scrollContent = document.querySelector('.scroll .scroll-content');
    if (scrollContent) {
      const offsetHeight = scrollContent.offsetHeight;
      if (childrenLen > 5) {
        const _scrollClass = setScrollStyle(offsetHeight / 2, speed || 35);
        setRollClass(_scrollClass)
      }
    }
  }, [])

  return (
    <div>
      {
        childrenLen !== 0
          ? childrenLen > 5
            ? <div className="scroll" style={{ height: height, overflow: 'hidden' }}>
              <div className={`scroll-content ${rollClass}`}>
                {children}
                {children}
              </div>
            </div>
            : <div className="scroll" style={{ height: height, overflow: 'hidden' }}>
              <div className={`scroll-content ${rollClass}`}>
                {children}
              </div>
            </div>
          : <Empty />
      }
    </div>
  )
}

export default RowCroll01