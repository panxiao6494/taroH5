import Taro, { Component } from "@tarojs/taro";
import $httpRequest from "../../http";
import Tabbar from '../../components/tabBar/index';
import Comment from "./comment";
import TopBar from '../../components/topBar/index'
import {
  View,
  Text,
  Button,
  Navigator,
  Image,
  Input,
  Swiper,
  SwiperItem,
  ScrollView
} from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFlag: true,
      current: 0,
      cur: 0,
      allCate: ['热门游戏', '手游', '端游', '其他'],
      gameList: [
        { imgUrl: require('../../images/game/8.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/13.png'), gameName: '植物大战僵尸' },
        { imgUrl: require('../../images/game/3.png'), gameName: '愤怒的小鸟1' },
        { imgUrl: require('../../images/game/4.png'), gameName: '愤怒的小鸟3' },
        { imgUrl: require('../../images/game/2.png'), gameName: '安卓应用' },
        { imgUrl: require('../../images/game/8.png'), gameName: '逆风飞翔' },
        { imgUrl: require('../../images/game/11.png'), gameName: '微信talktalktalk' },
        { imgUrl: require('../../images/game/7.png'), gameName: '吃糖果小人' },
      ],
      swiperList: [
        { url: require('../../images/index/swiper.png') },
        { url: require('../../images/index/mebg.png') },
        { url: require('../../images/index/swiper.png') },
        { url: require('../../images/index/swiper.png') }
      ],
      historyList: [
        { url: require('../../images/index/1.png'), name: '铭刻|剑圣|至宝', price: '￥200.00' },
        { url: require('../../images/index/2.png'), name: '大圣|捆绑|至宝', price: '￥210.00' },
        { url: require('../../images/index/3.png'), name: '尊享|屠夫|至宝', price: '￥300.00' },
        { url: require('../../images/index/3.png'), name: '尊享|屠夫|至宝', price: '￥300.00' }
      ]
    };
  }
  componentWillMount() { }

  componentDidMount() {
    // $httpRequest("POST", "category/listCommodityByCategoryId", {}).then(res => {
    //   console.log(res);
    // });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: "首页"
  };
  chooseCate = (idx) => {
    console.log(idx);
    this.setState({
      cur: idx
    })
  }
  swipetChange(e) {
    //console.log(e.detail.current)
    let current = e.detail.current;
    this.setState({
      current: current
    })

  }
  goMy() {
    Taro.navigateTo({
      url: '/pages/myCenter/index'
    })
  }
  toDetail(id) {
    Taro.navigateTo({
      url: '/pages/detail/index?id=' + id
    })
  }
  render() {
    const { current } = this.state;
    return (
      <View id="index_idx">
        <View className="head">
          <Swiper className="swiper_box" autoplay circular onChange={this.swipetChange.bind(this)} interval={1500}>
            {
              this.state.swiperList.map((item, index) => {
                return (
                  <SwiperItem key={index} style={{ width: '100%' }}>
                    <Image src={item.url} className="mebg"></Image>
                  </SwiperItem>
                )
              })
            }
          </Swiper>
          <View className="idots">
            {
              this.state.swiperList.map((item, index) => {
                return (
                  <View className={index == current ? 'active' : 'idot'}></View>
                )
              })
            }
          </View>
          <TopBar />
        </View>
        <View style={{ backgroundColor: '#fff', paddingTop: '10px' }}>
          <View className="tab_game">
            {
              this.state.allCate.map((item, index) => {
                return (
                  <View key={index} className={index == this.state.cur ? "active" : ''} onClick={this.chooseCate.bind(this, index)}>{item}</View>
                )
              })
            }
            <View className="more">
              <Text style={{ marginRight: '8px' }}>更多</Text>
              <Image src={require('../../images/index/more.png')} style={{ width: '10px', height: '10px', margin: 0 }}></Image>
            </View>
          </View>
          <View className="left_cate">
            {
              this.state.gameList.map((item, index) => {
                return (
                  <View key={index} className="game_box">
                    <Image src={item.imgUrl} className="game_img"></Image>
                    <View className="text_box">
                      <Text>{item.gameName}</Text>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className="history_product">
          <View className="pro_head">
            <View style={{ display: 'flex', justifyContent: "space-between" }}>
              <View style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                <Image src={require('../../images/index/zuijin.png')} style={{ width: '17px', height: '17px', marginTop: '2px' }}></Image>
                <Text style={{ marginLeft: '5px' }}>最近浏览的商品</Text>
              </View>

              <View className="more">
                <Text style={{ marginRight: '8px' }}>更多</Text>
                <Image src={require('../../images/index/more.png')} style={{ width: '10px', height: '10px', margin: 0 }}></Image>
              </View>
            </View>
          </View>
          <ScrollView scrollX={true} style={{ display: 'flex', marginTop: '12px' }}>
            {
              this.state.historyList.map((item, index) => {
                return (
                  <View key={index} className="scroll_pro" onClick={this.toDetail.bind(this, index)}>
                    <View className="pro_item">
                      <Image src={item.url}></Image>
                      <Text className="item_price">{item.price}</Text>
                    </View>
                    <Text style={{ color: '#999' }}>{item.name}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
        <View className="comment_box">
          <View style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Image src={require('../../images/index/last.png')} style={{ width: '17px', height: '17px', marginRight: '2px' }}></Image>
            <Text>最新评论</Text>
          </View>
          <Comment />

        </View>
        <View className="copy_right">
          <View hoverClass="font_bg">网页介绍</View>
          <View hoverClass="font_bg">指北</View>
          <View hoverClass="font_bg">情报保密</View>
          <View hoverClass="font_bg">免费声明</View>
          <View hoverClass="font_bg">常见问题</View>
          <View hoverClass="font_bg">手续费支付方法</View>
        </View>

        <View className="bt_line">
          <View className="lin"></View>
          <Text>我也是有底线的</Text>
          <View className='lin'></View>
        </View>
        <Tabbar index={0} />
      </View>
    );
  }
}
