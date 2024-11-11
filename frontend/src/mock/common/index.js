const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
]

const positions = [
  {
    CN: '全栈工程师',
    HK: '全栈工程師',
    US: 'Full Stack engineer'
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
        title: '陶粒生物接触氧化池',
        key: '1001',
        checked: false,
        disabled: false,
        state: '0',
        color: '#6C767D',
        detail: '陶粒生物接触氧化池',
      },
      {
        title: '预沉池',
        key: '1002',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '预沉池',
      },
      {
        title: '臭氧',
        key: '1006',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '臭氧',
        tips: true,
        message: '厂区深度处理为臭氧活性炭优先选用，进水有溴化物慎用'
      },
      {
        title: '加药系统-NaClO',
        key: '1003',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-NaClO',
        tips: true,
        message: '厂区消毒剂为NaClO优选选用，后端为生物处理慎用'
      },
      {
        title: '加药系统-ClO2',
        key: '1004',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-ClO2',
        tips: true,
        message: '厂区消毒剂为ClO2优选选用，后端为生物处理慎用'
      },
      {
        title: '加药系统-高锰酸钾',
        key: '1005',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-高锰酸钾',
        tips: true,
        message: 'Fe、Mn超标尤其适用, 后端为生物处理慎用'
      },
      {
        title: '加药系统-活性炭粉末',
        key: '1007',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-活性炭粉末',
      },
    ]
  },
  {
    title: '混凝工艺',
    key: '2000',
    children: [
      {
        title: '机械搅拌絮凝池',
        key: '2001',
        checked: false,
        state: '2',
        color: '#6C767D',
        detail: '机械搅拌絮凝池',
      },
      {
        title: '网格絮凝池',
        key: '2002',
        checked: false,
        state: '0',
        color: '#6C767D',
        detail: '网格絮凝池',
        tips: true,
        message: '单池 > 2.5万m3/d 不建议采用网格絮凝池'
      },
      {
        title: '折板絮凝池',
        key: '2003',
        checked: false,
        state: '0',
        color: '#6C767D',
        detail: '折板絮凝池',
        tips: true,
        message: '单池 >= 5万m3/d 不建议采用折板絮凝池'
      },
      {
        title: '加药系统-PAC',
        key: '2004',
        checked: false,
        state: '0',
        color: '#6C767D',
        detail: '加药系统-PAC',
      },
      {
        title: '加药系统-PAM',
        key: '2005',
        checked: false,
        state: '0',
        color: '#6C767D',
        detail: '加药系统-PAM',
      }
    ]
  },
  {
    title: '沉淀工艺',
    key: '3000',
    children: [
      {
        title: '平流沉淀池',
        key: '3001',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '平流沉淀池',
        tips: true,
        message: '设计规模 < 5万m3/d 不建议'
      },
      {
        title: '斜管沉淀池',
        key: '3002',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: '斜管沉淀池',
      },
      {
        title: '高密度沉淀池',
        key: '3003',
        checked: false,
        disabled: false,
        state: '0',
        color: '#6C767D',
        detail: '高密度沉淀池',
        tips: true,
        message: '设计规模 < 5万m3/d 不建议'
      },
      {
        title: '机械搅拌澄清池',
        key: '3004',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '机械搅拌澄清池',
      },
      {
        title: '水力循环澄清池',
        key: '3005',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: '水力循环澄清池',
        tips: true,
        message: '设计规模 < 5万m3/d 不建议'
      },
      {
        title: '平流式气浮池',
        key: '3006',
        checked: false,
        disabled: false,
        state: '0',
        color: '#6C767D',
        detail: '平流式气浮池',
      },
  
    ]
  },
  {
    title: '过滤工艺',
    key: '4000',
    children: [   
      {
        title: '普通快滤池',
        key: '4001',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '普通快滤池',
      },
      {
        title: 'V型滤池',
        key: '4002',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: 'V型滤池',
      }
    ]
  },
  {
    title: '深度处理工艺',
    key: '5000',
    children: [
      {
        title: '臭氧活性炭',
        key: '5001',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '臭氧活性炭',
      },
      {
        title: 'UF-GE',
        key: '5002',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: 'UF-GE',
      }
    ]
  },
  {
    title: '消毒工艺',
    key: '6000',
    children: [
      {
        title: '接触消毒池',
        key: '6001',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '接触消毒池',
      },
      {
        title: '浸水式紫外线消毒',
        key: '6002',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: '浸水式紫外线消毒',
      },
      {
        title: '臭氧消毒',
        key: '6003',
        checked: false,
        disabled: false,
        state: '0',
        color: '#6C767D',
        detail: '臭氧消毒',
      },
      {
        title: '折点加氯',
        key: '6004',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '折点加氯',
      },
      {
        title: '加药系统-NaClO',
        key: '6005',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-NaClO',
      },
      {
        title: '加药系统-ClO2',
        key: '6006',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '加药系统-ClO2',
      }
    ]
  },
  {
    title: '其他工艺',
    key: '8000',
    children: [
      {
        title: '提升泵房',
        key: '8001',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: '提升泵房',
      },
      {
        title: '清水池',
        key: '8002',
        checked: false,
        disabled: false,
        state: '0',
        color: '#6C767D',
        detail: '清水池',
      }
    ]
  },
  {
    title: '污泥脱水工艺',
    key: '9000',
    children: [
      {
        title: '浓缩池',
        key: '9001',
        checked: false,
        disabled: false,
        state: '2',
        color: '#6C767D',
        detail: '浓缩池',
      },
      {
        title: '脱水加药',
        key: '9002',
        checked: false,
        disabled: false,
        state: '1',
        color: '#6C767D',
        detail: '脱水加药',
      },
    ]
  },
]

export {positions, avatars, admins, processUnit}
