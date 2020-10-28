import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import QRCode from 'qrcode.react'

const SideMenu = () => {
  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Wrapper id="sideMenu">
      <div className="content">
        <ul>
          <li>
            <Icon type="message" style={{ color: '#fff' }} />
            <div className="hidden-content">Chart 12</div>
          </li>
          <li>
            <Icon type="qrcode" style={{ color: '#fff' }} />
            <div className="hidden-content qr-code">
              <p className="qr-title">View in APP</p>
              <p className="qr-image">
                {QRCode({ value: 'https://www.marineonline.com/', size: 120 })}
              </p>
            </div>
          </li>
          <li onClick={backToTop}>
            <Icon type="up" style={{ color: '#fff' }} />
            <div className="hidden-content">Back to Top</div>
          </li>
        </ul>
      </div>
      <div id="qrcode"></div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  height: 2000px;
  width: 100%;
  .content {
    margin: 200px 400px;
    width: 50px;
    position: fixed;
    ul,
    li {
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
      .hidden-content {
        position: absolute;
        display: none;
        width: 100px;
        line-height: 45px;
        text-align: center;
        background: #0089fc;
        bottom: 0;
        border-radius: 4px 0 0 4px;
        font-size: 12px;
        font-weight: 400;
        color: #ffffff;
      }
      .qr-code {
        text-align: center;
        width: 120px;
        height: 176px;
        border-radius: 4px;
        margin: 0 2px 0 0;
        padding: 10px;
        .qr-title {
          font-size: 12px;
          font-weight: 400;
          color: #ffffff;
          line-height: 12px;
        }
        .qr-image {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 120px;
          height: 120px;
          background: #ffffff;
        }
      }
    }
    li:hover {
      background: #0089fc;
      cursor: pointer;
      .hidden-content {
        display: inline-block;
        right: 50px;
      }
    }
  }
`

export default SideMenu
