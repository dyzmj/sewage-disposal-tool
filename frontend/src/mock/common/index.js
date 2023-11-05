const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
]

const positions = [
  {
    CN: 'Java工程师',
    HK: 'Java工程師',
    US: 'Java engineer'
  },{
    CN: '前端工程师',
    HK: '前端工程師',
    US: 'Front-end engineer'
  },{
    CN: '前端工程师',
    HK: '前端工程師',
    US: 'Front-end engineer'
  },{
    CN: '产品分析师',
    HK: '產品分析師',
    US: 'Product analyst'
  }
]

const admins = ['管理员']

// 工艺单元
const processUnit = [
  {
    title: '预处理工艺',
    key: '1000',
    children: [
      {
        title: '生物接触氧化池',
        key: '1001',
        checked: false,
        color: '#87d068',
        detail: '生物接触氧化池',
      },
      {
        title: '重力浓缩池',
        key: '1002',
        checked: false,
        color: '#2db7f5',
        detail: '重力浓缩池',
      }
    ]
  },
  {
    title: '消毒工艺',
    key: '2000',
    children: [
      {
        title: '接触消毒',
        key: '2001',
        checked: false,
        color: '#2db7f5',
        detail: '接触消毒',
      },
      {
        title: '紫外线消毒',
        key: '2002',
        checked: true,
        color: '#6C767D',
        detail: '紫外线消毒',
      },
      {
        title: '臭氧消毒',
        key: '2003',
        checked: false,
        color: '#87d068',
        detail: '臭氧消毒',
      }
    ]
  },
  {
    title: '混凝土工艺',
    key: '3000',
    children: [
      {
        title: '机械絮凝池',
        key: '3001',
        checked: false,
        color: '#6C767D',
        detail: '机械絮凝池',
      },
      {
        title: '网格絮凝池',
        key: '3002',
        checked: true,
        color: '#87d068',
        detail: '网格絮凝池',
      },
    ]
  },
  {
    title: '加药工艺',
    key: '4000',
    children: [
      {
        title: 'PAC',
        key: '4001',
        checked: false,
        color: '#6C767D',
        detail: 'PAC',
      },
      {
        title: 'PAM',
        key: '4002',
        checked: true,
        color: '#2db7f5',
        detail: 'PAM',
      },
      {
        title: 'NaClO',
        key: '4003',
        checked: false,
        color: '#6C767D',
        detail: 'NaClO',
      },
      {
        title: 'ClO2',
        key: '4004',
        checked: true,
        color: '#87d068',
        detail: 'ClO2',
      },
    ]
  },
  {
    title: '沉淀工艺',
    key: '5000',
    children: [
      {
        title: '平流沉淀池',
        key: '5001',
        checked: false,
        color: '#2db7f5',
        detail: '平流沉淀池',
      },
      {
        title: '斜管沉淀池',
        key: '5002',
        checked: true,
        color: '#6C767D',
        detail: '斜管沉淀池',
      },
      {
        title: '高密度沉淀池',
        key: '5003',
        checked: false,
        color: '#87d068',
        detail: '高密度沉淀池',
      },
      {
        title: '机械搅拌澄清池',
        key: '5004',
        checked: true,
        color: '#2db7f5',
        detail: '机械搅拌澄清池',
      },
      {
        title: '水力循环澄清池',
        key: '5005',
        checked: true,
        color: '#6C767D',
         detail: '水力循环澄清池',
      },
      {
        title: '平流式气浮池',
        key: '5006',
        checked: true,
        color: '#87d068',
         detail: '平流式气浮池',
      },
  
    ]
  },
  {
    title: '过滤工艺',
    key: '6000',
    children: [
      {
        title: '普通快滤池',
        key: '6001',
        checked: true,
        color: '#2db7f5',
        detail: '普通快滤池',
      },
      {
        title: 'V型滤池',
        key: '6002',
        checked: false,
        color: '#6C767D',
        detail: 'V型滤池',
      }
    ]
  },
  {
    title: '其他工艺',
    key: '7000',
    children: [
      {
        title: '提升泵房',
        key: '7001',
        checked: false,
        color: '#6C767D',
        detail: '提升泵房',
      },
      {
        title: '清水池',
        key: '7002',
        checked: true,
        color: '#87d068',
        detail: '清水池',
      },
      {
        title: '活性炭吸附塔',
        key: '7003',
        checked: true,
        color: '#2db7f5',
        detail: '活性炭吸附塔',
      },
    ]
  },
]

export {positions, avatars, admins, processUnit}
