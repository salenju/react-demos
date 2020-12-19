class eventEmitter {
  constructor() {
    // eventMap用来存储事件和监听函数之间的对应关系
    this.eventMap = {}
  }

  // 订阅事件
  on(type, handler) {
    /**
     * @param {String} type   事件名称
     * @param {Function} handler    事件名对应的需要触发的函数
     */

    if (!handler instanceof Function) {
      throw new Error('请传入一个函数')
    }

    // 判断type事件是否已经在队列中存在
    if (!this.eventMap[type]) {
      // 不存在，新建队列
      this.eventMap[type] = []
    }
    // 已存在，在已有队列中插入handler
    this.eventMap[type].push(handler)
  }

  // 触发事件
  emit(type, params) {
    /**
     * @param {String} type   事件名称
     * @param {String, Object} params   触发事件所传入的参数
     *
     */
    // 事件是否已经订阅
    if (this.eventMap[type]) {
      // 事件已订阅
      this.eventMap[type].forEach((handler) => {
        handler(params)
      })
    }
    // 事件未订阅
    throw new Error('当前事件未订阅')
  }

  // 删除事件
  off(type, handler) {
    /**
     * @param {String} type   事件名称
     * @param {Function} handler    事件名对应的需要触发的函数
     */

    if (this.eventMap[type]) {
      let index = this.eventMap[type].indexOf(handler)
      this.eventMap.splice(index, 1)
    }
  }
}
