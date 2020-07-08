import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Button, message } from 'antd'

const UseCallback01 = () => {
  const [count1, changeCount1] = useState(0)
  const [count2, changeCount2] = useState(10)

  const calculateCount = useCallback(() => {
    if ((count1, count2)) {
      return count1 * count2
    }
    return count1 + count2
  }, [count1, count2])

  useEffect(() => {
    const result = calculateCount(count1, count2)
    message.info(`执行副作用，最新值为${result}`)
  }, [calculateCount])

  return (
    <Fragment>
      {count1} {count2}
      <Button onClick={() => changeCount1(count1 + 1)}>改变count1</Button>
      <Button onClick={() => changeCount2(count2 + 1)}>改变count2</Button>
    </Fragment>
  )
}

export default UseCallback01
