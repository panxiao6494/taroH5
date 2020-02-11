
import Taro, { Component, requirePlugin } from '@tarojs/taro';
import { View, Text, Image, Navigator } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index';
import './index.less'
class Mycenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: [
                { img: require('../../images/my/quanbu.png'), type: '全部订单' },
                { img: require('../../images/my/fukuan.png'), type: '待付款' },
                { img: require('../../images/my/shouhuo.png'), type: '待收货' },
                { img: require('../../images/my/ping.png'), type: '待评价' }
            ]
        }
    }


    componentDidMount() { }
    backPage() {
        Taro.navigateBack()
    }
    render() {
        return (
            <View id="mycenter_index">
                <View className="tophead">
                    <Image src={require('../../images/my/mybg.png')} style={{ width: '100%', height: '100%' }}></Image>
                    <View style={{ position: 'absolute', top: 0, width: '94%', left: '50%', transform: 'translateX(-50%)' }}>
                        <View className="first_img">
                            <Image src={require('../../images/backIcon.png')} className="backi" onClick={this.backPage}></Image>
                        </View>
                        <View className="two-im">
                            <Image src={require('../../images/my/avator.png')} className="avator"></Image>
                            <View>
                                <View style={{ display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                                    <Text>昵称</Text>
                                    <Image src={require('../../images/my/bianji.png')} className="bianji"></Image>
                                </View>
                                <View style={{ fontSize: '15px' }}>账号信息:123545</View>
                            </View>
                        </View>
                    </View>
                    <View className="score_box">
                        <View className="sco">
                            <Text style={{ color: '#F67EA1', fontSize: '24px' }}>34.55</Text>
                            <Text style={{ fontSize: '16px', color: '#ccc' }}>余额</Text>
                        </View>
                        <View className="shuxian"></View>
                        <View className="sco">
                            <Text style={{ color: '#111', fontSize: '24px' }}>999</Text>
                            <Text style={{ fontSize: '16px', color: '#ccc' }}>积分</Text>
                        </View>
                    </View>
                </View>
                <View className="order_box">
                    <Navigator className="or_nav">
                        <View>
                            <Text>我的订单</Text>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>

                    </Navigator>
                    <View className="order_in">
                        <Navigator className="order_item">
                            <Image src={require('../../images/my/quanbu.png')} style={{ width: '26px', height: '36px' }}></Image>
                            <Text>全部订单</Text>
                        </Navigator>
                        <Navigator className="order_item">
                            <Image src={require('../../images/my/fukuan.png')} style={{ width: '29px', height: '36px' }}></Image>
                            <Text>待付款</Text>
                        </Navigator>
                        <Navigator className="order_item">
                            <Image src={require('../../images/my/shouhuo.png')} style={{ width: '41px', height: '36px' }}></Image>
                            <Text>待收货</Text>
                        </Navigator>
                        <Navigator className="order_item">
                            <Image src={require('../../images/my/ping.png')} style={{ width: '39px', height: '36px' }}></Image>
                            <Text>待评价</Text>
                        </Navigator>
                    </View>

                </View>
                <View className="menu_box">
                    <Navigator className="or_nav">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/my/shapin.png')} className="pro_ico"></Image>
                                <Text>商品管理</Text>
                            </View>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator className="or_nav">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/my/shoucang.png')} className="pro_ico"></Image>
                                <Text>我的收藏</Text>
                            </View>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator className="or_nav">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/my/person.png')} className="pro_ico"></Image>
                                <Text>个人信息</Text>
                            </View>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator className="or_nav">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/my/kehu.png')} className="pro_ico"></Image>
                                <Text>联系客服</Text>
                            </View>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>
                    </Navigator>
                    <Navigator className="or_nav">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/my/pingjia.png')} className="pro_ico"></Image>
                                <Text>我的评价</Text>
                            </View>
                            <View className="tolook">
                                <Text>查看</Text>
                                <Image src={require('../../images/my/to.png')} className="nav_to"></Image>
                            </View>
                        </View>
                    </Navigator>
                </View>
                <View className="exit">退出登录</View>
            </View>
        );
    }
}
export default Mycenter;
