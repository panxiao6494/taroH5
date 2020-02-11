import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './index.less'
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { avator: require('../../images/detail/shop.png'), name: '潇潇', time: '2020年5月6日', content: "好东西好东西好多少度郭德纲怕老师的去阿达东西好哦的东西o阿萨法阿达" },
                { avator: require('../../images/detail/shop.png'), name: '山裂', time: '2020年5月8日', content: "好东西好东西好东西好哦的东西o阿萨法阿达" },
                { avator: require('../../images/detail/shop.png'), name: '宁丰', time: '2020年5月6日', content: "好东西真的是好东西好东西好哦好的啊阿萨德访问如风哦哦很难的东西o阿萨法阿达" },
                { avator: require('../../images/detail/shop.png'), name: '山裂', time: '2020年5月8日', content: "好东西好东西好东西好哦的东西o阿萨法阿达" }
            ]
        }
    }


    componentDidMount() {
        console.log(this.$router.params.id);//接受路由跳转传递过来的参数
    }
    backPage() {
        Taro.navigateBack()
    }
    goMy() {
        Taro.navigateTo({
            url: '/pages/myCenter/index'
        })
    }
    config = {
        navigationBarTitleText: "商品详情"
    };
    render() {
        return (
            <View id="detail_index">
                <View className="left_share">
                    <View className="share_img">
                        <Image src={require('../../images/detail/fenxiang.png')}></Image>
                        <View>分享至</View>
                    </View>
                    <Image src={require('../../images/detail/facebook.png')}></Image>
                    <Image src={require('../../images/detail/tuite.png')}></Image>
                    <Image src={require('../../images/detail/line.png')}></Image>
                </View>
                <View className="top_bar">
                    <Image src={require('../../images/backpage.png')} style={{ width: '10px', height: '20px' }} onClick={this.backPage}></Image>
                    <Text>商品详情</Text>
                    <View className="img_b">
                        <Image src={require('../../images/index/search1.png')} style={{ width: '25px', height: '20px' }}></Image>
                        <Image src={require('../../images/index/tongzhi.png')} style={{ width: '20px', height: '25px' }}></Image>
                        <Image
                            src={require('../../images/my/avator.png')}
                            style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                            onClick={this.goMy}
                        ></Image>
                    </View>
                </View>
                <View className="content">
                    <View className="pro_name">
                        <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>大圣捆绑包|至宝...(商品名)</Text>
                        <Image src={require('../../images/detail/xuanchuan.png')} className="xuanchuan_img"></Image>
                        <View className="price">
                            <Text style={{ color: '#F8779D' }}>￥500</Text>
                            <Text style={{ color: '#fff' }}>88件在售</Text>
                        </View>
                        <View className="percent">
                            <Text>3</Text>/<Text>4</Text>
                        </View>
                    </View>
                    <View className="pro_show">
                        <View className="shop_de">商品详情描述</View>
                        <View className="shop_describe">
                            <View>
                                <View className="color_pro">
                                    <Image src={require('../../images/detail/cang.png')} style={{ width: '14px', height: '14px', marginRight: '6px' }}></Image>
                                    <Text>被收藏次数25</Text>
                                </View>
                                <View className="color_pro">商品属性</View>
                            </View>
                            <View>
                                <Image src={require('../../images/detail/shop.png')} style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '5px' }}></Image>
                                <Text>卖家昵称</Text>
                            </View>
                        </View>
                    </View>
                    <View className="comment">
                        <View style={{ marginBottom: '5px' }}>
                            <Text>评论区</Text>
                            <Text style={{ fontSize: '12px', marginLeft: '5px' }}>(好评率<Text style={{ color: '#F67EA1' }}>98%</Text>)</Text>
                        </View>
                        <View>
                            {
                                this.state.comments.map((item, index) => {
                                    return (
                                        <View key={index} className="comm_item">
                                            <View className="comm_head">
                                                <View style={{ display: 'flex', alignItems: 'center' }}>
                                                    <Image src={item.avator} style={{ width: '24px', height: '24px', borderRadius: '50%', marginRight: '5px' }}></Image>
                                                    <Text>{item.name}</Text>
                                                </View>
                                                <Text>{item.time}</Text>
                                            </View>
                                            <View className="comm_con">{item.content}</View>
                                        </View>
                                    )

                                })
                            }
                            <View className="more">查看更多</View>
                        </View>
                    </View>
                </View>
                <View className="bottom_bar">
                    <View className="bt_img">
                        <Image src={require('../../images/index/star.png')}></Image>
                        <Text>收藏</Text>
                    </View>
                    <View className="bt_img">
                        <Image src={require('../../images/detail/liaotian.png')}></Image>
                        <Text>私聊</Text>
                    </View>
                    <View className="bt_img">
                        <Image src={require('../../images/detail/comment.png')}></Image>
                        <Text>评论</Text>
                    </View>
                    <View className="go_buy">立即购买</View>
                </View>
            </View>
        );
    }
}
export default Detail;
