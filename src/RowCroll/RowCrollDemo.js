import React from 'react';
import RowCroll from './RowCroll'
// import RowCroll from './RowCroll01'

const RowCrollDemo = (props) => {

  return (
    <div>
      <RowCroll {...props}>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
      </RowCroll>
    </div>
  )
}

export default RowCrollDemo