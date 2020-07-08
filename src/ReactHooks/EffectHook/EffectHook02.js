import React, { useEffect, useState } from 'react'

const EffectHook02 = (props) => {
  const [isOnline, setIsOnline] = useState(null)

  /**
   * useEffect
   *
   * Q1:为什么要在effect中返回一个函数？
   * A1:这是effect可选的清除机制。每个effect都可以返回一个清除函数，可以将添加和移除
   *    订阅的逻辑放在一起，它们都是effect的一部分
   *
   * Q2:React何时清除effect？
   * A2:React会在组件卸载（componentWillUnmount）的时候执行清除操作。effect会在每次
   *    渲染的时候都执行，所以使得React会在执行当前effect之前会对上一个effect进行清除
   */

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline)
    }

    let ChatAPI = {} // for test

    const cleanup = () => {
      ChatAPI.unsubscribeToFriendStatus(props.friend.id, handleStatusChange)
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return cleanup()
  })

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

export default EffectHook02
