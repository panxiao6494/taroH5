
import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Image, Navigator } from '@tarojs/components';
import CateTab from '../../components/cateTab/index'
import Tabbar from '../../components/tabBar/index';
import { connect } from '@tarojs/redux';
import { asyncGame } from '../../redux/actions/gameCate'
import './index.less';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cur: 0,
            cateCur: null,
            allCate: ['全部', '手游', '端游', '其他'],
            searchCate: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    state = {}
    config = {
        navigationBarTitleText: "搜索"
    };
    componentDidMount() {
        this.props.getGameList()
    }
    chooseCate = (idx) => {
        console.log(idx);
        this.setState({
            cur: idx
        })
    }
    changeCate(i) {
        console.log(i)
        this.setState({
            cateCur: i
        })
    }
    goProduct(i) {
        Taro.navigateTo({
            url: '/pages/product/index?id=' + i
        })
    }
    render() {

        const gameCateList = this.props.gameCateList.gameCateList;
        console.log(this.props, 6766)
        return (
            <View id="search_index">
                <View className="topSearch">
                    <View className="search_box">
                        <Image src={require('../../images/search.png')} style={{ width: '25px', height: '21px' }}></Image>
                        <Input placeholder="输入游戏名称搜索" />
                    </View>
                </View>
                <CateTab chooseCate={this.chooseCate} allCate={this.state.allCate} />
                <View className="all_game">
                    <View className="left_cate">
                        {
                            gameCateList.length > 0 ? (
                                gameCateList[this.state.cur].map((item, index) => {
                                    return (
                                        <View key={index} className="game_box" onClick={this.goProduct.bind(this, index)}>
                                            <Image src={item.imgUrl} className="game_img"></Image>
                                            <View className="text_box">
                                                <Text>{item.gameName}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            ) : (
                                    <View>
                                        <Text>加载中-----</Text>
                                    </View>
                                )

                        }
                    </View>
                    <View className="right_cate">
                        <View>
                            人气
                        </View>
                        <View className="riyu">
                            {
                                this.state.searchCate.map((item, index) => {
                                    return (
                                        <View key={index}
                                            className={index == this.state.cateCur ? 'active' : ''}
                                            onClick={this.changeCate.bind(this, index)}>{item}</View>
                                    )
                                })
                            }
                        </View>

                    </View>
                </View>
                <Tabbar index={1} />
            </View>
        );
    }
}
export default connect(({ gameCateList }) => ({
    gameCateList
}), dispatch => ({
    getGameList() {
        dispatch(asyncGame())
    }
}))(Search)
