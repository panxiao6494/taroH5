
import Taro, { Component, requirePlugin } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.less'

class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: [
                { url_s: require("../../images/tabbar/index-s.png"), url: require('../../images/tabbar/index.png'), title: '首页' },
                { url_s: require("../../images/tabbar/search-s.png"), url: require('../../images/tabbar/search.png'), title: '搜索' },
                { url_s: require("../../images/tabbar/publish-s.png"), url: require('../../images/tabbar/publish.png'), title: '发布' },
                { url_s: require("../../images/tabbar/msg-s.png"), url: require('../../images/tabbar/msg.png'), title: '消息' }
            ],
            cur: 0
        }
    }
    checkout(i) {
        console.log(i);
        console.log(this.props)
        // this.setState({
        //     cur: i
        // })
        switch (i) {
            case 0:
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
                break;
            case 1:
                Taro.navigateTo({
                    url: '/pages/search/index'
                })
                break;
            case 2:
                Taro.navigateTo({
                    url: '/pages/publish/index'
                })
                break;
            case 3:
                Taro.navigateTo({
                    url: '/pages/message/index'
                })
                break;
            default:
                Taro.navigateTo({
                    url: '/pages/index/index'
                })
        }
    }
    render() {

        return (
            <View className="bottom">
                {
                    this.state.imgList.map((item, index) => {
                        return (
                            <View key={index} className={this.props.index == index ? 'scale' : 'tab_item'} onClick={this.checkout.bind(this, index)}>
                                <Image src={this.props.index == index ? item.url_s : item.url} className='tab_img' />
                                <Text>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}
export default Tabbar;
