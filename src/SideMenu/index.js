import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'
import QRCode from 'qrcodejs2'

const SideMenu = () => {
  const backToTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  /**
   * @description 生成二维码
   * @param  {number} qWidth  宽度
   * @param  {number} qHeight  高度
   * @param  {string} qText  二维码内容（跳转连接）
   * @param  {string} qRender 渲染方式（有两种方式 table和canvas，默认是canvas）
   */
  function qrcode(qWidth, qHeight, qText, qRender) {
    let qrcode = new QRCode('qrcode', {
      width: qWidth,
      height: qHeight,
      text: qText,
      render: qRender,
    })
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
            <div className="hidden-content qr-code" id="qrcode">
              {qrcode(124, 124, 'https://www.baidu.com/', 'canvas')}
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
      padding: 10px 5px;
      margin: 0 0 2px 0;
      background: #a6a6a6;
      position: relative;
      .hidden-content {
        position: absolute;
        width: 100px;
        line-height: 42px;
        text-align: center;
        background: #0089fc;
        bottom: 0;
        display: none;
      }
      .qr-code {
        width: 200px;
        height: 200px;
      }
    }
    li:hover {
      background: #0089fc;
      cursor: pointer;
      .hidden-content {
        display: inline-block;
        right: 50px;
      }
      .qr-code {
        bottom: -80px;
      }
    }
  }
`

export default SideMenu
