
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.less'
class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: true
        }
    }


    componentDidMount() { }

    goMy() {
        Taro.navigateTo({
            url: '/pages/myCenter/index'
        })
    }
    render() {
        return (
            <View className="topSearch_com">
                <Image src={require('../../images/index/logo.png')} style={{ width: '60px', height: '25px' }}></Image>
                {
                    this.state.loginFlag ?
                        <View className="img_b">
                            <Image src={require('../../images/index/search1.png')} style={{ width: '25px', height: '20px' }}></Image>
                            <Image src={require('../../images/index/tongzhi.png')} style={{ width: '22px', height: '27px' }}></Image>
                            <Image
                                src={require('../../images/my/avator.png')}
                                style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                                onClick={this.goMy}
                            ></Image>
                        </View>
                        :
                        <Navigator className="login" url="/pages/login/login">
                            登录
              </Navigator>
                }
            </View>
        );
    }
}
export default TopBar;
