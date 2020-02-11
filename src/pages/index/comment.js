import { View, Text, Image, Navigator } from '@tarojs/components';
import Taro, { useState, useEffect } from '@tarojs/taro';
import './index.less';

function Comment(props) {
    const [starList, setStart] = useState([1, 2, 3, 4, 5])
    const [commentList, setComment] = useState([
        {
            star: 2.5,
            content: '太好玩了！！评论内容，评论内容，太好玩了！评论内容，评论内容，太好玩了！！评论内容，评论内容，太好玩了评论内容，评论内容',
            player: '沧海yue',
            playerUrl: require('../../images/index/touxiang.png'),
            time: '2020年2月9日'
        },
        {
            star: 3,
            content: '太好玩了！！评论内容，评论内容，道具便宜！！评论内容，评论内容评论内容，太好玩了！！评论内容，评论内容，太好玩了！！评论内容，评论内容',
            player: '沧海小月',
            playerUrl: require('../../images/index/touxiang.png'),
            time: '2020年2月1日'
        },
        {
            star: 4.5,
            content: '太好玩了！！评论内容，评论内容，太好玩了！！评论内容，评论内容，太好玩了！！评论内容，评论内容，太好玩了评论内容，评论内容',
            player: '独孤九剑',
            playerUrl: require('../../images/index/touxiang.png'),
            time: '2020年3月1日'
        }

    ])
    useEffect(() => {
        console.log(commentList, 22)
    }, [commentList])


    return (
        <View>
            {
                commentList.map((item, index) => {
                    return (
                        <View key={index} className="item_bg">
                            <View className="star">
                                <View className="unstar_box">
                                    {
                                        starList.map((item1, idx) => {
                                            return (
                                                <Image src={require('../../images/index/ustar.png')} style={{ width: '13px', height: '13px' }}></Image>
                                            )
                                        })
                                    }
                                </View>
                                <View className="star_box">
                                    {
                                        [...new Array(Math.ceil(item.star))].map((item3, id) => {
                                            return (
                                                <Image src={(item.star - (id + 1)) >= 0 ? require('../../images/index/star.png') : require('../../images/index/hstar.png')}
                                                    style={{ width: '13px', height: '13px' }}
                                                    key={id}
                                                />
                                            )
                                        })
                                    }
                                </View>
                                <Image src={require('../../images/index/new.png')} style={{ width: '26px', height: '11px', marginLeft: '10px' }}></Image>
                            </View>

                            <View style={{ fontSize: '15px', color: "#777", lineHeight: '18px' }}>{item.content}</View>

                            <View className="bottom_a">
                                <View style={{ display: 'flex', alignItems: 'center', color: '#F8779D' }}>
                                    <Image src={item.playerUrl} style={{ width: '15px', height: "15px", marginRight: '7px' }}></Image>
                                    <Text>{item.player}</Text>
                                </View>
                                <Text>{item.time}</Text>
                            </View>
                        </View>

                    )
                })
            }
        </View>
    )
}

export default Comment;