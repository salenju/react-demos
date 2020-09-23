const SKU = {}
SKU.specList = [
  { title: '颜色', list: ['红色', '紫色', '白色', '黑色'] },
  { title: '套餐', list: ['套餐一', '套餐二', '套餐三', '套餐四'] },
  { title: '内存', list: ['64G', '128G', '256G', '32G'] },
  { title: '品牌', list: ['华为', '小米', '三星', '苹果'] },
]

SKU.specList2 = [
  { title: 'Port', list: ['Dalian', 'Shenzhen', 'Singapore'] },
  { title: 'UOM', list: ['Case', 'Kilogram', 'Bag', 'Box'] },
  { title: 'Kind', list: ['泰国芒果', '澳芒'] },
  { title: 'Color', list: ['Red', 'Blue'] },
]

SKU.specList3 = [
  { title: 'Port', list: ['China'] },
  { title: 'UOM', list: ['Pair'] },
  { title: 'Color', list: ['黑色橘线'] },
  {
    title: 'Size',
    list: [
      '44码',
      '37码',
      '41码',
      '38码',
      '35码',
      '43码',
      '39码',
      '42码',
      '36码',
      '46码',
      '40码',
      '45码',
    ],
  },
  { title: 'Materials', list: ['超纤革鞋面、普通橡胶底'] },
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

SKU.specCombinationList2 = [
  {
    id: '319664716748298728',
    priceType: 'QUOTE',
    maxPrice: null,
    specs: ['Dalian', 'Case', '泰国芒果', 'Red'],
  },
  {
    id: '319664716748167656',
    price: 2.27,
    msrp: 6,
    priceType: 'FIXED',
    maxPrice: null,
    specs: ['Shenzhen', 'Kilogram', '泰国芒果', 'Red'],
  },
  {
    id: '319664716748167646',
    price: 2.27,
    msrp: 6,
    priceType: 'FIXED',
    maxPrice: null,
    specs: ['Shenzhen', 'Kilogram', '泰国芒果', 'Blue'],
  },
  {
    id: '319643639783627240',
    price: 20.45,
    msrp: 30,
    priceType: 'RANGE',
    maxPrice: 25,
    specs: ['Shenzhen', 'Bag', '澳芒', 'Blue'],
  },
  {
    id: '319664716748233192',
    price: 22.73,
    priceType: 'RANGE',
    maxPrice: 28.41,
    specs: ['Singapore', 'Bag', '泰国芒果', 'Blue'],
  },
  {
    id: '319643639783496168',
    price: 22.73,
    msrp: 30,
    priceType: 'FIXED',
    maxPrice: null,
    specs: ['Dalian', 'Box', '澳芒', 'Blue'],
  },
  {
    id: '319643639783365096',
    price: 25,
    msrp: 30,
    priceType: 'FIXED',
    maxPrice: null,
    specs: ['Singapore', 'Box', '澳芒', 'Blue'],
  },
]

SKU.specCombinationList3 = [
  {
    id: '319100479428696552',
    price: 44,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '44码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479529359848',
    price: 37,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '37码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479613245928',
    price: 41,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '41码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479713909224',
    price: 38,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '38码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479814572520',
    price: 35,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '35码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479915235816',
    price: 43,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '43码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100478824716776',
    price: 39,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '39码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100478925380072',
    price: 42,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '42码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479026043368',
    price: 36,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '36码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479126706664',
    price: 46,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '46码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479227369960',
    price: 40,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '40码', '超纤革鞋面、普通橡胶底'],
  },
  {
    id: '319100479328033256',
    price: 45,
    msrp: 5.7,
    priceType: 'Fixed',
    maxPrice: null,
    specs: ['China', 'Pair', '黑色橘线', '45码', '超纤革鞋面、普通橡胶底'],
  },
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

SKU.SKU_LIST2 = [
  {
    id: '319664716748298728',
    productId: '319642481618590184',
    portId: '196036292004281984',
    portName: 'Dalian',
    markupRate: 12.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600064619000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'QUOTE',
    uom: 'Case',
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942660442600',
        priceId: '319664716748298728',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '泰国芒果',
        specItemId: '319662145992661480',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
  {
    id: '319664716748167656',
    productId: '319642481618590184',
    portId: '193815922459279008',
    portName: 'Shenzhen',
    markupRate: 12.0,
    price: 2.27,
    cost: 2.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600064619000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'FIXED',
    uom: 'Kilogram',
    msrp: 6.0,
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942710774248',
        priceId: '319664716748167656',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '泰国芒果',
        specItemId: '319662145992661480',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
  {
    id: '319643639783627240',
    productId: '319642481618590184',
    portId: '193815922459279008',
    portName: 'Shenzhen',
    markupRate: 12.0,
    price: 20.45,
    cost: 18.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600052056000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'RANGE',
    maxPrice: 25.0,
    maxCost: 22.0,
    uom: 'Bag',
    msrp: 30.0,
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942777883112',
        priceId: '319643639783627240',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '澳芒',
        specItemId: '319640861126171112',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
  {
    id: '319664716748233192',
    productId: '319642481618590184',
    portId: '193815923449200000',
    portName: 'Singapore',
    markupRate: 12.0,
    price: 22.73,
    cost: 20.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600064619000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'RANGE',
    maxPrice: 28.41,
    maxCost: 25.0,
    uom: 'Bag',
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942878546408',
        priceId: '319664716748233192',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '泰国芒果',
        specItemId: '319662145992661480',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
  {
    id: '319643639783496168',
    productId: '319642481618590184',
    portId: '196036292004281984',
    portName: 'Dalian',
    markupRate: 12.0,
    price: 22.73,
    cost: 20.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600052056000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'FIXED',
    uom: 'Box',
    msrp: 30.0,
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942928878056',
        priceId: '319643639783496168',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '澳芒',
        specItemId: '319640861126171112',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
  {
    id: '319643639783365096',
    productId: '319642481618590184',
    portId: '193815923449200000',
    portName: 'Singapore',
    markupRate: 12.0,
    price: 25.0,
    cost: 22.0,
    costCurrency: 'USD',
    createBy: '225898996240678922',
    createTime: 1600052056000,
    updateBy: '225898996240678922',
    updateTime: 1600067138000,
    priceType: 'FIXED',
    uom: 'Box',
    msrp: 30.0,
    spuCode: 'P020108-M001',
    skuCode: 'P020108-M001-0001',
    specs: [
      {
        id: '319668942828214760',
        priceId: '319643639783365096',
        specName: 'Kind',
        specId: '319643027985406440',
        itemName: '澳芒',
        specItemId: '319640861126171112',
        activeStatus: 1,
      },
    ],
    isDefault: '0',
    isCountry: '0',
  },
]

SKU.SKU_LIST3 = []

SKU.productData = {
  id: '319642481618590184',
  name: '芒果',
  impa: '23435',
  categoryId: '1298190978346745857',
  companyId: '222686991190327310',
  specs: [
    {
      specId: '319642857965099496',
      specItemId: '319640861126564328',
      itemName: '台湾',
      name: 'Origin',
    },
  ],
  categoryLevel: 5,
  status: 'CP',
  activeStatus: '1',
  supplierName: 'TIANTIANXIANGSHANG',
  updatedDate: 1600067138000,
  molCreditAcceptable: 1,
  subCategoryName: 'MANGO THAI',
  categoryName: 'Stone fruit',
  categoryPid: '1298189763944742913',
  price: '1',
  descLink:
    'https://www.marineonline.com/api/common/r/oss?path=dev/mall/CPFILE_afc9e2e0-f658-11ea-b18f-77712e6549cc.txt',
  specification:
    '[{"itemName":"台湾","name":"Origin","specId":319642857965099496,"specItemId":319640861126564328}]',
  isByMOL: 1,
  isProduct: 1,
  imageList: [
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/SPIMG_4a05cac0-f633-11ea-a7e1-2d99756ecc7a.jpg',
    },
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/D00000417ALEXIA drum.jpg',
    },
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/SPIMG_4a05cac0-f633-11ea-a7e1-2d99756ecc7a.jpg',
    },
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/D00000417ALEXIA drum.jpg',
    },
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/SPIMG_4a05cac0-f633-11ea-a7e1-2d99756ecc7a.jpg',
    },
    {
      url:
        'https://www.marineonline.com/api/common/r/oss?path=dev/mall/D00000417ALEXIA drum.jpg',
    },
  ],
  priceList: [
    { // priceObj
      id: '319664716748298728',
      productId: '319642481618590184',
      portId: '196036292004281984',
      portName: '大连',
      markupRate: 12.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600064619000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'QUOTE',
      uom: 'Case',
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942660442600',
          priceId: '319664716748298728',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '泰国芒果',
          specItemId: '319662145992661480',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
    {
      id: '319664716748167656',
      productId: '319642481618590184',
      portId: '193815922459279008',
      portName: '深圳',
      markupRate: 12.0,
      price: 2.27,
      cost: 2.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600064619000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'FIXED',
      uom: 'Kilogram',
      msrp: 6.0,
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942710774248',
          priceId: '319664716748167656',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '泰国芒果',
          specItemId: '319662145992661480',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
    {
      id: '319643639783627240',
      productId: '319642481618590184',
      portId: '193815922459279008',
      portName: '深圳',
      markupRate: 12.0,
      price: 20.45,
      cost: 18.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600052056000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'RANGE',
      maxPrice: 25.0,
      maxCost: 22.0,
      uom: 'Bag',
      msrp: 30.0,
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942777883112',
          priceId: '319643639783627240',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '澳芒',
          specItemId: '319640861126171112',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
    {
      id: '319664716748233192',
      productId: '319642481618590184',
      portId: '193815923449200000',
      portName: '新加坡',
      markupRate: 12.0,
      price: 22.73,
      cost: 20.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600064619000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'RANGE',
      maxPrice: 28.41,
      maxCost: 25.0,
      uom: 'Bag',
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942878546408',
          priceId: '319664716748233192',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '泰国芒果',
          specItemId: '319662145992661480',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
    {
      id: '319643639783496168',
      productId: '319642481618590184',
      portId: '196036292004281984',
      portName: '大连',
      markupRate: 12.0,
      price: 22.73,
      cost: 20.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600052056000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'FIXED',
      uom: 'Box',
      msrp: 30.0,
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942928878056',
          priceId: '319643639783496168',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '澳芒',
          specItemId: '319640861126171112',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
    {
      id: '319643639783365096',
      productId: '319642481618590184',
      portId: '193815923449200000',
      portName: '新加坡',
      markupRate: 12.0,
      price: 25.0,
      cost: 22.0,
      costCurrency: 'USD',
      createBy: '225898996240678922',
      createTime: 1600052056000,
      updateBy: '225898996240678922',
      updateTime: 1600067138000,
      priceType: 'FIXED',
      uom: 'Box',
      msrp: 30.0,
      spuCode: 'P020108-M001',
      skuCode: 'P020108-M001-0001',
      specs: [
        {
          id: '319668942828214760',
          priceId: '319643639783365096',
          specName: 'Kind',
          specId: '319643027985406440',
          itemName: '澳芒',
          specItemId: '319640861126171112',
          activeStatus: 1,
        },
      ],
      isDefault: '0',
      isCountry: '0',
    },
  ],
}

export default SKU
