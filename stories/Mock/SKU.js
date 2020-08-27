const SKU = {}
SKU.specList = [
  { title: '颜色', list: ['红色', '紫色', '白色', '黑色'] },
  { title: '套餐', list: ['套餐一', '套餐二', '套餐三', '套餐四'] },
  { title: '内存', list: ['64G', '128G', '256G', '32G'] },
  { title: '品牌', list: ['华为', '小米', '三星', '苹果'] },
]

SKU.specCombinationList = [
  { id: '1', specs: ['紫色', '套餐一', '64G','华为'], price: 5000, mrsp: 4880 },
  { id: '2', specs: ['紫色', '套餐一', '128G'], price: 6668, mrsp: 5880 },
  { id: '3', specs: ['紫色', '套餐二', '128G'], price: 6666, mrsp: 6650 },
  { id: '4', specs: ['黑色', '套餐三', '256G','华为'], price: 8000, mrsp: 7890 },
  { id: '4', specs: ['红色', '套餐三', '256G'], price: 8000, mrsp: 7890 },
  { id: '5', specs: ['白色', '套餐三', '32G'], price: 3500, mrsp: 3200 },
  { id: '5', specs: ['白色', '套餐四', '32G'], price: 3500, mrsp: 3200 },
]

export default SKU