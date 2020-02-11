
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Input } from '@tarojs/components';
import './index.less'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [
                { img: require('../../images/game/9.png'), isEmpty: false, pro_name: '商品名称商品名称商品名称商品名称商品名称商品名称', detailMsg: '简介信息', favPersent: "98%", price: 66 },
                { img: require('../../images/game/1.png'), isEmpty: false, pro_name: '商品名称商品名称商品名称商品名称商品名称商品名称', detailMsg: '简介信息', favPersent: "95%", price: 66 },
                { img: require('../../images/game/2.png'), isEmpty: false, pro_name: '商品名称商品名称商品名称商品名称商品名称商品名称', detailMsg: '简介信息', favPersent: "98%", price: 77 },
                { img: require('../../images/game/9.png'), isEmpty: true, pro_name: '商品名称商品名称商品名称商品名称商品名称商品名称', detailMsg: '简介信息', favPersent: "98%", price: 66 },
                { img: require('../../images/game/2.png'), isEmpty: true, pro_name: '商品名称商品名称商品名称商品名称商品名称商品名称', detailMsg: '简介信息', favPersent: "94%", price: 85 }
            ]
        }
    }

    componentDidMount() { }
    config = {
        navigationBarTitleText: "商品页"
    };
    backPage() {
        Taro.navigateBack()
    }
    render() {
        return (
            <View id="product_index">
                <View className="top_bar">
                    <Image src={require('../../images/backpage.png')} style={{ width: '10px', height: '20px' }} onClick={this.backPage}></Image>
                    <Text>王者荣耀</Text>
                    <View className="talk">聊天版</View>
                </View>
                <View style={{ paddingTop: '10px', paddingBottom: "10px" }}>
                    <View className="search_box">
                        <Image src={require('../../images/search.png')} style={{ width: '25px', height: '21px' }}></Image>
                        <Input placeholder="输入游戏名称搜索" />
                    </View>
                </View>
                <View className="buy_tab">
                    <View className="tab_item">
                        <View>
                            <Image src={require('../../images/list.png')} style={{ width: '20px', height: '20px' }}></Image>
                            <Text>商品类型</Text>
                            <Image src={require('../../images/order_s.png')} style={{ width: '15px', height: '7px' }}></Image>
                        </View>
                        <View>
                            <Image src={require('../../images/paixu.png')} style={{ width: '15px', height: '15px' }}></Image>
                            <Text>价格</Text>
                            <Image src={require('../../images/order.png')} style={{ width: '15px', height: '7px' }}></Image>
                        </View>
                        <View>
                            <View style={{ color: '#999' }}>想买/</View>
                            <View style={{ color: '#f67ea1' }}>想卖</View>
                        </View>
                    </View>

                    <View className="publish">发布</View>
                </View>
                <View className="pro_box">
                    {
                        this.state.productList.map((item, index) => {
                            return (
                                <View key={index} className="pro_item">
                                    <Image src={item.img} className="pro_img"></Image>
                                    {
                                        item.isEmpty ? (
                                            <View className="empty">已售完</View>
                                        ) : null
                                    }
                                    <View className="pro_left">
                                        <View>
                                            <View className={item.isEmpty ? "pro_line" : "pro_name"}>{item.pro_name}</View>
                                            <View style={{ color: '#777' }}>
                                                <Text>【商品简介】</Text>
                                                <Text>{item.detailMsg}</Text>
                                            </View>
                                        </View>
                                        <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text>好评率   <Text style={{ color: '#777' }}>{item.favPersent}</Text></Text>
                                            <Text className={item.isEmpty ? 'empty_line' : 'price_text'}>{item.price}<Text>元</Text></Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}
export default Product;
