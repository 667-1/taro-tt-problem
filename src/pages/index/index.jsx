import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        {/* pay-button 是tt小程序内置组件，编译后标签丢失 */}

        {/* 修改dist/pages/index.ttml 增加pay-button 标签 页面显示正常 */}
        <pay-button />
        <View>Hello world!</View>
      </View>
    )
  }
}
