
import Taro, { Component, requirePlugin, connectSocket } from '@tarojs/taro';
import { View, Text, Form, Image } from '@tarojs/components';
import Tabbar from '../../components/tabBar/index';
import TopBar from '../../components/topBar/index'
import { connect } from '@tarojs/redux';
import './index.less'
class Mesg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allMsg: [{
                time: '2020年1月12日', list: [
                    { avator: require('../../images/my/avator.png'), name: '李玉鹏', msg: '能便宜点吗????', lastTime: '12:12', Scroll: false },
                    { avator: require('../../images/my/avator.png'), name: '赵新月', msg: '什么时候发货', lastTime: '12:12', Scroll: false },
                    { avator: require('../../images/my/avator.png'), name: '旋涡久奈辛', msg: '还有货吗', lastTime: '12:20', Scroll: false },
                    { avator: require('../../images/my/avator.png'), name: '龚长烈', msg: '能便宜点吗??', lastTime: '17:12', Scroll: false }
                ]
            },
            {
                time: '2020年1月10日', list: [
                    { avator: require('../../images/my/avator.png'), name: '李玉鹏', msg: 'no!!', lastTime: '12:12', Scroll: false },
                    { avator: require('../../images/my/avator.png'), name: '赵新月', msg: '什么时候发货??', lastTime: '12:15', Scroll: false }
                ]
            }],
        }
    }
    componentDidMount() {

    }
    handleAngle = (start, end) => {
        var _X = end.clientX - start.clientX,
            _Y = end.clientY - start.clientY;
        //返回角度 /Math.atan()返回数字的反正切值
        return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    }

    // 触摸开始
    handleTouchStart = (index, idx, e) => {
        e.stopPropagation() // 阻止事件冒泡
        const { allMsg } = this.state;
        allMsg.forEach((items, i) => {
            items.list.forEach((item, i2) => {
                item.Scroll = false;
            })
        })
        this.setState({
            allMsg: this.state.allMsg
        })
        const { touches } = e;
        // touches.length  手指触摸屏幕的个数
        this.scroll = touches.length === 1;
        this.touches = e.touches;
    }
    handleTouchMove = (index, idx, e) => {
        if (this.scroll) {
            // 滑滑动的角度
            let angle = this.handleAngle(this.touches[0], e.touches[0]);
            // 滑滑动的角度 如果 > 30 不做操作
            if (Math.abs(angle) > 30) return;
            // PosX 手指在X轴的坐标差   判断滑动方向
            let PosX = e.touches[0].pageX - this.touches[0].pageX;
            // PosX < -50  => Left  左滑
            // PosX > 50  => Right 右滑
            if (PosX < -50) {
                this.leftMove(index, idx)

            } else if (PosX > 50) {
                console.log("向右滑");
                return
            }
        }
    }

    // 触摸结束
    handleTouchEnd = () => {
        this.scroll = false;
    }
    leftMove = (index, idx) => {
        const { allMsg } = this.state;
        allMsg.forEach((items, i) => {
            items.list.forEach((item, i2) => {
                item.Scroll = false;
            })
        })
        console.log(index, idx);
        this.state.allMsg[index].list[idx].Scroll = true;

        this.setState({
            allMsg: this.state.allMsg
        })
    }
    delete = (index, idx, e) => {
        console.log(index, idx)
        const { allMsg } = this.state;
        allMsg[index].list.splice(idx, 1);
        this.setState({
            allMsg: this.state.allMsg
        })
    }
    config = {
        navigationBarTitleText: "我的消息"
    }
    render() {
        const { allMsg } = this.state;
        return (
            <View id="msg_index">
                <TopBar />
                <View className="content">
                    {
                        allMsg.map((items, index) => {
                            return (
                                <View className="msg_box">
                                    <View className="msg_time">{items.time}</View>

                                    {
                                        items.list.map((item, idx) => {
                                            return (
                                                <View className={item.Scroll ? 'pro_long active' : 'pro_long'}>
                                                    <View className='item_box'
                                                        key={idx}
                                                        hoverClass="bgccc"
                                                        onTouchStart={this.handleTouchStart.bind(this, index, idx)}
                                                        onTouchMove={this.handleTouchMove.bind(this, index, idx)}
                                                        onTouchEnd={this.handleTouchEnd.bind(this, idx)}
                                                    >
                                                        <Image src={item.avator} className="avator_img"></Image>
                                                        <View className="rig_msg">
                                                            <View className="rig_top">
                                                                <Text>{item.name}</Text>
                                                                <Text>{item.lastTime}</Text>
                                                            </View>
                                                            <View className="rig_bt">{item.msg}</View>
                                                        </View>
                                                    </View>
                                                    <View className="delete" onClick={this.delete.bind(this, index, idx)}>
                                                        <Image src={require('../../images/deicon.png')}></Image>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>

                            )
                        })
                    }
                </View>
                <Tabbar index={3} />
            </View>
        );
    }
}

/*
connect 方法接受两个参数 (mapStateToProps,mapDispatchToProps)
mapStateToProps，函数类型，接受最新的 state 作为参数，用于将 state 映射到组件的 props
mapDispatchToProps，函数类型，接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
将store中的reduces/counter下的state映射为自己的props
*/
export default connect()(Mesg);

