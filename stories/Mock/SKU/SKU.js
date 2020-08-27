const SKU = {}
SKU.specList = [
  { title: '颜色', list: ['红色', '紫色', '白色', '黑色'] },
  { title: '套餐', list: ['套餐一', '套餐二', '套餐三', '套餐四'] },
  { title: '内存', list: ['64G', '128G', '256G', '32G'] },
  { title: '品牌', list: ['华为', '小米', '三星', '苹果'] },
]

SKU.specCombinationList = [
  {
    id: '1',
    specs: ['紫色', '套餐一', '64G', '华为'],
    price: 5000,
    mrsp: 4880,
  },
  { id: '2', specs: ['紫色', '套餐一', '128G'], price: 6668, mrsp: 5880 },
  { id: '3', specs: ['紫色', '套餐二', '128G'], price: 6666, mrsp: 6650 },
  {
    id: '4',
    specs: ['黑色', '套餐三', '256G', '华为'],
    price: 8000,
    mrsp: 7890,
  },
  { id: '4', specs: ['红色', '套餐三', '256G'], price: 8000, mrsp: 7890 },
  { id: '5', specs: ['白色', '套餐三', '32G'], price: 3500, mrsp: 3200 },
  { id: '5', specs: ['白色', '套餐四', '32G'], price: 3500, mrsp: 3200 },
]

SKU.defaultSelect = {
  id: '4',
  specs: ['黑色', '套餐三', '256G', '华为'],
  price: 8000,
  mrsp: 7890,
}

SKU.defaultSelect = {
  id: '4',
  specs: ['黑色', '套餐三', '256G', '华为'],
  price: 8000,
  mrsp: 7890,
}

SKU.SKU_LIST = [
  {
    id: '494556029067198468',
    productId: '423536442087833615',
    portId: '193815923449200000',
    portName: 'Singapore',
    markupRate: 10,
    price: 11.11,
    title: 'Small/Med_50g_Singapore_Bag',
    cost: 10,
    displayInMol: false,
    costCurrency: 'USD',
    createBy: 'liqi',
    priceType: 'FIXED',
    uom: 'Bag',
    specs: [
      {
        id: '0_1',
        priceId: '494556029067198468',
        specName: 'Port',
        specId: '0_1',
        itemName: 'Singapore',
        specItemId: '0_1_1',
      },
      {
        id: '0_2',
        priceId: '494556029067198468',
        specName: 'UOM',
        specId: '0_2',
        itemName: 'Bag',
        specItemId: '0_2',
      },
      {
        id: '3',
        priceId: '494556029067198468',
        specName: 'Specification',
        specId: '1',
        itemName: 'Small/Med',
        specItemId: '1',
      },
      {
        id: '4',
        priceId: '494556029067198468',
        specName: 'Weight',
        specId: '2',
        itemName: '50g',
        specItemId: '4',
      },
    ],
  },
  {
    id: '494556029067198467',
    productId: '423536442087833615',
    portId: '193815923449200000',
    portName: 'Dalian',
    markupRate: 10,
    price: 22.22,
    title: 'Small/Med_20g_Dalian_Bag', // TODO 需要新增
    priceCurrency: '',
    cost: 20,
    displayInMol: false,
    costCurrency: 'USD',
    createBy: 'liqi',
    createTime: 1597716654000,
    updateBy: '',
    updateTime: 1597716661000,
    priceType: 'FIXED',
    uom: 'Bag',
    specs: [
      {
        id: '0_1',
        priceId: '494556029067198468',
        specName: 'Port',
        specId: '0_1',
        itemName: 'Dalian',
        specItemId: '0_1_2',
      },
      {
        id: '0_2',
        priceId: '494556029067198468',
        specName: 'UOM',
        specId: '0_2',
        itemName: 'Bag',
        specItemId: '0_2',
      },
      {
        id: '1',
        priceId: '494556029067198467',
        specName: 'Specification',
        specId: '1',
        itemName: 'Small/Med',
        specItemId: '1',
      },
      {
        id: '2',
        priceId: '494556029067198467',
        specName: 'Weight', // key
        specId: '2', // key_id
        itemName: '20g', // value
        specItemId: '3', // value_id
      },
    ],
  },
]

export default SKU
