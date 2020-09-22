import AdjoinMatrix from './adjoin-martix'

export default class SpecAdjoinMatrix extends AdjoinMatrix {
  // [{
  //   title: 'test';
  //   list: ['sdf','sgfdg','gdfg'];
  // }]
  specList

  // [
  //   {
  //     id: '12333';
  //     specs: [];
  //     price: 2;
  // }
  // ]
  specCombinationList

  constructor(specList, specCombinationList) {
    super(specList.reduce((total, current) => [...total, ...current.list], []))
    this.specList = specList
    this.specCombinationList = specCombinationList
    // 根据可选规格列表矩阵创建
    this.initSpec()
    // 同级顶点创建
    this.initSameLevel()
  }

  /**
   * 根据可选规格组合填写邻接矩阵的值
   */
  initSpec() {
    this.specCombinationList.forEach((item) => {
      this.fillInSpec(item.specs)
    })
  }
  // 填写同级点
  initSameLevel() {
    // 获得初始所有可选项
    const specsOption = this.getCollection(this.vertex)
    this.specList.forEach((item) => {
      const params = []
      // 获取同级别顶点
      item.list.forEach((value) => {
        if (specsOption.includes(value)) params.push(value)
      })
      // 同级点位创建
      this.fillInSpec(params)
    })
  }
  /*
   * @params
   * 传入顶点数组，查询出可选规格
   */
  getSpecscOptions(params) {
    let specOptionCanchoose = []
    if (params.some(Boolean)) {
      // 获取可选项（交集）
      specOptionCanchoose = this.getUnions(params.filter(Boolean))
    } else {
      // 所有可选项
      specOptionCanchoose = this.getCollection(this.vertex)
    }
    return specOptionCanchoose
  }

  /*
   * @params
   * 填写邻接矩阵的值
   */
  fillInSpec(params) {
    params.forEach((param) => {
      this.setAdjoinVertexs(param, params)
    })
  }
}
