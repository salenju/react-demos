import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

const FixedSideMenu = (props) => {
  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  const url = window.location.href

  return (
    <Wrapper id="sideMenu">
      <div className="content">
        <ul>
          <li className="chat">
            <div className="AAA">
              <Icon type="message" style={{ color: '#fff' }} />
            </div>

            <div className="show-content">聊天工具</div>
          </li>
          <li className="qrcode-image">
            <Icon type="qrcode" style={{ color: '#fff' }} />
            <div className="hidden-content">
              <div className="qr-code">
                <p className="qr-title">viewInAPP</p>
                <p className="qr-image">二维码</p>
              </div>
            </div>
          </li>
          <li onClick={backToTop} className="back-to-top">
            <Icon type="up" style={{ color: '#fff' }} />
            <div className="show-content">Back to Top</div>
          </li>
        </ul>
      </div>
      <div id="qrcode"></div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  width: 100%;
  height: 100%;
  .content {
    width: 50px;
    position: fixed;
    top: 400px;
    right: 0;
    z-index: 20;
    ul,
    li,
    p {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 45px;
      margin: 0 0 2px 0;
      background: #a6a6a6;
      position: relative;
    }

    li.chat,
    li.back-to-to {
      position: absolute;
      left: 0;
      top: 0;
    }
    li.chat {
      min-width: 150px;
      &:hover {
      }
    }

    .hidden-content {
      position: absolute;
      bottom: 0;
      opacity: 0;
      display: none;
      min-width: 150px;
      line-height: 45px;
      text-align: center;
      background: #0089fc;
      border-radius: 4px 0 0 4px;
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;
      .qr-code {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 4px;
        margin: 0 2px 0 0;
        padding: 10px;
        .qr-title {
          font-size: 12px;
          font-weight: 400;
          color: #ffffff;
          line-height: 12px;
          padding: 8px 0 14px;
        }
        .qr-image {
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: content-box;
          padding: 5px;
          width: 110px;
          height: 110px;
          background: #ffffff;
        }
      }
    }

    .AAA {
      width: 50px;
    }
    li:hover {
      background: #0089fc;
      cursor: pointer;
      .hidden-content {
        animation: showHidden 1.5s ease;
        right: 50px;
        display: inline-block;
      }
    }

    @keyframes showHidden {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

export default FixedSideMenu
