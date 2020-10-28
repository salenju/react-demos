import React, { useState } from 'react'
import { Button, Icon } from 'antd'
import styled from 'styled-components'

const AddToCartBtn = (props) => {
  const { disabled, onClick, content, clickedContent } = props
  const [dotAnimation, setDotAnimation] = useState(false)

  const handleClick = () => {
    setDotAnimation(true)
    setTimeout(() => {
      setDotAnimation(false)
    }, 1000)
  }

  return (
    <Wrapper disabled={disabled} onClick={handleClick}>
      <div className="icon">
        <div className={dotAnimation ? 'dotAnimation' : 'dot'}></div>

        <Icon
          type="shopping-cart"
          style={{ color: '#ffffff', fontSize: '21px' }}
        />
      </div>
      <p className="addToCart">{dotAnimation ? clickedContent : content}</p>
    </Wrapper>
  )
}

const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  width: 159px;
  height: 50px;
  background: #0089fc;
  border-radius: 4px;
  border: 1px solid #0089fc;
  color: #ffffff;

  .icon {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ffffff;
      margin: 0 0 0 4px;
      display: none;
    }
  }
  .addToCart {
    padding: 0 0 0 15px;
    margin: 0;
  }

  &:hover {
    cursor: pointer;
    background: #269afc;
    border: 1px solid #269afc;
    .dot {
      display: block;
    }
  }
  .dot-animation {
    animation: hiddenDot 1.5s ease-in;
  }

  @keyframes hiddenDot {
    from {
      visibility: visible;
      margin: 6px 0 0;
    }

    to {
      margin: -3px 0 0;
      visibility: hidden;
    }
  }
`

export default AddToCartBtn
