
import Taro, { Component, requirePlugin } from '@tarojs/taro';
import { View, Text, Input, Image, Picker, Textarea } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index';
import TopBar from '../../components/topBar/index';
import './index.less'
class Publish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGame: ['请选择游戏', '王者荣耀', '英雄联盟', '地下城与勇士', '炉石传说', '倩女幽魂'],
            selectIdx: 0,
            checkFlag: false
        }
    }

    componentDidMount() { }
    config = {
        navigationBarTitleText: "发布页"
    }
    changePro = (e) => {
        console.log(e.detail.value);
        let idx = e.detail.value;
        this.setState({
            selectIdx: idx
        })
    }
    agree = () => {
        this.setState({
            checkFlag: !this.state.checkFlag
        })
    }
    render() {
        return (
            <View id="publish_index">
                <TopBar />
                <View className="content">
                    <View className="pro_head">商品发布</View>
                    <View className="pro_ipt">
                        <View className="shuxian"></View>
                        <Input placeholder="请输入商品名称"></Input>
                    </View>
                    <View className="pro_ipt">
                        <View className="shuxian"></View>
                        <Picker mode="selector" range={this.state.allGame} onChange={this.changePro}>
                            <View>{this.state.allGame[this.state.selectIdx]}</View>
                        </Picker>
                    </View>
                    <View className="pro_describe">
                        <View className="pro_ipt">
                            <View className="shuxian"></View>
                            <Text>描述商品</Text>
                        </View>
                        <Textarea className="describe_text" autoHeight></Textarea>
                    </View>
                    <View className="img_list">
                        <View className="img_item">
                            <Image src={require('../../images/add.png')}></Image>
                            <Text>添加图片</Text>
                        </View>
                        {
                            [...new Array(5)].map((item, index) => {
                                return (
                                    <View className="img_item" key={index}>
                                        <Image src={require('../../images/delete.png')} className="delete_img"></Image>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View className="price_de">
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/jiage.png')}></Image>
                                <Text>价格</Text>
                            </View>
                            <Text style={{ color: '#f67ea1' }}>￥30.00</Text>
                        </View>
                        <View>
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <Image src={require('../../images/kucun.png')}></Image>
                                <Text>库存</Text>
                            </View>
                            <Input placeholder="点击填写"></Input>
                        </View>
                    </View>
                    <View className="agreement">
                        <View className="agree_head">
                            <View style={{ display: 'flex', alignItems: 'center' }}>
                                <View className="shuxian"></View>
                                <Text>勾选某某协议</Text>
                            </View>
                            {
                                this.state.checkFlag ? (
                                    <Image src={require('../../images/radio-s.png')} onClick={this.agree}></Image>
                                ) : (
                                        <Image src={require('../../images/radio.png')} onClick={this.agree}></Image>
                                    )
                            }
                        </View>
                        <View style={{ color: '#666' }}>内容内容协议内容协议内容协议内容协议内容内容内容内容协议内容协议内容协议洒基护发斯蒂芬PDF卡死</View>
                    </View>
                    <View className="publish_btn">同意协议并发布商品</View>
                </View>
                <Tabbar index={2} />
            </View>
        );
    }
}
export default Publish;
