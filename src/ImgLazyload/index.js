import React from 'react'
import LazyLoad from 'react-lazyload'

import MockData from './Mock'

const ImgLazyload = () => {
  return (
    <div>
      {MockData.map((item) => (
        // <LazyLoad
        //   scrollContainer=".category_content"
        //   scroll={true}
        //   // offset={100}
        //   height={100}
        //   key={item.id}
        // >
        //   <img src={item.defaultImage} style={{ width: '100%' }} alt="" />
        // </LazyLoad>
        <img src={item.defaultImage} style={{ width: '100%' }} alt="" />
      ))}
    </div>
  )
}

export default ImgLazyload
