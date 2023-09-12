import Mock from 'mockjs'
import {processUnit} from '../../mock/common'

Mock.mock('/work/processUnit', 'get', () => {
  return processUnit
})